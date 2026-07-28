import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import Section, { SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Art from '../ui/Art'
import DayArc from './DayArc'
import { processSteps } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

/**
 * Illustrated production timeline. GSAP draws the connecting line and pops each
 * step in as the section scrolls through; on mobile it becomes a vertical rail.
 */
export default function Process() {
  const rootRef = useRef(null)
  const olRef = useRef(null)
  const railRef = useRef(null)
  const badgeRef = useRef(null)
  const lastBadgeRef = useRef(null)

  // The rail has to line up with the centre of the icon badges, which sit below
  // illustrations whose height varies with the viewport — so measure it rather
  // than guess. Ends are pinned to the first and last badge centres so the line
  // does not overhang the row.
  useEffect(() => {
    const place = () => {
      const rail = railRef.current
      const first = badgeRef.current
      const last = lastBadgeRef.current
      const ol = olRef.current
      if (!rail || !first || !last || !ol) return

      const parent = ol.parentElement
      if (!parent) return
      const p = parent.getBoundingClientRect()
      const f = first.getBoundingClientRect()
      const l = last.getBoundingClientRect()

      rail.style.top = `${f.top - p.top + f.height / 2 - 1.5}px`
      rail.style.left = `${f.left - p.left + f.width / 2}px`
      rail.style.right = `${p.right - (l.left + l.width / 2)}px`
    }

    place()
    window.addEventListener('resize', place)
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(place) : null
    if (ro && olRef.current) ro.observe(olRef.current)
    // Re-measure once webfonts land, since they shift the tile below them.
    document.fonts?.ready?.then(place)

    return () => {
      window.removeEventListener('resize', place)
      ro?.disconnect()
    }
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.proc-line-fill',
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: rootRef.current, start: 'top 65%', end: 'bottom 75%', scrub: 0.6 },
        }
      )

      gsap.utils.toArray('.proc-step').forEach((step, i) => {
        gsap.fromTo(
          step,
          { autoAlpha: 0, y: 42, scale: 0.94 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: 'power3.out',
            delay: (i % 4) * 0.08,
            scrollTrigger: { trigger: step, start: 'top 88%', once: true },
          }
        )
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section id="process" alt>
      <div ref={rootRef}>
        <div className="shell">
          <SectionHeading
            eyebrow="How It's Made"
            title="From grain to your kitchen in one morning"
            body="Seven steps, every single day. Nothing is stored overnight and nothing is carried over to tomorrow."
          />

          {/* the whole journey at a glance */}
          <Reveal delay={0.08} className="mx-auto mt-12 max-w-5xl">
            <DayArc />
          </Reveal>
        </div>

        {/* Seven columns need more room than the 80rem text column allows, so
            the step row runs on the wider track while the heading stays centred. */}
        <div className="shell-wide relative mt-20 lg:mt-24">
          {/* desktop rail — position measured from the first and last badges */}
          <div
            ref={railRef}
            aria-hidden="true"
            className="absolute hidden h-[3px] rounded-full bg-forest-500/12 lg:block"
          >
            <div className="proc-line-fill h-full origin-left rounded-full bg-gradient-to-r from-forest-500 via-leaf-500 to-turmeric-500" />
          </div>

          <ol
            ref={olRef}
            className="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 lg:gap-x-7"
          >
            {processSteps.map((step, i) => (
              <li key={step.title} className="proc-step group relative lg:text-center">
                {/* illustration */}
                <div className="relative overflow-hidden rounded-2xl border hairline shadow-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lift">
                  <Art
                    name={step.art}
                    label={`${step.title} — step ${i + 1} of the AG Fresh Foods process`}
                    className="aspect-[5/4] w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                  />
                  {/* step number */}
                  <span className="absolute left-2.5 top-2.5 grid size-7 place-items-center rounded-full bg-white/95 font-heading text-[11px] font-extrabold text-forest-700 shadow-soft">
                    {i + 1}
                  </span>
                  {/* clock time */}
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/85 to-transparent px-2 pb-1.5 pt-5 text-[10px] font-bold tabular-nums text-white">
                    {step.time}
                  </span>
                </div>

                {/* icon badge straddling the rail */}
                <div className="mt-5 flex items-center gap-3.5 lg:mt-8 lg:flex-col lg:gap-0">
                  <span
                    ref={i === 0 ? badgeRef : i === processSteps.length - 1 ? lastBadgeRef : undefined}
                    className="relative z-10 grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-forest-500 to-leaf-500 text-white shadow-[0_8px_20px_-6px_rgb(46_125_50_/_0.6)] lg:mx-auto"
                  >
                    <Icon name={step.icon} className="size-[19px]" />
                  </span>
                  <h3 className="font-heading text-[15px] font-bold leading-snug lg:mt-6">{step.title}</h3>
                </div>

                <p className="text-soft mt-3 pl-[58px] text-[13px] leading-relaxed lg:mt-3.5 lg:pl-0">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="shell">
          <Reveal delay={0.1} className="mt-16 text-center">
            <Button to="/manufacturing-process" variant="outline">
              See each step up close <ArrowRight className="size-4" />
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
