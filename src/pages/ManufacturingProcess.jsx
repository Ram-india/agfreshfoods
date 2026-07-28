import { ArrowRight, Clock } from 'lucide-react'
import Seo, { breadcrumbSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import Art from '../components/ui/Art'
import BeforeAfter from '../components/ui/BeforeAfter'
import DayArc from '../components/home/DayArc'
import { processSteps } from '../data/content'

const trail = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Manufacturing Process', to: '/manufacturing-process' },
]

/**
 * Long-form detail shown only on this page, index-matched to `processSteps`.
 * Artwork and clock times come from the shared data so the two pages agree.
 */
const detail = [
  'Deliveries are graded before they leave the truck. We check moisture, broken-grain percentage and smell on every sack of rice, dal and millet. Rejected stock never enters the store room — it goes straight back. Karuppu Kavuni arrives from a small group of farms we buy from directly, so we know the field it came from.',
  'Grains are rinsed in RO-purified water until the runoff is clear, which removes surface starch and field dust. Then each variety soaks for exactly the time it needs — idly rice and urad dal soak separately, because they hydrate at different rates. Millets take the longest. Getting this wrong is the single most common cause of dense idlies.',
  'Slow stone grinders do the work. Speed generates heat, and heat kills the wild lactic acid bacteria and yeasts that make batter rise on its own. Stone grinding keeps the batter below the temperature where those cultures die, and leaves a slightly coarse texture that traps gas better than an over-smooth paste. It takes far longer than a high-speed grinder. That is the point.',
  'Every batch is checked before it moves: texture by hand and eye, pH to confirm fermentation is where it should be, aroma for the clean tang of healthy cultures, and a test steam of a few idlies from the batch itself. If a batch is off, it does not get packed. We absorb the loss rather than ship it.',
  'Sealing happens in a separate sanitised room. Gloves, caps and masks on every shift, surfaces cleaned and logged between batches. Packs are food-grade, tamper-evident, and printed with the batch code and the real packed-on date — we never post-date a pack to buy shelf life.',
  'Sealed packs go straight into 4°C cold rooms. Refrigeration does not stop fermentation, it slows it dramatically — which holds the batter near its peak instead of letting it race past. This is why the cold chain is not a nicety for us; it is the entire preservation method.',
  'Refrigerated vans run fixed daily routes and reach stores before the shutters open. Drivers log the in-van temperature at each stop. Anything unsold from the previous day comes back with them — we would rather take the loss than have a customer buy a pack past its best.',
]

export default function ManufacturingProcess() {
  return (
    <>
      <Seo
        title="Our Manufacturing Process"
        description="A step-by-step look at how AG Fresh Foods makes idly and dosa batter: grain selection, RO washing, slow stone grinding, batch quality checks, hygienic packing, 4°C cold storage and dawn delivery."
        keywords="idly batter manufacturing process, how dosa batter is made, stone ground batter, cold chain batter, hygienic batter production"
        schema={breadcrumbSchema(trail)}
      />

      <PageHero
        eyebrow="How It's Made"
        title="Fourteen hours from grain to your doorstep"
        subtitle="Soaking starts the previous afternoon. Grinding starts at 2 AM. Your pack reaches the store before 7. Here is every step in between."
        trail={trail}
      >
        <Button to="/quality-standards">
          Quality standards <ArrowRight className="size-4" />
        </Button>
        <Button to="/gallery" variant="outline">
          See the unit
        </Button>
      </PageHero>

      {/* whole journey at a glance */}
      <Section size="sm">
        <div className="shell">
          <Reveal className="mx-auto max-w-5xl">
            <DayArc />
          </Reveal>
        </div>
      </Section>

      <Section className="!pt-4">
        <div className="shell">
          <ol className="flex flex-col gap-16 lg:gap-24">
            {processSteps.map((step, i) => {
              const flip = i % 2 === 1
              return (
                <li key={step.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  {/* visual */}
                  <Reveal x={flip ? 34 : -34} y={0} className={flip ? 'lg:order-2' : ''}>
                    <div className="group relative overflow-hidden rounded-3xl border hairline shadow-lift">
                      <Art
                        name={step.art}
                        className="aspect-[4/3] w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                        label={`${step.title} — step ${i + 1} of 7`}
                      />
                      <span className="glass-strong absolute left-4 top-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold tabular-nums">
                        <Clock className="size-3.5" /> {step.time}
                        <span className="text-soft font-medium">· {step.dayPart}</span>
                      </span>
                      <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-white/95 font-heading text-xs font-extrabold text-forest-700 shadow-soft">
                        {i + 1}
                      </span>
                    </div>
                  </Reveal>

                  {/* copy */}
                  <Reveal x={flip ? -34 : 34} y={0} delay={0.08}>
                    <div className="flex items-center gap-3">
                      <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-forest-500 to-leaf-500 text-white">
                        <Icon name={step.icon} className="size-5" />
                      </span>
                      <span className="font-heading text-sm font-extrabold uppercase tracking-[0.14em] text-forest-500 dark:text-leaf-400">
                        Step {String(i + 1).padStart(2, '0')} of 07
                      </span>
                    </div>

                    <h2 className="mt-5 text-2xl sm:text-3xl">{step.title}</h2>
                    <p className="mt-4 font-heading text-base font-medium leading-snug">{step.body}</p>
                    <p className="text-soft mt-4 text-[15px] leading-[1.75]">{detail[i]}</p>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </Section>

      <Section alt>
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <Reveal x={-30} y={0}>
            <BeforeAfter
              beforeArt="fermentation"
              afterArt="idly"
              beforeSrc="batter-fresh.jpg"
              afterSrc="idly-steamed.jpg"
              beforeLabel="Peak Batter"
              afterLabel="Finished Idly"
            />
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="The Science"
              title="Why an idly is mostly trapped air"
              body="Wild bacteria and yeasts release carbon dioxide as they feed on rice and dal starches. Urad dal protein traps that gas in thousands of tiny bubbles. Steam expands them, the batter sets, and the bubbles become the soft crumb."
              className="!mx-0"
            />
            <p className="text-soft mt-5 text-[15px] leading-[1.75]">
              Every decision above exists to protect that structure — the soak times, the grinding
              temperature, the 4°C cold rooms, the refusal to whisk. Break any one of them and you get a
              flat, sour idly that no amount of steaming will fix.
            </p>
            <Button to="/blogs/how-fresh-batter-makes-better-idly" className="mt-8">
              Read the full explainer <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
