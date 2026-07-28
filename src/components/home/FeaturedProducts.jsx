import { ArrowRight } from 'lucide-react'
import Section, { SectionHeading } from '../ui/Section'
import Reveal, { RevealGroup, RevealItem } from '../ui/Reveal'
import Button from '../ui/Button'
import ProductCard from '../products/ProductCard'
import { products } from '../../data/products'

export default function FeaturedProducts() {
  return (
    <Section id="products">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our Range"
            title="Featured batters, ground this morning"
            body="Five varieties, one standard. Every pack carries the date it was made — never a shelf date dressed up as freshness."
            className="!mx-0"
          />
          <Reveal delay={0.15}>
            <Button to="/products" variant="outline">
              View all products <ArrowRight className="size-4" />
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <RevealItem key={product.slug}>
              <ProductCard product={product} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  )
}
