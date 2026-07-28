import Seo, { breadcrumbSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import BlogCard from '../components/blog/BlogCard'
import { blogPosts } from '../data/content'
import { site } from '../data/site'

const trail = [
  { label: 'Home', to: '/' },
  { label: 'Blogs', to: '/blogs' },
]

export default function Blogs() {
  return (
    <>
      <Seo
        title="Blogs — Nutrition, Tradition & Better Breakfasts"
        description="Articles from AG Fresh Foods on healthy South Indian breakfasts, the benefits of Karuppu Kavuni black rice, and the fermentation science behind a genuinely soft idly."
        keywords="healthy breakfast ideas, black rice benefits, idly fermentation science, South Indian breakfast blog"
        schema={[
          breadcrumbSchema(trail),
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: `${site.name} Blog`,
            url: `${site.url}/blogs`,
            blogPost: blogPosts.map((p) => ({
              '@type': 'BlogPosting',
              headline: p.title,
              datePublished: p.date,
              url: `${site.url}/blogs/${p.slug}`,
            })),
          },
        ]}
      />

      <PageHero
        eyebrow="Blogs"
        title="Reading worth your morning coffee"
        subtitle="What we have learned about grains, fermentation and feeding a family on a weekday schedule."
        trail={trail}
      />

      <Section>
        <div className="shell">
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <RevealItem key={post.slug}>
                <BlogCard post={post} />
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="surface-alt mt-16 rounded-3xl border hairline p-8 text-center sm:p-12">
            <h2 className="text-2xl sm:text-3xl">Have a question we should write about?</h2>
            <p className="text-soft mx-auto mt-4 max-w-xl text-[15px] leading-relaxed">
              Most of these articles started as a customer question on WhatsApp. Send yours and it may
              well become the next one.
            </p>
            <Button to="/contact" className="mt-8">
              Ask us anything
            </Button>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
