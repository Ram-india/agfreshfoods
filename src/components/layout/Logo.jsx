import { Link } from 'react-router-dom'

export default function Logo({ className = '', light = false }) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`} aria-label="AG Fresh Foods — home">
      <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-forest-500 to-leaf-500 shadow-[0_8px_20px_-6px_rgb(46_125_50_/_0.6)] transition-transform duration-500 group-hover:scale-105">
        <svg viewBox="0 0 48 48" className="size-7" aria-hidden="true">
          {/* leaf + grain mark */}
          <path
            d="M24 6C13 9 6 17 6 26c0 8 6 15 15 15 11 0 20-10 20-23C41 12 35 8 24 6Z"
            fill="#fff"
            opacity=".95"
          />
          <path
            d="M18 37c-2-11 2-20 12-27"
            stroke="#2E7D32"
            strokeWidth="2.6"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="30" cy="19" rx="5" ry="3" fill="#FFC107" transform="rotate(-38 30 19)" />
        </svg>
        <span className="absolute inset-0 bg-white/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-[17px] font-extrabold tracking-tight ${light ? 'text-white' : ''}`}>
          AG <span className="text-forest-500 dark:text-leaf-400">Fresh</span> Foods
        </span>
        <span
          className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
            light ? 'text-white/60' : 'text-soft'
          }`}
        >
          Freshness You Can Taste
        </span>
      </span>
    </Link>
  )
}
