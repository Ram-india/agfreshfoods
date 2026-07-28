import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { whatsappLink } from '../../data/site'

/** WhatsApp FAB + back-to-top, desktop/tablet (mobile uses the sticky bar). */
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-6 right-5 z-40 hidden flex-col items-end gap-3 lg:flex">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="glass-strong grid size-11 place-items-center rounded-full text-forest-600 shadow-soft transition-transform hover:-translate-y-0.5 dark:text-leaf-300"
          >
            <ChevronUp className="size-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, type: 'spring', stiffness: 260, damping: 18 }}
        aria-label="Chat with AG Fresh Foods on WhatsApp"
        className="group relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgb(37_211_102_/_0.7)] transition-transform duration-300 hover:scale-105"
      >
        {/* pulse */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25 [animation-duration:2.6s]" />
        <svg viewBox="0 0 24 24" className="relative size-7" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.34-.53.05-1.03.24-3.5-.96-2.98-1.45-4.85-4.57-5-4.78-.14-.22-1.18-1.62-1.18-3.1 0-1.47.77-2.19 1.04-2.5.27-.29.58-.36.77-.36s.39 0 .55.01c.19.01.44-.07.68.53.24.6.84 2.06.91 2.2.07.15.12.32.02.53-.1.2-.19.32-.39.53-.19.22-.29.32-.43.53-.14.2-.29.43-.05.82.24.39.87 1.42 1.86 2.3 1.28 1.13 2.1 1.4 2.4 1.55.29.15.46.12.63-.07.17-.2.75-.86.96-1.16.2-.29.4-.24.68-.14.27.1 1.74.82 2.04.97.29.15.49.22.56.34.07.12.07.7-.17 1.39Z" />
        </svg>
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-forest-900 px-3.5 py-2 text-xs font-semibold text-white opacity-0 shadow-lift transition-opacity duration-300 group-hover:opacity-100">
          Chat with us
        </span>
      </motion.a>
    </div>
  )
}
