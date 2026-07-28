import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={item.q}
            className={`surface-card overflow-hidden rounded-2xl border transition-colors duration-300 ${
              isOpen ? 'border-leaf-500/50 shadow-soft' : 'hairline hover:border-leaf-500/30'
            }`}
          >
            <h3>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <span className="font-heading text-base font-semibold sm:text-lg">{item.q}</span>
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                    isOpen ? 'bg-forest-500 text-white' : 'bg-forest-500/10 text-forest-600 dark:text-leaf-300'
                  }`}
                >
                  <ChevronDown
                    className={`size-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-soft px-5 pb-6 text-[15px] leading-relaxed sm:px-6">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
