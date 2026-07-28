import { ArrowRight, CircleCheck } from 'lucide-react'
import Seo, { breadcrumbSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Prose from '../components/ui/Prose'
import Icon from '../components/ui/Icon'
import Art from '../components/ui/Art'
import { qualityPoints } from '../data/content'

const trail = [
  { label: 'Home', to: '/' },
  { label: 'Quality Standards', to: '/quality-standards' },
]

const checkpoints = [
  {
    stage: 'Incoming material',
    checks: [
      'Moisture content and broken-grain percentage on every sack',
      'Visual inspection for pest damage, discolouration and foreign matter',
      'Smell check for mustiness indicating poor storage',
      'Supplier lot recorded against the batch it will become',
    ],
  },
  {
    stage: 'Soaking & grinding',
    checks: [
      'RO water quality checked daily',
      'Soak duration logged per variety, per batch',
      'Batter temperature monitored during grinding',
      'Grinder stones cleaned and inspected between varieties',
    ],
  },
  {
    stage: 'Fermentation',
    checks: [
      'pH measured before the batch is released for packing',
      'Rise height and texture assessed by hand',
      'Aroma check for clean lactic tang versus off notes',
      'Test steam of idlies from the batch itself',
    ],
  },
  {
    stage: 'Packing & dispatch',
    checks: [
      'Sanitised packing room, cleaned and signed off between batches',
      'Gloves, caps and masks on all personnel, every shift',
      'Seal integrity check on a sample from each run',
      'Batch code and true packed-on date printed, never post-dated',
    ],
  },
  {
    stage: 'Cold chain',
    checks: [
      'Cold room held at 4°C with logged readings',
      'Van temperature recorded at each delivery stop',
      'Store chiller condition checked on route visits',
      'Same-day unsold stock recovered and destroyed, not resold',
    ],
  },
]

const traceability = [
  'Every pack carries a batch code that maps to a single production run',
  'Each run is linked to the supplier lots of rice, dal and millet that went into it',
  'Soak times, grind temperature, pH and packing shift are recorded against the run',
  'A customer complaint with a batch code can be traced to source within one working day',
]

export default function QualityStandards() {
  return (
    <>
      <Seo
        title="Quality Standards"
        description="AG Fresh Foods quality standards: incoming material grading, RO water, logged soak and grind parameters, pH-verified fermentation, sanitised packing, 4°C cold chain and full batch traceability."
        keywords="food safety batter, batter quality standards, hygienic batter manufacturing, batch traceability food, cold chain compliance"
        schema={breadcrumbSchema(trail)}
      />

      <PageHero
        eyebrow="Quality"
        title="Quality standards"
        subtitle="Food safety is a daily routine, not a certificate on a wall. This page is the routine, written down — the same checklist our shift supervisors sign."
        trail={trail}
      >
        <Button to="/manufacturing-process">
          See the process <ArrowRight className="size-4" />
        </Button>
        <Button to="/contact" variant="outline">
          Arrange an audit visit
        </Button>
      </PageHero>

      {/* four pillars */}
      <Section>
        <div className="shell">
          <SectionHeading eyebrow="The four pillars" title="What we hold ourselves to" />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {qualityPoints.map((q) => (
              <RevealItem key={q.title}>
                <article className="surface-card card-hover h-full rounded-3xl border hairline p-6">
                  <span className="grid size-12 place-items-center rounded-2xl bg-turmeric-500/15 text-turmeric-600 dark:text-turmeric-400">
                    <Icon name={q.icon} className="size-[22px]" />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-bold">{q.title}</h3>
                  <p className="text-soft mt-2.5 text-[13px] leading-relaxed">{q.body}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* checkpoint tables */}
      <Section alt>
        <div className="shell">
          <SectionHeading
            eyebrow="Checkpoints"
            title="Five stages, checked and logged"
            body="Nothing moves to the next stage until the previous one is signed off."
          />

          <div className="mt-14 flex flex-col gap-5">
            {checkpoints.map((cp, i) => (
              <Reveal key={cp.stage} delay={i * 0.05}>
                <article className="surface-card overflow-hidden rounded-3xl border hairline">
                  <header className="flex items-center gap-4 border-b px-6 py-5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-forest-500 to-leaf-500 font-heading text-[13px] font-extrabold text-white">
                      {i + 1}
                    </span>
                    <h3 className="font-heading text-lg font-bold">{cp.stage}</h3>
                  </header>
                  <ul className="grid gap-3 p-6 sm:grid-cols-2">
                    {cp.checks.map((c) => (
                      <li key={c} className="flex gap-2.5">
                        <CircleCheck className="mt-0.5 size-[17px] shrink-0 text-leaf-500" />
                        <span className="text-soft text-[13.5px] leading-relaxed">{c}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* traceability + honesty */}
      <Section>
        <div className="shell grid items-start gap-14 lg:grid-cols-[1fr_0.85fr]">
          <Prose>
            <h2 className="!mt-0">Traceability, and why the batch code matters</h2>
            <p>
              Every pack we seal carries a <strong>batch code</strong>. That code is not decoration — it
              maps to a single production run, and that run maps back to the supplier lots that went into
              it and the shift that made it.
            </p>
            <p>
              If a customer tells us a pack was wrong, we can find out what happened. That is the entire
              purpose. A complaint without traceability is just an apology; a complaint with it is a fix.
            </p>
            <ul>
              {traceability.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <h2>What we deliberately do not do</h2>
            <p>
              We think it is worth being explicit about the shortcuts available to us that we have chosen
              not to take.
            </p>
            <ul>
              <li>
                <strong>No preservatives or acidity regulators.</strong> They would extend shelf life
                several times over and would be entirely legal. They also change what fermentation is
                doing, and that is the product.
              </li>
              <li>
                <strong>No post-dating.</strong> The printed date is the date it was made. We have been
                asked more than once to print a later one so stock lasts on a shelf. We do not.
              </li>
              <li>
                <strong>No reselling returns.</strong> Same-day stock that comes back on the van is
                destroyed, not redistributed to a slower outlet.
              </li>
              <li>
                <strong>No exceeding the daily cap.</strong> We turn down volume when accepting it would
                mean grinding tomorrow's stock today.
              </li>
            </ul>

            <h2>Where we are still improving</h2>
            <p>
              We would rather say this plainly than imply a level of formality we have not reached. We are
              a mid-sized regional producer, not a multinational plant. Our microbiological testing is
              periodic through an external lab rather than continuous in-house. Our documentation is
              disciplined but paper-and-spreadsheet in places where a larger operation would have a
              system.
            </p>
            <p>
              We are working on both. In the meantime, the checks above are real, they happen daily, and
              any dealer is welcome to turn up and watch a shift.
            </p>
          </Prose>

          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border hairline shadow-lift">
                <Art name="lab" className="aspect-[4/3] w-full" label="Batch quality checks at AG Fresh Foods" />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="surface-card rounded-3xl border hairline p-6">
                <p className="font-heading text-sm font-bold uppercase tracking-wider">Daily logs kept</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {[
                    'Incoming material grading sheet',
                    'RO water quality reading',
                    'Soak & grind parameter log',
                    'Fermentation pH record',
                    'Packing room sanitation sign-off',
                    'Cold room temperature chart',
                    'Van temperature at each stop',
                    'Returns recovered & destroyed',
                  ].map((l) => (
                    <li key={l} className="text-soft flex gap-2 text-[13px]">
                      <CircleCheck className="mt-0.5 size-4 shrink-0 text-leaf-500" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-3xl border border-turmeric-500/35 bg-turmeric-500/[0.08] p-6">
                <p className="font-heading text-base font-bold">Found a problem with a pack?</p>
                <p className="text-soft mt-2 text-sm leading-relaxed">
                  Send us the batch code. We trace it, tell you what we find, and replace the pack.
                </p>
                <Button to="/contact" variant="accent" size="sm" className="mt-4">
                  Report it
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  )
}
