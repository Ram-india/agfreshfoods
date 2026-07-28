import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import Art from '../ui/Art'
import { RevealGroup, RevealItem } from '../ui/Reveal'

/** Masonry-ish grid with hover zoom and a lightbox. */
export default function GalleryGrid({ items, limit }) {
  const shown = limit ? items.slice(0, limit) : items
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % shown.length)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + shown.length) % shown.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, shown.length])

  return (
    <>
      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((item, i) => (
          <RevealItem key={item.title} className={i % 5 === 0 ? 'sm:col-span-2' : ''}>
            <button
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden rounded-3xl border hairline shadow-soft transition-all duration-500 hover:shadow-lift"
            >
              <div className={`overflow-hidden ${i % 5 === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                <Art
                  name={item.art}
                  label={item.title}
                  className="size-full transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
              </div>

              <span className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />

              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-left">
                <span>
                  <span className="block font-heading text-base font-bold text-white">{item.title}</span>
                  <span className="mt-0.5 block text-xs text-white/70">{item.caption}</span>
                </span>
                <span className="grid size-9 shrink-0 translate-y-2 place-items-center rounded-full bg-white/90 text-forest-700 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ZoomIn className="size-4" />
                </span>
              </span>
            </button>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] grid place-items-center bg-forest-950/90 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={shown[active].title}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="size-5" />
            </button>

            <motion.figure
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl overflow-hidden rounded-3xl shadow-lift"
            >
              <Art name={shown[active].art} label={shown[active].title} className="aspect-[4/3] w-full" />
              <figcaption className="bg-forest-900 px-6 py-4 text-white">
                <p className="font-heading text-base font-bold">{shown[active].title}</p>
                <p className="mt-0.5 text-sm text-white/60">{shown[active].caption}</p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
