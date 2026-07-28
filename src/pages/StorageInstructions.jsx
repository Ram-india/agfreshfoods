import { CircleAlert, CircleCheck, Snowflake, Thermometer } from 'lucide-react'
import Seo, { breadcrumbSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Prose from '../components/ui/Prose'
import Icon from '../components/ui/Icon'
import { whatsappLink } from '../data/site'

const trail = [
  { label: 'Home', to: '/' },
  { label: 'Storage Instructions', to: '/storage-instructions' },
]

const rules = [
  { icon: 'Snowflake', title: 'Refrigerate immediately', body: 'Straight into the fridge when you get home. Not the car, not the counter, not "after lunch".' },
  { icon: 'Thermometer', title: 'Aim for 4°C', body: 'The main compartment, not the door — door temperature swings every time it opens.' },
  { icon: 'Timer', title: 'Use within 3–4 days', body: 'Four days for rice batters, three for millet, ragi and wheat. The pack carries the true packed-on date.' },
  { icon: 'Soup', title: 'Take out only what you need', body: 'Pour what you will cook, then return the pack to the fridge right away.' },
]

const dos = [
  'Stir gently with a ladle before pouring — never whisk or beat',
  'Let the portion you are cooking sit out for 10 minutes if your kitchen is cold',
  'Keep the pack sealed or transfer to a clean airtight container',
  'Steam idlies on medium heat, then rest two minutes before removing',
  'Use the oldest pack first if you are stocking more than one',
]

const donts = [
  'Do not freeze — freezing ruptures the air structure and idlies turn dense',
  'Do not leave the pack out overnight to "ferment more"',
  'Do not add water, soda, curd or eno — the batter is already balanced',
  'Do not return unused batter from a bowl back into the pack',
  'Do not use a wet or oily spoon in the pack; it introduces spoilage bacteria',
]

const signals = [
  { good: true, text: 'Mild, pleasant sourness like fresh curd — this is healthy fermentation and makes excellent dosa.' },
  { good: true, text: 'Batter has risen and falls off the ladle in a thick ribbon rather than a thin stream.' },
  { good: true, text: 'A little clear liquid separated on top — stir it back in gently, it is normal.' },
  { good: false, text: 'Sharply sour, alcoholic or bitter smell. Do not use it.' },
  { good: false, text: 'A swollen, tight or gas-filled pack. Do not use it — the cold chain was broken.' },
  { good: false, text: 'Pink, grey-green or fuzzy patches on the surface. Discard the pack entirely.' },
  { good: false, text: 'Slimy, stringy texture when poured. Discard it.' },
]

export default function StorageInstructions() {
  return (
    <>
      <Seo
        title="Storage Instructions"
        description="How to store fresh idly and dosa batter properly: refrigerate at 4°C immediately, use within 3–4 days, never freeze, stir gently. Plus how to tell good batter from spoiled batter."
        keywords="how to store idly batter, dosa batter storage, batter shelf life, batter gone bad signs, refrigerate batter"
        schema={breadcrumbSchema(trail)}
      />

      <PageHero
        eyebrow="Storage"
        title="How to keep the batter at its best"
        subtitle="Our batter has no preservatives, which means the cold chain is the preservation method — and the last few metres of it are yours."
        trail={trail}
      />

      {/* four rules */}
      <Section>
        <div className="shell">
          <SectionHeading
            eyebrow="The four rules"
            title="Get these right and the rest looks after itself"
          />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rules.map((r, i) => (
              <RevealItem key={r.title}>
                <article className="surface-card card-hover relative h-full overflow-hidden rounded-3xl border hairline p-6">
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 -top-4 font-heading text-6xl font-extrabold text-forest-500/[0.07]"
                  >
                    0{i + 1}
                  </span>
                  <span className="relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-forest-500 to-leaf-500 text-white">
                    <Icon name={r.icon} className="size-[22px]" />
                  </span>
                  <h3 className="relative mt-5 font-heading text-base font-bold">{r.title}</h3>
                  <p className="text-soft relative mt-2 text-[13px] leading-relaxed">{r.body}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* do / don't */}
      <Section alt>
        <div className="shell">
          <SectionHeading eyebrow="Do & don't" title="The short version, on a fridge door" />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal x={-24} y={0}>
              <div className="h-full rounded-3xl border border-leaf-500/40 bg-leaf-500/[0.06] p-7">
                <h3 className="flex items-center gap-2.5 font-heading text-lg font-bold">
                  <span className="grid size-9 place-items-center rounded-xl bg-leaf-500 text-white">
                    <CircleCheck className="size-5" />
                  </span>
                  Do
                </h3>
                <ul className="mt-6 flex flex-col gap-3.5">
                  {dos.map((d) => (
                    <li key={d} className="flex gap-3">
                      <CircleCheck className="mt-0.5 size-[18px] shrink-0 text-leaf-500" />
                      <span className="text-soft text-sm leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal x={24} y={0} delay={0.08}>
              <div className="h-full rounded-3xl border border-red-400/40 bg-red-500/[0.05] p-7">
                <h3 className="flex items-center gap-2.5 font-heading text-lg font-bold">
                  <span className="grid size-9 place-items-center rounded-xl bg-red-500 text-white">
                    <CircleAlert className="size-5" />
                  </span>
                  Don't
                </h3>
                <ul className="mt-6 flex flex-col gap-3.5">
                  {donts.map((d) => (
                    <li key={d} className="flex gap-3">
                      <CircleAlert className="mt-0.5 size-[18px] shrink-0 text-red-500" />
                      <span className="text-soft text-sm leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* how to tell */}
      <Section>
        <div className="shell grid items-start gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Reading your batter"
              title="How to tell good from spoiled"
              body="A mild sourness is fermentation working, not a fault. These are the signals that actually matter."
              className="!mx-0"
            />
            <Reveal delay={0.1} className="surface-card mt-10 rounded-3xl border hairline p-7">
              <ul className="flex flex-col gap-4">
                {signals.map((s) => (
                  <li key={s.text} className="flex gap-3">
                    {s.good ? (
                      <CircleCheck className="mt-0.5 size-[18px] shrink-0 text-leaf-500" />
                    ) : (
                      <CircleAlert className="mt-0.5 size-[18px] shrink-0 text-red-500" />
                    )}
                    <span className="text-soft text-sm leading-relaxed">{s.text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl bg-turmeric-500/[0.1] px-5 py-4 text-[13px] leading-relaxed">
                <strong className="font-heading font-bold">If a pack looks wrong, tell us.</strong>{' '}
                <span className="text-soft">
                  Send us the batch code printed on the pack and we will trace it through our production
                  log and replace it. That feedback is how we find cold-chain breaks we cannot see.
                </span>
              </p>
              <Button href={whatsappLink('Hi AG Fresh Foods, I have a question about a pack. Batch code: ')} variant="whatsapp" size="sm" className="mt-5">
                Report a pack
              </Button>
            </Reveal>
          </div>

          <Prose>
            <h2 className="!mt-0">Why we cannot just make it last longer</h2>
            <p>
              This is the question we get most often, usually phrased as a complaint, and it is a fair
              one. A four-day shelf life is inconvenient.
            </p>
            <p>
              Long-life batter is achieved one of three ways: a chemical preservative, an acidity
              regulator that halts fermentation, or grinding so aggressively that the natural cultures do
              not survive to begin with. All three work. All three change what you are eating.
            </p>
            <p>
              We chose refrigeration instead. Cold does not stop fermentation, it slows it dramatically —
              which holds the batter near its <strong>peak</strong> rather than letting it race past. Past
              its peak, the cultures exhaust their food, acidity keeps climbing and the protein network
              can no longer hold gas. That is when idlies go flat and sour, and no cooking technique
              recovers it.
            </p>

            <h2>Why freezing does not help</h2>
            <p>
              People ask this constantly and it seems like it should work. It does not. Water in the
              batter forms ice crystals that physically rupture the delicate air structure fermentation
              built. On thawing, the batter looks similar and behaves nothing alike — the idlies come out
              dense and slightly rubbery.
            </p>
            <p>
              If you have more batter than you can use, make dosas or uthappam with the surplus and
              refrigerate those. Cooked keeps better than raw here.
            </p>

            <h2>The fridge door problem</h2>
            <p>
              Almost every "the batter went off early" report we investigate turns out to be the door
              shelf. A fridge door can swing 6–8°C over a day in a busy kitchen. That is enough for
              fermentation to restart between openings, and it happens invisibly.
            </p>
            <p>Main compartment, middle shelf, towards the back. It genuinely makes a difference.</p>

            <h2>If you are travelling with it</h2>
            <p>
              Batter survives about two hours out of refrigeration in Tamil Nadu's climate, less in peak
              summer. Ask your store for an ice pack if you have a long trip, keep it out of direct sun,
              and refrigerate the moment you arrive. If it has been warm for several hours, do not risk
              it.
            </p>
          </Prose>
        </div>
      </Section>

      {/* cold chain strip */}
      <Section alt size="sm">
        <div className="shell">
          <Reveal className="flex flex-col items-center gap-8 rounded-[2rem] border hairline surface-card p-8 text-center sm:p-12">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Snowflake, label: 'Sealed at 4°C' },
                { icon: Thermometer, label: 'Van logged at every stop' },
                { icon: Snowflake, label: 'Store chiller' },
                { icon: Thermometer, label: 'Your fridge' },
              ].map(({ icon: Ico, label }, i, arr) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="flex items-center gap-2 rounded-full border hairline px-4 py-2.5 text-[12.5px] font-semibold">
                    <Ico className="size-4 text-forest-500 dark:text-leaf-400" /> {label}
                  </span>
                  {i < arr.length - 1 && <span aria-hidden="true" className="text-soft">→</span>}
                </div>
              ))}
            </div>
            <p className="text-soft max-w-2xl text-[15px] leading-relaxed">
              We control the first three links. The fourth is yours, and it is the one that decides
              whether tomorrow's idlies are soft.
            </p>
            <Button to="/faqs" variant="outline">
              More questions answered
            </Button>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
