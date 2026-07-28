import { useCallback, useEffect, useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'
import { SmartImage } from './Art'

/**
 * Draggable comparison slider. Pointer + touch + keyboard driven.
 */
export default function BeforeAfter({
  beforeArt = 'fermentation',
  afterArt = 'idly',
  beforeSrc,
  afterSrc,
  beforeLabel = 'Fresh Batter',
  afterLabel = 'Soft Idly',
  className = '',
}) {
  const [pos, setPos] = useState(52)
  const [dragging, setDragging] = useState(false)
  const frameRef = useRef(null)

  const setFromClientX = useCallback((clientX) => {
    const el = frameRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(98, Math.max(2, pct)))
  }, [])

  useEffect(() => {
    if (!dragging) return
    const move = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX
      setFromClientX(x)
    }
    const stop = () => setDragging(false)

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', stop)
    window.addEventListener('touchmove', move, { passive: true })
    window.addEventListener('touchend', stop)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', stop)
      window.removeEventListener('touchmove', move)
      window.removeEventListener('touchend', stop)
    }
  }, [dragging, setFromClientX])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(2, p - 4))
    if (e.key === 'ArrowRight') setPos((p) => Math.min(98, p + 4))
  }

  return (
    <div
      ref={frameRef}
      onPointerDown={(e) => {
        setDragging(true)
        setFromClientX(e.clientX)
      }}
      className={`group relative aspect-[4/3] w-full cursor-ew-resize touch-pan-y overflow-hidden rounded-3xl shadow-lift select-none ${className}`}
    >
      {/* after (full width, underneath) */}
      <SmartImage src={afterSrc} art={afterArt} alt={afterLabel} fill />

      {/* before (clipped to slider position) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <SmartImage src={beforeSrc} art={beforeArt} alt={beforeLabel} fill />
      </div>

      {/* labels */}
      <span className="glass-strong absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-semibold">
        {beforeLabel}
      </span>
      <span className="glass-strong absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-semibold">
        {afterLabel}
      </span>

      {/* handle */}
      <div className="absolute inset-y-0 w-1 bg-white shadow-[0_0_20px_rgb(0_0_0_/_0.35)]" style={{ left: `${pos}%` }}>
        <button
          type="button"
          role="slider"
          aria-label="Compare fresh batter with the finished idly"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={onKeyDown}
          onPointerDown={(e) => {
            e.stopPropagation()
            setDragging(true)
          }}
          className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-forest-600 shadow-lift transition-transform duration-300 group-hover:scale-110"
        >
          <MoveHorizontal className="size-5" />
        </button>
      </div>
    </div>
  )
}
