import { motion, useReducedMotion } from 'framer-motion'
import { BadgeCheck, Leaf, Snowflake, Sparkles, Star } from 'lucide-react'
import Button from '../ui/Button'
import Art, { SmartImage } from '../ui/Art'
import FloatingIngredients from '../ui/FloatingIngredients'
import { whatsappLink } from '../../data/site'

const floatCards = [
  { icon: Snowflake, text: 'Fresh Daily', pos: 'left-0 top-[16%] lg:-left-8', delay: 0.7 },
  { icon: BadgeCheck, text: 'No Preservatives', pos: 'right-0 top-[44%] lg:-right-6', delay: 0.9 },
  { icon: Leaf, text: 'Healthy Black Rice', pos: 'left-2 bottom-[14%] lg:-left-4', delay: 1.1 },
]

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* background: photo slot + gradient wash */}
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <SmartImage
          src="hero-family-breakfast.jpg"
          art="hero"
          alt=""
          eager
          fill
          imgClassName="scale-105"
        />
        <div className="absolute inset-0 bg-[var(--surface)]/88 dark:bg-forest-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_60%_at_18%_10%,rgb(76_175_80_/_0.2),transparent_62%),radial-gradient(ellipse_50%_50%_at_92%_25%,rgb(255_193_7_/_0.18),transparent_60%)]" />
      </div>

      <div className="texture-grain absolute inset-0 -z-10" aria-hidden="true" />
      <FloatingIngredients className="-z-10" />

      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* ---- copy ---- */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="eyebrow">
                <Sparkles className="size-3.5" />
                Ground fresh every morning
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-soft">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-turmeric-500 text-turmeric-500" />
                  ))}
                </span>
                12,000+ happy families
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem]"
            >
              Freshness
              <br />
              You Can <span className="gradient-text">Taste</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl font-heading text-lg font-medium leading-snug sm:text-xl"
            >
              Healthy traditional idly &amp; dosa batter made fresh every day.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="text-soft mt-4 max-w-lg text-base leading-relaxed"
            >
              Made from carefully selected ingredients without preservatives — stone ground before
              dawn and delivered cold, so breakfast tastes the way it did at home.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button href={whatsappLink()} size="lg">
                Order Now
              </Button>
              <Button to="/dealers" variant="outline" size="lg">
                Become a Dealer
              </Button>
            </motion.div>

            {/* trust strip */}
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-11 flex flex-wrap gap-x-9 gap-y-5 border-t pt-7"
            >
              {[
                ['180+', 'Retail stores'],
                ['4°C', 'Cold chain'],
                ['0', 'Preservatives'],
                ['5 AM', 'Daily dispatch'],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-heading text-2xl font-extrabold text-forest-600 dark:text-leaf-400">{v}</dt>
                  <dd className="text-soft mt-0.5 text-xs font-medium uppercase tracking-wide">{l}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ---- product visual ---- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 26 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* glow */}
            <div
              aria-hidden="true"
              className="absolute inset-6 -z-10 rounded-full bg-gradient-to-tr from-leaf-500/35 to-turmeric-500/30 blur-3xl"
            />

            <motion.div
              animate={reduce ? {} : { y: [0, -14, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative overflow-hidden rounded-[2.25rem] border-4 border-white/70 shadow-lift dark:border-white/10"
            >
              <SmartImage
                src="hero-packet.jpg"
                art="kavuni"
                alt="AG Fresh Foods Karuppu Kavuni idly and dosa batter packet"
                eager
                ratio="aspect-[4/5]"
              />
              {/* bottom label */}
              <div className="glass-strong absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl px-4 py-3">
                <div>
                  <p className="font-heading text-sm font-bold">Karuppu Kavuni Batter</p>
                  <p className="text-soft text-[11px] font-medium">Heritage black rice · 500 g / 1 kg</p>
                </div>
                <span className="rounded-full bg-forest-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  Bestseller
                </span>
              </div>
            </motion.div>

            {/* floating feature cards */}
            {floatCards.map(({ icon: Ico, text, pos, delay }) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, scale: 0.8, x: -12 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
                className={`glass-strong absolute ${pos} flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 shadow-soft`}
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-forest-500/12 text-forest-600 dark:text-leaf-300">
                  <Ico className="size-4" />
                </span>
                <span className="font-heading text-xs font-bold sm:text-[13px]">{text}</span>
              </motion.div>
            ))}

            {/* small ingredient chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.25 }}
              className="absolute -bottom-5 right-2 hidden size-24 overflow-hidden rounded-2xl border-4 border-white shadow-lift sm:block dark:border-forest-900"
            >
              <Art name="blackrice" className="size-full" label="Karuppu Kavuni black rice grains" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
