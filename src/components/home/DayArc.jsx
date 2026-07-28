import { motion, useReducedMotion } from 'framer-motion'
import { processSteps } from '../../data/content'

/**
 * Dusk-to-sunrise band that makes the "one morning" claim legible at a glance:
 * soaking starts in yesterday's afternoon, grinding happens in the dark, and the
 * van leaves at sunrise. Steps are positioned by their real clock time, so the
 * long overnight ferment reads as a genuine gap rather than an even sequence.
 */

// 16:00 (previous day) → 30:00 i.e. 6 AM. Inset so end markers don't clip.
const START = 16
const END = 30.6
const INSET = 5
const pctFor = (clock) => INSET + ((clock - START) / (END - START)) * (100 - INSET * 2)

/**
 * True clock spacing squeezes the pre-dawn steps into a few percent of the band,
 * so label only the markers that have room. Every step still gets a tick — the
 * honest spacing is the whole point — and the tiles below carry all seven times.
 */
const MIN_LABEL_GAP = 14

const labelledSteps = (steps) => {
  const pts = steps.map((s) => pctFor(s.clock))
  const keep = new Set([0, steps.length - 1])
  let last = pts[0]
  for (let i = 1; i < steps.length - 1; i++) {
    if (pts[i] - last >= MIN_LABEL_GAP) {
      keep.add(i)
      last = pts[i]
    }
  }
  // Drop the penultimate label if the final one would crowd it.
  const prior = [...keep].filter((i) => i !== steps.length - 1).pop()
  if (prior !== undefined && prior !== 0 && pts[steps.length - 1] - pts[prior] < MIN_LABEL_GAP) keep.delete(prior)
  return keep
}

export default function DayArc({ className = '' }) {
  const reduce = useReducedMotion()
  const labels = labelledSteps(processSteps)

  return (
    <figure className={`relative ${className}`}>
      <div className="relative overflow-hidden rounded-3xl border hairline shadow-soft">
        {/* ---- sky ---- */}
        <svg viewBox="0 0 1200 200" className="block h-[124px] w-full sm:h-[150px]" aria-hidden="true" preserveAspectRatio="none">
          <defs>
            <linearGradient id="dayarc-sky" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f6b04e" />
              <stop offset="14%" stopColor="#c9713f" />
              <stop offset="30%" stopColor="#3f3a6b" />
              <stop offset="52%" stopColor="#141a3a" />
              <stop offset="70%" stopColor="#2b2f5e" />
              <stop offset="86%" stopColor="#7d6a8e" />
              <stop offset="100%" stopColor="#f6c667" />
            </linearGradient>
            <radialGradient id="dayarc-sunset" cx="50%" cy="100%" r="90%">
              <stop offset="0%" stopColor="#ffd98a" stopOpacity=".95" />
              <stop offset="100%" stopColor="#ffd98a" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="dayarc-sunrise" cx="50%" cy="100%" r="90%">
              <stop offset="0%" stopColor="#ffe6a3" stopOpacity=".95" />
              <stop offset="100%" stopColor="#ffe6a3" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width="1200" height="200" fill="url(#dayarc-sky)" />

          {/* stars, densest through the middle of the night */}
          <g fill="#fff">
            {Array.from({ length: 54 }).map((_, i) => {
              const x = 210 + ((i * 137) % 780)
              const y = 16 + ((i * 53) % 128)
              const mid = 1 - Math.abs(x - 620) / 470
              return <circle key={i} cx={x} cy={y} r={i % 7 === 0 ? 2.2 : 1.4} opacity={Math.max(0, mid) * 0.85} />
            })}
          </g>

          {/* setting sun (left) and rising sun (right) */}
          <ellipse cx="70" cy="200" rx="150" ry="110" fill="url(#dayarc-sunset)" />
          <circle cx="70" cy="196" r="40" fill="#ffdf9b" opacity=".95" />
          <ellipse cx="1140" cy="200" rx="170" ry="120" fill="url(#dayarc-sunrise)" />
          <circle cx="1140" cy="194" r="44" fill="#fff0bd" />

          {/* crescent moon at the top of the night */}
          <g transform="translate(600 52)">
            <circle r="24" fill="#f4f1ff" opacity=".95" />
            <circle cx="11" cy="-6" r="20" fill="#1b2044" opacity=".92" />
          </g>

          {/* horizon haze */}
          <path d="M0 168h1200v32H0Z" fill="#0d1026" opacity=".35" />
        </svg>

        {/* ---- markers pinned to real clock positions ---- */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0">
          {processSteps.map((step, i) => {
            const labelled = labels.has(i)
            return (
              <motion.div
                key={step.title}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 -translate-x-1/2"
                style={{ left: `${pctFor(step.clock)}%` }}
              >
                <span
                  className={`mx-auto block w-px ${
                    labelled ? 'h-7 bg-white/45 sm:h-9' : 'h-4 bg-white/30 sm:h-5'
                  }`}
                />
                <span
                  className={`mx-auto -mt-[3px] block rounded-full bg-white ${
                    labelled ? 'size-1.5 shadow-[0_0_8px_rgb(255_255_255_/_0.9)]' : 'size-1 opacity-70'
                  }`}
                />
                {labelled ? (
                  <span className="mt-1 block whitespace-nowrap pb-2 text-center text-[9px] font-bold tabular-nums text-white/85 sm:text-[10.5px]">
                    {step.time}
                  </span>
                ) : (
                  // Keeps unlabelled ticks the same height so the row stays level.
                  <span className="mt-1 block h-[15px] pb-2 sm:h-[17px]" aria-hidden="true" />
                )}
                <span className="sr-only">
                  {step.title} at {step.time}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* ---- endpoint captions ---- */}
        <span className="absolute left-3 top-3 rounded-full bg-black/25 px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-wider text-white/90 backdrop-blur-sm sm:text-[10.5px]">
          Yesterday 4 PM · soaking
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-black/25 px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-wider text-white/90 backdrop-blur-sm sm:text-[10.5px]">
          6 AM · on the van
        </span>
      </div>

      <figcaption className="text-soft mt-3 text-center text-[12.5px] leading-relaxed">
        Fourteen hours, positioned to real clock time — the wide gap is the overnight ferment, and the
        grinders start at <strong className="text-[var(--text-strong)]">2 AM</strong> so your pack
        reaches the store before it opens.
      </figcaption>
    </figure>
  )
}
