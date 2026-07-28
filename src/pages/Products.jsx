import { ArrowRight, MessageCircle } from 'lucide-react'
import Seo, { breadcrumbSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import ProductCard from '../components/products/ProductCard'
import { products } from '../data/products'
import { site, whatsappLink } from '../data/site'

const trail = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
]

const compareRows = [
  { label: 'Makes', get: (p) => p.makes },
  { label: 'Pack sizes', get: (p) => p.packs.join(', ') },
  { label: 'Shelf life', get: (p) => p.shelfLife },
  { label: 'Availability', get: (p) => (p.status === 'available' ? 'In stock' : 'Coming soon') },
]

export default function Products() {
  return (
    <>
      <Seo
        title="Our Products — Fresh Idly & Dosa Batter Range"
        description="Five fresh batters ground daily: Karuppu Kavuni black rice, white rice idly, multi millet, ragi and wheat dosa batter. No preservatives, 500 g and 1 kg packs, delivered cold."
        keywords="idly batter varieties, dosa batter types, karuppu kavuni batter price, millet idly batter, ragi dosa batter, buy fresh batter online"
        schema={[
          breadcrumbSchema(trail),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'AG Fresh Foods batter range',
            itemListElement: products.map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: p.name,
              url: `${site.url}/products/${p.slug}`,
            })),
          },
        ]}
      />

      <PageHero
        eyebrow="Our Products"
        title="Five batters. One standard."
        subtitle="Every variety is stone ground the morning you buy it and sealed with the real packed-on date. Choose by grain, by texture, or by what your family will actually finish."
        trail={trail}
      >
        <Button href={whatsappLink()}>
          <MessageCircle className="size-4" /> Order on WhatsApp
        </Button>
        <Button to="/dealers" variant="outline">
          Bulk &amp; dealer pricing
        </Button>
      </PageHero>

      <Section>
        <div className="shell">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <RevealItem key={product.slug}>
                <ProductCard product={product} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* comparison table */}
      <Section alt>
        <div className="shell">
          <SectionHeading
            eyebrow="Compare"
            title="Which batter is right for your kitchen?"
            body="A quick side-by-side. Scroll horizontally on smaller screens."
          />

          <Reveal className="mt-12 overflow-x-auto rounded-3xl border hairline">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <caption className="sr-only">Comparison of AG Fresh Foods batter varieties</caption>
              <thead>
                <tr className="surface-card">
                  <th scope="col" className="p-4 text-left font-heading text-xs font-bold uppercase tracking-wider">
                    &nbsp;
                  </th>
                  {products.map((p) => (
                    <th key={p.slug} scope="col" className="border-l p-4 text-left align-top">
                      <span className="block font-heading text-sm font-bold leading-tight">{p.shortName}</span>
                      <span className="text-soft mt-1 block text-[11px] font-medium">{p.tagline}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, ri) => (
                  <tr key={row.label} className={ri % 2 ? 'surface-card' : ''}>
                    <th scope="row" className="border-t p-4 text-left font-heading text-[13px] font-bold">
                      {row.label}
                    </th>
                    {products.map((p) => (
                      <td key={p.slug} className="text-soft border-l border-t p-4 text-[13px]">
                        {row.get(p)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th scope="row" className="border-t p-4 text-left font-heading text-[13px] font-bold">
                    Details
                  </th>
                  {products.map((p) => (
                    <td key={p.slug} className="border-l border-t p-4">
                      <Button to={`/products/${p.slug}`} variant="ghost" size="sm" className="!px-2">
                        View <ArrowRight className="size-3.5" />
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 text-center">
            <p className="text-soft text-sm">
              Not sure which to start with? Most families begin with the White Idly Batter and add
              Karuppu Kavuni once the children are curious.
            </p>
            <Button href={whatsappLink('Hi AG Fresh Foods, which batter would you recommend for my family?')} className="mt-5">
              Ask for a recommendation
            </Button>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
