import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Decorative grains + leaves that drift and follow the pointer.
 * Parallax is applied via CSS custom properties on a single wrapper so the
 * pointer handler stays cheap.
 */
const pieces = [
  { kind: 'leaf', top: '12%', left: '6%', size: 44, depth: 26, spin: -18, delay: 0 },
  { kind: 'grain', top: '24%', left: '88%', size: 30, depth: -34, spin: 24, delay: 0.8 },
  { kind: 'leaf', top: '68%', left: '10%', size: 34, depth: 18, spin: 32, delay: 1.6 },
  { kind: 'grain', top: '78%', left: '82%', size: 26, depth: -22, spin: -28, delay: 0.4 },
  { kind: 'seed', top: '42%', left: '93%', size: 22, depth: 30, spin: 12, delay: 2.1 },
  { kind: 'seed', top: '8%', left: '46%', size: 20, depth: -18, spin: -14, delay: 1.2 },
  { kind: 'leaf', top: '86%', left: '52%', size: 28, depth: 22, spin: 20, delay: 2.6 },
]

const shapes = {
  leaf: (
    <path
      d="M32 2C14 6 2 20 2 36c0 14 10 26 26 26 18 0 34-16 34-38C62 12 50 4 32 2Zm-6 52C22 40 26 24 40 14"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  ),
  grain: <ellipse cx="32" cy="32" rx="28" ry="14" fill="currentColor" />,
  seed: <path d="M32 4c14 10 20 20 20 30S44 60 32 60 12 44 12 34 18 14 32 4Z" fill="currentColor" />,
}

export default function FloatingIngredients({ className = '' }) {
  const wrapRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const el = wrapRef.current
    if (!el) return

    let raf = 0
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5
        const y = e.clientY / window.innerHeight - 0.5
        el.style.setProperty('--mx', x.toFixed(4))
        el.style.setProperty('--my', y.toFixed(4))
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [reduce])

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden [--mx:0] [--my:0] ${className}`}
    >
      {pieces.map((piece, i) => (
        <div
          key={i}
          className="absolute will-change-transform"
          style={{
            top: piece.top,
            left: piece.left,
            transform: `translate3d(calc(var(--mx) * ${piece.depth}px), calc(var(--my) * ${piece.depth}px), 0)`,
            transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <svg
            viewBox="0 0 64 64"
            width={piece.size}
            height={piece.size}
            className={`${i % 2 ? 'animate-float' : 'animate-float-slow'} ${
              piece.kind === 'leaf'
                ? 'text-leaf-500/35 dark:text-leaf-400/25'
                : piece.kind === 'grain'
                  ? 'text-turmeric-500/40 dark:text-turmeric-400/25'
                  : 'text-forest-500/30 dark:text-leaf-300/20'
            }`}
            style={{ animationDelay: `${piece.delay}s`, rotate: `${piece.spin}deg` }}
          >
            {shapes[piece.kind]}
          </svg>
        </div>
      ))}
    </div>
  )
}
