import { Navigate, useParams } from 'react-router-dom'
import { ArrowRight, CircleCheck, Clock, MessageCircle, Package, Phone, Snowflake } from 'lucide-react'
import Seo, { breadcrumbSchema, productSchema } from '../components/ui/Seo'
import Section, { SectionHeading } from '../components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Button from '../components/ui/Button'
import Accordion from '../components/ui/Accordion'
import ProductCard from '../components/products/ProductCard'
import { SmartImage } from '../components/ui/Art'
import FloatingIngredients from '../components/ui/FloatingIngredients'
import { getProduct, products } from '../data/products'
import { faqs } from '../data/content'
import { site, telLink, whatsappLink } from '../data/site'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)

  if (!product) return <Navigate to="/products" replace />

  const soon = product.status === 'coming-soon'
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3)

  const trail = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: product.shortName, to: `/products/${product.slug}` },
  ]

  return (
    <>
      <Seo
        title={product.name}
        description={`${product.hero} ${product.description.slice(0, 110)}…`}
        keywords={`${product.shortName}, ${product.name}, fresh batter, ${product.ingredients.slice(0, 3).join(', ')}`}
        image={`/images/${product.image}`}
        type="product"
        schema={[breadcrumbSchema(trail), productSchema(product)]}
      />

      {/* ---- product masthead ---- */}
      <header className="surface-alt relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_15%_0%,rgb(76_175_80_/_0.14),transparent_65%),radial-gradient(ellipse_45%_45%_at_88%_15%,rgb(255_193_7_/_0.14),transparent_60%)]"
        />
        <FloatingIngredients />

        <div className="shell relative">
          <Breadcrumbs trail={trail} />

          <div className="mt-8 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* visual */}
            <Reveal y={0} scale={0.95}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-5 -z-10 rounded-full bg-gradient-to-tr from-leaf-500/30 to-turmeric-500/25 blur-3xl"
                />
                <div className="overflow-hidden rounded-[2rem] border-4 border-white/70 shadow-lift dark:border-white/10">
                  <SmartImage src={product.image} art={product.art} alt={product.name} ratio="aspect-[4/5]" eager />
                </div>
                {product.badge && (
                  <span
                    className={`absolute left-5 top-5 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] shadow-soft ${
                      soon ? 'bg-turmeric-500 text-forest-900' : 'bg-white text-forest-700'
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>
            </Reveal>

            {/* details */}
            <div>
              <Reveal>
                <span className="eyebrow">{product.tagline}</span>
                <h1 className="mt-5 text-3xl leading-[1.1] sm:text-4xl lg:text-[3.25rem]">{product.name}</h1>
                <p className="mt-5 font-heading text-lg font-medium leading-snug">{product.hero}</p>
                <p className="text-soft mt-4 text-[15px] leading-[1.75]">{product.description}</p>
              </Reveal>

              {/* spec chips */}
              <Reveal delay={0.1} className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Package, label: 'Pack sizes', value: product.packs.join(' · ') },
                  { icon: Clock, label: 'Shelf life', value: product.shelfLife },
                  { icon: Snowflake, label: 'Storage', value: 'Refrigerate at 4°C' },
                ].map(({ icon: Ico, label, value }) => (
                  <div key={label} className="surface-card rounded-2xl border hairline p-4">
                    <span className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-forest-500 dark:text-leaf-400">
                      <Ico className="size-3.5" /> {label}
                    </span>
                    <p className="mt-1.5 font-heading text-[13px] font-bold leading-snug">{value}</p>
                  </div>
                ))}
              </Reveal>

              {/* highlights */}
              <Reveal delay={0.15} className="mt-8">
                <h2 className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-soft">
                  Why people buy it
                </h2>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5">
                      <CircleCheck className="mt-0.5 size-[18px] shrink-0 text-leaf-500" />
                      <span className="text-soft text-sm leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* CTAs */}
              <Reveal delay={0.2} className="mt-9 flex flex-wrap gap-3">
                <Button
                  href={whatsappLink(
                    soon
                      ? `Hi AG Fresh Foods, please notify me when ${product.name} launches.`
                      : `Hi AG Fresh Foods, I'd like to order ${product.name}.`
                  )}
                  size="lg"
                >
                  <MessageCircle className="size-4" />
                  {soon ? 'Notify me at launch' : 'Order on WhatsApp'}
                </Button>
                <Button href={telLink} variant="outline" size="lg">
                  <Phone className="size-4" /> {site.phone}
                </Button>
              </Reveal>

              {soon && (
                <Reveal delay={0.25}>
                  <p className="mt-5 rounded-2xl border border-turmeric-500/35 bg-turmeric-500/[0.1] px-5 py-4 text-sm leading-relaxed">
                    <strong className="font-heading font-bold">Launching soon.</strong>{' '}
                    <span className="text-soft">
                      This variety is in final tasting trials with our retail partners. Leave your number
                      and we will tell you the day it goes on sale.
                    </span>
                  </p>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ---- ingredients + nutrition ---- */}
      <Section>
        <div className="shell grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="surface-card h-full rounded-3xl border hairline p-7">
              <h2 className="font-heading text-xl font-bold">Ingredients</h2>
              <p className="text-soft mt-2 text-sm">
                The complete list. Nothing else goes into the pack.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {product.ingredients.map((ing) => (
                  <li
                    key={ing}
                    className="rounded-full border border-leaf-500/30 bg-leaf-500/[0.08] px-4 py-2 text-[13px] font-semibold"
                  >
                    {ing}
                  </li>
                ))}
              </ul>
              <p className="text-soft mt-7 border-t pt-5 text-[13px] leading-relaxed">
                <strong className="text-[var(--text-strong)]">No</strong> preservatives, soda, acidity
                regulators, artificial colour or flavour. Fermentation is natural and unaided.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-card h-full rounded-3xl border hairline p-7">
              <h2 className="font-heading text-xl font-bold">Nutrition</h2>
              <p className="text-soft mt-2 text-sm">Typical values per 100 g of batter, uncooked.</p>
              <dl className="mt-6 divide-y">
                {product.nutrition.map((n) => (
                  <div key={n.label} className="flex items-center justify-between py-3">
                    <dt className="text-soft text-sm">{n.label}</dt>
                    <dd className="font-heading text-sm font-bold tabular-nums">{n.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-soft mt-5 text-[11.5px] leading-relaxed">
                Indicative values from standard food-composition tables; natural variation occurs between
                batches. Not intended as medical or dietary advice.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---- how to use ---- */}
      <Section alt>
        <div className="shell">
          <SectionHeading
            eyebrow="How to use"
            title={product.makes === 'Dosa' ? 'Straight from pack to tawa' : 'Pack to plate in twelve minutes'}
            body="No salt to add, no water to mix, no overnight wait. Just one thing to remember: stir gently."
          />

          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Refrigerate on arrival', 'Put the pack in the main compartment of the fridge, not the door.'],
              ['Stir, do not whisk', 'A gentle stir keeps the trapped air that makes idlies soft. Whisking knocks it out.'],
              [
                product.makes === 'Dosa' ? 'Heat the tawa well' : 'Grease and pour',
                product.makes === 'Dosa'
                  ? 'A properly hot tawa is what makes the edges crisp. Spread thin from the centre outwards.'
                  : 'Lightly oil the idly plates and fill each mould about three-quarters full.',
              ],
              [
                product.makes === 'Dosa' ? 'Cook on medium-high' : 'Steam 10–12 minutes',
                product.makes === 'Dosa'
                  ? 'Drizzle gingelly oil at the edges and cook until golden. Flip only if you like it firmer.'
                  : 'Steam on medium heat, then rest for two minutes before removing so they release cleanly.',
              ],
            ].map(([title, body], i) => (
              <RevealItem key={title}>
                <article className="surface-card card-hover h-full rounded-3xl border hairline p-6">
                  <span className="font-heading text-3xl font-extrabold text-forest-500/25">0{i + 1}</span>
                  <h3 className="mt-3 font-heading text-base font-bold">{title}</h3>
                  <p className="text-soft mt-2 text-[13px] leading-relaxed">{body}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-10 text-center">
            <Button to="/storage-instructions" variant="outline">
              Full storage instructions <ArrowRight className="size-4" />
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* ---- FAQ ---- */}
      <Section>
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Questions"
              title="Before you order"
              body="The things customers ask most about this batter."
              className="!mx-0"
            />
            <Button to="/faqs" variant="ghost" className="mt-6">
              All FAQs <ArrowRight className="size-4" />
            </Button>
          </div>
          <Reveal delay={0.08}>
            <Accordion items={faqs.slice(0, 4)} />
          </Reveal>
        </div>
      </Section>

      {/* ---- related ---- */}
      <Section alt>
        <div className="shell">
          <SectionHeading eyebrow="More from the range" title="You might also like" />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <RevealItem key={p.slug}>
                <ProductCard product={p} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>
    </>
  )
}
