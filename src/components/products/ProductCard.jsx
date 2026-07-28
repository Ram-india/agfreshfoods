import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { SmartImage } from '../ui/Art'
import { whatsappLink } from '../../data/site'

const accentRing = {
  kavuni: 'group-hover:border-kavuni-400/60',
  leaf: 'group-hover:border-leaf-500/60',
  turmeric: 'group-hover:border-turmeric-500/60',
  forest: 'group-hover:border-forest-500/60',
}

export default function ProductCard({ product }) {
  const soon = product.status === 'coming-soon'

  return (
    <article
      className={`surface-card card-hover group relative flex h-full flex-col overflow-hidden rounded-3xl border hairline ${
        accentRing[product.accent] || ''
      }`}
    >
      <Link to={`/products/${product.slug}`} className="relative block overflow-hidden">
        <SmartImage
          src={product.image}
          art={product.art}
          alt={product.name}
          ratio="aspect-[4/3]"
          imgClassName="transition-transform duration-700 group-hover:scale-[1.07]"
          className="[&>svg]:transition-transform [&>svg]:duration-700 group-hover:[&>svg]:scale-[1.07]"
        />

        {product.badge && (
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] shadow-soft ${
              soon
                ? 'bg-turmeric-500 text-forest-900'
                : 'bg-white/95 text-forest-700 dark:bg-forest-900/90 dark:text-leaf-300'
            }`}
          >
            {product.badge}
          </span>
        )}

        <span className="glass-strong absolute right-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide">
          {product.makes}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-forest-500 dark:text-leaf-400">
          {product.tagline}
        </p>
        <h3 className="mt-2 font-heading text-lg font-bold leading-snug">
          <Link to={`/products/${product.slug}`} className="transition-colors hover:text-forest-600 dark:hover:text-leaf-300">
            {product.name}
          </Link>
        </h3>
        <p className="text-soft mt-2.5 flex-1 text-sm leading-relaxed">{product.hero}</p>

        <div className="text-soft mt-5 flex flex-wrap gap-2 text-[11px] font-semibold">
          {product.packs.map((pack) => (
            <span key={pack} className="rounded-full border hairline px-2.5 py-1">
              {pack}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2">
          <a
            href={whatsappLink(
              soon
                ? `Hi AG Fresh Foods, please notify me when ${product.name} launches.`
                : `Hi AG Fresh Foods, I'd like to enquire about ${product.name}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-forest-500 px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-forest-600 hover:shadow-[0_10px_24px_-8px_rgb(46_125_50_/_0.7)]"
          >
            <MessageCircle className="size-4" />
            {soon ? 'Notify Me' : 'Quick Enquiry'}
          </a>
          <Link
            to={`/products/${product.slug}`}
            aria-label={`Read more about ${product.name}`}
            className="grid size-10 shrink-0 place-items-center rounded-full border hairline text-soft transition-all duration-300 hover:border-forest-500 hover:bg-forest-500 hover:text-white"
          >
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}
