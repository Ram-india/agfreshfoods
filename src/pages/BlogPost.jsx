import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Clock } from 'lucide-react'
import Seo, { articleSchema, breadcrumbSchema } from '../components/ui/Seo'
import Section, { SectionHeading } from '../components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Button from '../components/ui/Button'
import Prose from '../components/ui/Prose'
import Art from '../components/ui/Art'
import BlogCard from '../components/blog/BlogCard'
import { blogPosts, getPost } from '../data/content'
import { whatsappLink } from '../data/site'

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) return <Navigate to="/blogs" replace />

  const related = blogPosts.filter((p) => p.slug !== post.slug)

  const trail = [
    { label: 'Home', to: '/' },
    { label: 'Blogs', to: '/blogs' },
    { label: post.title, to: `/blogs/${post.slug}` },
  ]

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category}, ${post.title}`}
        type="article"
        schema={[breadcrumbSchema(trail), articleSchema(post)]}
      />

      <article>
        {/* masthead */}
        <header className="surface-alt relative isolate overflow-hidden pt-32 pb-14 lg:pt-40">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_15%_0%,rgb(76_175_80_/_0.14),transparent_65%)]"
          />
          <div className="shell">
            <Breadcrumbs trail={trail} />

            <div className="mt-8 max-w-3xl">
              <div className="text-soft flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-wide">
                <span className="rounded-full bg-forest-500/12 px-3 py-1.5 text-forest-600 dark:text-leaf-300">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" /> {post.readTime}
                </span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>

              <h1 className="mt-6 text-3xl leading-[1.12] sm:text-4xl lg:text-[3.1rem]">{post.title}</h1>
              <p className="text-soft mt-6 text-lg leading-relaxed">{post.excerpt}</p>
            </div>
          </div>
        </header>

        {/* cover */}
        <div className="shell -mt-2">
          <Reveal y={20}>
            <div className="overflow-hidden rounded-3xl border hairline shadow-lift">
              <Art name={post.art} label={post.title} className="aspect-[16/9] w-full" />
            </div>
          </Reveal>
        </div>

        {/* body */}
        <Section>
          <div className="shell grid gap-14 lg:grid-cols-[1fr_18rem]">
            <Prose>
              {post.body.map((block) => (
                <section key={block.h}>
                  <h2>{block.h}</h2>
                  <p>{block.p}</p>
                </section>
              ))}
            </Prose>

            {/* sidebar */}
            <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
              <div className="surface-card rounded-3xl border hairline p-6">
                <p className="font-heading text-sm font-bold uppercase tracking-wider">In this article</p>
                <ol className="mt-4 flex flex-col gap-2.5">
                  {post.body.map((b, i) => (
                    <li key={b.h} className="text-soft flex gap-2 text-[13px] leading-snug">
                      <span className="font-heading font-bold text-forest-500">{i + 1}.</span>
                      {b.h}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-3xl border border-turmeric-500/35 bg-turmeric-500/[0.08] p-6">
                <p className="font-heading text-base font-bold">Skip the 5 AM grind</p>
                <p className="text-soft mt-2 text-sm leading-relaxed">
                  Fresh batter in your fridge is what makes any of this practical on a weekday.
                </p>
                <Button href={whatsappLink()} variant="accent" size="sm" className="mt-4 w-full">
                  Order fresh batter
                </Button>
              </div>

              <div className="surface-card rounded-3xl border hairline p-6">
                <p className="font-heading text-sm font-bold">Keep reading</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to={`/blogs/${r.slug}`}
                        className="text-soft text-[13px] font-medium leading-snug transition-colors hover:text-forest-600 dark:hover:text-leaf-300"
                      >
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Section>
      </article>

      {/* related */}
      <Section alt>
        <div className="shell">
          <SectionHeading eyebrow="More articles" title="Read next" />
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
            {related.map((p) => (
              <RevealItem key={p.slug}>
                <BlogCard post={p} />
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-12 text-center">
            <Button to="/blogs" variant="outline">
              <ArrowLeft className="size-4" /> All articles
            </Button>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
