import { useCallback, useId, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Pointer } from 'lucide-react'
import Section, { SectionHeading } from '../ui/Section'
import Reveal, { RevealGroup, RevealItem } from '../ui/Reveal'
import ReasonArt from './ReasonArt'
import { whyChoose } from '../../data/content'

/**
 * Interactive reason cards. Each carries a bespoke animated illustration that
 * plays on hover *and* keyboard focus, plus a detail panel revealed on click.
 * All eight headlines stay visible so the section is still scannable — only the
 * supporting detail is progressively disclosed.
 */
function ReasonCard({ reason, index, open, onToggle }) {
  const panelId = `${useId()}-panel`
  const cardRef = useRef(null)
  const reduce = useReducedMotion()

  // Feeds the CSS cursor spotlight without re-rendering React on every move.
  const trackPointer = useCallback((e) => {
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--rx', `${e.clientX - r.left}px`)
    el.style.setProperty('--ry', `${e.clientY - r.top}px`)
  }, [])

  return (
    <article
      ref={cardRef}
      onPointerMove={trackPointer}
      className={`reason-card surface-card group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-500 ${
        open
          ? 'border-leaf-500/55 shadow-lift'
          : 'hairline hover:-translate-y-1.5 hover:border-leaf-500/40 hover:shadow-lift'
      }`}
    >
      {/* Full-card hit target, above the artwork but below the detail text so
          the panel stays selectable once open. */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="absolute inset-0 z-20 rounded-[inherit]"
      >
        <span className="sr-only">
          {open ? 'Hide details for' : 'Show details for'} {reason.title}
        </span>
      </button>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-3 font-heading text-5xl font-extrabold text-forest-500/[0.07] transition-colors duration-500 group-hover:text-forest-500/[0.13]"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="pointer-events-none relative">
        <span
          aria-hidden="true"
          className="absolute left-1 top-1 size-16 rounded-2xl bg-gradient-to-br from-forest-500/12 to-leaf-500/20 blur-md transition-opacity duration-500 group-hover:opacity-0"
        />
        <ReasonArt name={reason.spot} className="relative size-[86px]" />
      </div>

      <h3 className="pointer-events-none mt-4 font-heading text-lg font-bold leading-snug">{reason.title}</h3>
      <p className="text-soft pointer-events-none mt-2.5 flex-1 text-sm leading-relaxed">{reason.body}</p>

      <div className="pointer-events-none mt-5 flex items-center justify-between gap-3 border-t pt-4">
        <span className="rounded-full bg-forest-500/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-forest-600 dark:text-leaf-300">
          {reason.stat}
        </span>
        <span
          className={`flex items-center gap-1 text-[11px] font-bold transition-colors duration-300 ${
            open
              ? 'text-forest-600 dark:text-leaf-300'
              : 'text-soft group-hover:text-forest-600 dark:group-hover:text-leaf-300'
          }`}
        >
          {open ? 'Less' : 'How'}
          <ChevronDown className={`size-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-30 overflow-hidden"
          >
            <p className="text-soft mt-4 border-t pt-4 text-[13px] leading-relaxed">{reason.detail}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export default function WhyChoose() {
  const [openIndex, setOpenIndex] = useState(null)
  const [allOpen, setAllOpen] = useState(false)

  const isOpen = (i) => allOpen || openIndex === i

  const handleToggle = (i) => {
    if (allOpen) {
      // Leaving "expand all" collapses the rest and keeps this one open.
      setAllOpen(false)
      setOpenIndex(i)
    } else {
      setOpenIndex((cur) => (cur === i ? null : i))
    }
  }

  return (
    <Section id="why" alt>
      <div className="shell">
        <SectionHeading
          eyebrow="Why AG Fresh Foods"
          title="Eight reasons families keep coming back"
          body="We only make one thing, and we have spent nine years getting it right. Open any card to see what that looks like in practice."
        />

        <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="text-soft inline-flex items-center gap-2 rounded-full border hairline px-4 py-2 text-[12.5px] font-medium">
            <Pointer className="size-3.5" aria-hidden="true" />
            Hover or tap a card
          </span>
          <button
            type="button"
            onClick={() => {
              setAllOpen((v) => !v)
              setOpenIndex(null)
            }}
            aria-pressed={allOpen}
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-forest-500/60 px-4 py-1.5 text-[12.5px] font-bold text-forest-600 transition-all duration-300 hover:bg-forest-500 hover:text-white dark:border-leaf-400/60 dark:text-leaf-300 dark:hover:bg-leaf-500 dark:hover:text-forest-950"
          >
            {allOpen ? 'Collapse all' : 'Expand all'}
            <ChevronDown className={`size-3.5 transition-transform duration-300 ${allOpen ? 'rotate-180' : ''}`} />
          </button>
        </Reveal>

        <RevealGroup className="mt-12 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((reason, i) => (
            <RevealItem key={reason.title} className="h-full">
              <ReasonCard reason={reason} index={i} open={isOpen(i)} onToggle={() => handleToggle(i)} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  )
}
