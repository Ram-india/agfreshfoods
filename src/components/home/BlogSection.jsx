import { ArrowRight } from 'lucide-react'
import Section, { SectionHeading } from '../ui/Section'
import Reveal, { RevealGroup, RevealItem } from '../ui/Reveal'
import Button from '../ui/Button'
import BlogCard from '../blog/BlogCard'
import { blogPosts } from '../../data/content'

export default function BlogSection() {
  return (
    <Section id="blogs" alt>
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Latest Blogs"
            title="Reading worth your morning coffee"
            body="Nutrition, tradition and the science behind a good idly."
            className="!mx-0"
          />
          <Reveal delay={0.15}>
            <Button to="/blogs" variant="outline">
              All articles <ArrowRight className="size-4" />
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <RevealItem key={post.slug}>
              <BlogCard post={post} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  )
}
