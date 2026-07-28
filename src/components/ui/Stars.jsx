import { Star } from 'lucide-react'

export default function Stars({ rating = 5, className = 'size-4' }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${className} ${
            i < rating ? 'fill-turmeric-500 text-turmeric-500' : 'text-forest-500/25'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}
