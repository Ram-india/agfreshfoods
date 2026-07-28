import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import Art from '../ui/Art'

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })

export default function BlogCard({ post }) {
  return (
    <article className="surface-card card-hover group flex h-full flex-col overflow-hidden rounded-3xl border hairline">
      <Link to={`/blogs/${post.slug}`} className="block overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden">
          <Art
            name={post.art}
            label={post.title}
            className="size-full transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="text-soft flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wide">
          <span className="rounded-full bg-forest-500/10 px-2.5 py-1 text-forest-600 dark:text-leaf-300">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3" /> {post.readTime}
          </span>
        </div>

        <h3 className="mt-4 font-heading text-lg font-bold leading-snug">
          <Link to={`/blogs/${post.slug}`} className="transition-colors hover:text-forest-600 dark:hover:text-leaf-300">
            {post.title}
          </Link>
        </h3>

        <p className="text-soft mt-3 flex-1 text-sm leading-relaxed">{post.excerpt}</p>

        <div className="mt-6 flex items-center justify-between border-t pt-5">
          <time dateTime={post.date} className="text-soft text-xs font-medium">
            {formatDate(post.date)}
          </time>
          <Link
            to={`/blogs/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-forest-600 transition-all duration-300 hover:gap-2.5 dark:text-leaf-300"
          >
            Read more <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}
