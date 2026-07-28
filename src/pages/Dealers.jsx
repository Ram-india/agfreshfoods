import { CircleCheck, MessageCircle, Phone } from 'lucide-react'
import Seo, { breadcrumbSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import Counter from '../components/ui/Counter'
import DealerForm from '../components/forms/DealerForm'
import { dealerBenefits } from '../data/content'
import { site, telLink, whatsappLink } from '../data/site'

const trail = [
  { label: 'Home', to: '/' },
  { label: 'Dealer & Distributor', to: '/dealers' },
]

const steps = [
  { title: 'Apply', body: 'Fill the form below — it takes about a minute. No documents needed at this stage.' },
  { title: 'We call you', body: 'A territory manager calls within 24 working hours to understand your area and volume.' },
  { title: 'Trial order', body: 'Start with a small daily quantity on a return-unsold basis, so you carry no risk.' },
  { title: 'Go live', body: 'Fixed daily route, display material, and slab incentives as volume grows.' },
]

const requirements = [
  'A refrigerator or chiller that reliably holds 4°C (we help qualifying outlets with a display fridge)',
  'A shop or delivery presence in one of our current or adjacent service districts',
  'Willingness to return unsold same-day stock rather than sell it past its best',
  'GST registration for distributor-level partnerships',
  'Someone reachable on the phone before 7 AM, when our vans run',
]

const tiers = [
  {
    name: 'Retail Store',
    from: '50 packs / day',
    points: ['Daily refrigerated delivery', 'Free posters and shelf strips', 'Return unsold same-day stock', 'Standard retail margin'],
  },
  {
    name: 'Area Distributor',
    from: '300 packs / day',
    featured: true,
    points: [
      'Exclusive route or pin-code territory',
      'Slab-based volume incentives',
      'Display fridge support for sub-outlets',
      'Dedicated territory manager',
      'Joint local marketing spend',
    ],
  },
  {
    name: 'HoReCa & Bulk',
    from: 'Custom',
    points: ['Bulk pack sizes on request', 'Fixed monthly rate contracts', 'Early-morning scheduled drops', 'Priority during festival demand'],
  },
]

export default function Dealers() {
  return (
    <>
      <Seo
        title="Dealer & Distributor Opportunity"
        description="Become an AG Fresh Foods dealer or distributor. Fast-moving daily-repeat chilled product, healthy margins, marketing support, free display fridges for qualifying outlets and refrigerated delivery before store opening."
        keywords="idly batter dealership, dosa batter distributor Tamil Nadu, food distribution franchise Coimbatore, batter supplier for stores"
        schema={breadcrumbSchema(trail)}
      />

      <PageHero
        eyebrow="Dealer Opportunity"
        title="Become our distributor"
        subtitle="Fresh batter is bought again tomorrow. That makes it one of the fastest-turning items in a chilled cabinet — and a genuinely dependable line for a store."
        trail={trail}
      >
        <Button href="#apply">Apply now</Button>
        <Button
          href={whatsappLink('Hi AG Fresh Foods, I am interested in a dealership. Please share the details.')}
          variant="outline"
        >
          <MessageCircle className="size-4" /> Talk on WhatsApp
        </Button>
      </PageHero>

      {/* numbers */}
      <section className="relative overflow-hidden bg-forest-600 py-12 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_12%_0%,rgb(255_255_255_/_0.14),transparent_60%),radial-gradient(ellipse_45%_50%_at_90%_100%,rgb(255_193_7_/_0.2),transparent_60%)]"
        />
        <div className="shell relative grid grid-cols-2 gap-8 lg:grid-cols-4">
          {[
            { value: 180, suffix: '+', label: 'Partner stores' },
            { value: 6, suffix: '', label: 'Districts served' },
            { value: 24, suffix: ' hrs', label: 'Application callback' },
            { value: 6, suffix: ' AM', label: 'Delivery before' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-3xl font-extrabold tabular-nums sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* benefits */}
      <Section>
        <div className="shell">
          <SectionHeading
            eyebrow="Why partner with us"
            title="What you get, beyond the product"
            body="We are a small company that depends on its stores. That shapes how we treat them."
          />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dealerBenefits.map((b) => (
              <RevealItem key={b.title}>
                <article className="surface-card card-hover h-full rounded-3xl border hairline p-6">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-forest-500 to-leaf-500 text-white">
                    <Icon name={b.icon} className="size-[22px]" />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-bold">{b.title}</h3>
                  <p className="text-soft mt-2.5 text-[13px] leading-relaxed">{b.body}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* tiers */}
      <Section alt>
        <div className="shell">
          <SectionHeading
            eyebrow="Partnership tiers"
            title="Three ways to work with us"
            body="Exact terms depend on your district and volume. These are the starting points."
          />

          <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <RevealItem key={tier.name}>
                <article
                  className={`relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-500 ${
                    tier.featured
                      ? 'border-forest-500 bg-gradient-to-b from-forest-500/[0.08] to-transparent shadow-lift lg:-mt-4 lg:mb-4'
                      : 'surface-card hairline card-hover'
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-7 rounded-full bg-turmeric-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-forest-900">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-heading text-xl font-bold">{tier.name}</h3>
                  <p className="mt-1.5 text-sm font-semibold text-forest-600 dark:text-leaf-400">
                    From {tier.from}
                  </p>
                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {tier.points.map((p) => (
                      <li key={p} className="flex gap-2.5">
                        <CircleCheck className="mt-0.5 size-[17px] shrink-0 text-leaf-500" />
                        <span className="text-soft text-[13.5px] leading-snug">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="#apply"
                    variant={tier.featured ? 'primary' : 'outline'}
                    size="sm"
                    className="mt-7 w-full"
                  >
                    Apply for {tier.name}
                  </Button>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* process + requirements */}
      <Section>
        <div className="shell grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="How onboarding works"
              title="Four steps, no paperwork mountain"
              className="!mx-0"
            />
            <ol className="mt-10 flex flex-col gap-6">
              {steps.map((s, i) => (
                <Reveal key={s.title} as="li" delay={i * 0.06} className="flex gap-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-forest-500 to-leaf-500 font-heading text-sm font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold">{s.title}</h3>
                    <p className="text-soft mt-1.5 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="What we need from you"
              title="Our only real requirement is the cold chain"
              body="Everything else is negotiable. This part is not — it is what protects the product and your customers."
              className="!mx-0"
            />
            <Reveal delay={0.1} className="surface-card mt-10 rounded-3xl border hairline p-7">
              <ul className="flex flex-col gap-4">
                {requirements.map((r) => (
                  <li key={r} className="flex gap-3">
                    <CircleCheck className="mt-0.5 size-[18px] shrink-0 text-leaf-500" />
                    <span className="text-soft text-sm leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-2.5 border-t pt-6">
                <Button href={telLink} variant="outline" size="sm">
                  <Phone className="size-4" /> {site.phone}
                </Button>
                <Button href={`mailto:${site.dealerEmail}`} variant="ghost" size="sm">
                  {site.dealerEmail}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* application form */}
      <Section id="apply" alt>
        <div className="shell">
          <SectionHeading
            eyebrow="Apply"
            title="Start your dealership application"
            body="We call every applicant back — including the ones we cannot onboard immediately, so you know where you stand."
          />
          <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
            <DealerForm />
          </Reveal>
        </div>
      </Section>
    </>
  )
}
