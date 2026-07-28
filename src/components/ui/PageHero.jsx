import { motion } from 'framer-motion'
import Breadcrumbs from './Breadcrumbs'
import FloatingIngredients from './FloatingIngredients'

/** Shared masthead for every inner page. */
export default function PageHero({ eyebrow, title, subtitle, trail, children, dark = false }) {
  return (
    <header
      className={`relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24 ${
        dark ? 'bg-forest-900 text-white' : 'surface-alt'
      }`}
    >
      {/* ambient wash */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 ${
          dark
            ? 'bg-[radial-gradient(ellipse_70%_60%_at_20%_0%,rgb(76_175_80_/_0.28),transparent_65%),radial-gradient(ellipse_50%_50%_at_90%_20%,rgb(255_193_7_/_0.16),transparent_60%)]'
            : 'bg-[radial-gradient(ellipse_60%_60%_at_15%_0%,rgb(76_175_80_/_0.14),transparent_65%),radial-gradient(ellipse_45%_45%_at_88%_15%,rgb(255_193_7_/_0.14),transparent_60%)]'
        }`}
      />
      <FloatingIngredients />

      <div className="shell relative">
        {trail && (
          <div className="mb-6">
            <Breadcrumbs trail={trail} light={dark} />
          </div>
        )}

        <div className="max-w-3xl">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={dark ? 'eyebrow border-white/25 bg-white/10 !text-turmeric-300' : 'eyebrow'}
            >
              {eyebrow}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className={`mt-6 max-w-2xl text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-soft'}`}
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}
