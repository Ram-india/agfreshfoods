import { ArrowRight } from 'lucide-react'
import Seo, { breadcrumbSchema, faqSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Prose from '../components/ui/Prose'
import Icon from '../components/ui/Icon'
import Accordion from '../components/ui/Accordion'
import Art from '../components/ui/Art'

const trail = [
  { label: 'Home', to: '/' },
  { label: 'Health Benefits of Black Rice', to: '/health-benefits-of-black-rice' },
]

const nutrients = [
  { icon: 'Sparkles', label: 'Anthocyanins', body: 'The purple-black pigment; an antioxidant of the same family found in blueberries and jamun.' },
  { icon: 'Wheat', label: 'Dietary fibre', body: 'Retained in the intact bran layer, roughly 2.5× that of polished white rice.' },
  { icon: 'Magnet', label: 'Iron', body: 'A meaningful plant source; traditionally given to new mothers as kanji.' },
  { icon: 'Activity', label: 'Lower glycaemic load', body: 'Fibre slows digestion, flattening the post-meal blood sugar rise.' },
  { icon: 'Scale', label: 'Plant protein', body: 'Slightly higher than white rice, and complemented by the urad dal in batter.' },
  { icon: 'Leaf', label: 'Magnesium & zinc', body: 'Present in the bran; fermentation improves how much your body can absorb.' },
]

const benefitFaqs = [
  {
    q: 'Is black rice better than brown rice?',
    a: 'They are both unpolished, so both keep their bran and fibre. Black rice additionally carries anthocyanin antioxidants, which brown rice does not have in any meaningful quantity. Brown rice is more widely available and cheaper; black rice brings the antioxidant advantage. Alternating between them is a perfectly sensible approach.',
  },
  {
    q: 'Is black rice better than brown rice?',
    a: 'They are both unpolished, so both keep their bran and fibre. Black rice additionally carries anthocyanin antioxidants, which brown rice does not have in any meaningful quantity. Brown rice is more widely available and cheaper; black rice brings the antioxidant advantage. Alternating between them is a perfectly sensible approach.',
  },
  {
    q: 'Can people with diabetes eat black rice?',
    a: 'Black rice has a lower glycaemic load than polished white rice and more fibre, and many people managing diabetes find it easier to fit into their diet. It is still a carbohydrate, so portion size continues to matter. Please discuss your own diet with your doctor or dietitian — we make batter, not medical recommendations.',
  },
  {
    q: 'Does cooking destroy the antioxidants?',
    a: 'Some anthocyanin content is lost to heat and to any water that is discarded, as with most water-soluble compounds. A meaningful amount survives — you can see it in the colour of a steamed Kavuni idly. Steaming, as in idly, retains more than boiling and draining would.',
  },
  {
    q: 'Is black rice gluten free?',
    a: 'Yes, all rice is naturally gluten free, including Karuppu Kavuni. Our Karuppu Kavuni batter contains only black rice, urad dal, fenugreek, salt and water. Note that our Wheat Dosa Batter does contain gluten, and we make products on shared equipment, so we cannot claim a certified gluten-free facility.',
  },
  {
    q: 'Why is black rice more expensive?',
    a: 'It yields less per acre than modern high-yield paddy, takes longer to mature, and is grown by a much smaller number of farmers. The price reflects genuine scarcity rather than a premium positioning exercise.',
  },
  {
    q: 'Is black rice gluten free?',
    a: 'Yes, all rice is naturally gluten free, including Karuppu Kavuni. Our Karuppu Kavuni batter contains only black rice, urad dal, fenugreek, salt and water. Note that our Wheat Dosa Batter does contain gluten, and we make products on shared equipment, so we cannot claim a certified gluten-free facility.',
  },
  {
    q: 'Why is black rice more expensive?',
    a: 'It yields less per acre than modern high-yield paddy, takes longer to mature, and is grown by a much smaller number of farmers. The price reflects genuine scarcity rather than a premium positioning exercise.',
  },
  
  {
    q: 'How often should I eat it?',
    a: 'There is no target to hit. Black rice is not a supplement — it is a grain that happens to carry more of the good things than its polished counterpart. A few mornings a week, as part of a varied diet with dal and vegetables, is where it does real work.',
  },
]

export default function BlackRiceBenefits() {
  return (
    <>
      <Seo
        title="Health Benefits of Black Rice"
        description="What black rice (Karuppu Kavuni) actually contains: anthocyanin antioxidants, high dietary fibre, iron, a lower glycaemic load, and why natural fermentation makes those nutrients more available."
        keywords="health benefits of black rice, karuppu kavuni benefits, black rice antioxidants, black rice for diabetes, forbidden rice nutrition"
        schema={[breadcrumbSchema(trail), faqSchema(benefitFaqs)]}
      />

      <PageHero
        eyebrow="Nutrition"
        title="Health benefits of black rice"
        subtitle="An honest look at what Karuppu Kavuni contains, what that does in the body, and what it will not do. No miracle claims."
        trail={trail}
        dark
      >
        <Button to="/products/karuppu-kavuni-idly-dosa-batter" variant="accent">
          Try the batter <ArrowRight className="size-4" />
        </Button>
        <Button to="/why-karuppu-kavuni" variant="light">
          The grain's history
        </Button>
      </PageHero>

      {/* nutrient cards */}
      <Section>
        <div className="shell">
          <SectionHeading
            eyebrow="What's inside"
            title="Six things black rice brings to breakfast"
            body="Values vary by soil and season. These are the properties that hold consistently."
          />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {nutrients.map((n) => (
              <RevealItem key={n.label}>
                <article className="surface-card card-hover h-full rounded-3xl border hairline p-6">
                  <span className="grid size-11 place-items-center rounded-2xl bg-kavuni-500/12 text-kavuni-500 dark:text-kavuni-400">
                    <Icon name={n.icon} className="size-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-bold">{n.label}</h3>
                  <p className="text-soft mt-2 text-[13px] leading-relaxed">{n.body}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* long form */}
      <Section alt>
        <div className="shell grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Prose>
            <h2 className="!mt-0">Antioxidants, without the hand-waving</h2>
            <p>
              "Antioxidant" gets used so loosely that it has almost stopped meaning anything. Here is the
              specific mechanism. Normal metabolism produces <strong>free radicals</strong> — molecules
              with an unpaired electron that stabilise themselves by taking one from a nearby cell
              structure, causing damage in the process. Sustained over years, that damage is associated
              with cellular ageing and chronic inflammation.
            </p>
            <p>
              Antioxidants donate an electron without becoming destructive themselves, which interrupts
              the chain. The anthocyanins that make Karuppu Kavuni black are effective at this. That is
              the whole claim — useful, measurable, and not a cure for anything.
            </p>

            <h2>Fibre is the underrated part</h2>
            <p>
              The bran layer that polishing removes is where most of the fibre lives. Fibre does three
              things worth caring about. It slows digestion, which flattens the sharp glucose spike a
              refined-carbohydrate meal produces. It creates a sense of fullness that lasts hours rather
              than minutes. And it feeds gut bacteria, which is increasingly understood as central to
              immunity and mood rather than just digestion.
            </p>
            <p>
              For most people, the practical difference between a white rice breakfast and a Kavuni one is
              not felt at 8 AM. It is felt at 11, when one group is hungry and the other is not.
            </p>

            <h2>Iron, and the tradition that found it first</h2>
            <p>
              Kavuni is a meaningful plant source of iron. Tamil households have given black rice kanji to
              new mothers and to people recovering from illness for generations. Nobody was measuring
              milligrams; the practice persisted because the outcome was observable.
            </p>
            <p>
              Plant iron is absorbed less readily than iron from animal sources. Two things help: vitamin C
              alongside the meal, and fermentation.
            </p>

            <h2>Why fermentation matters more than people expect</h2>
            <p>
              Whole grains contain <strong>phytic acid</strong>, which binds minerals like iron and zinc
              and prevents your body from absorbing them. It is the reason a whole grain's nutrition label
              can overstate what you actually get from it.
            </p>
            <p>
              Natural fermentation begins breaking phytic acid down. So Kavuni ground into batter and left
              to ferment overnight delivers more usable iron and zinc than the same grain simply boiled.
              This is the quiet argument for eating black rice as idly rather than as plain rice.
            </p>

            <h2>The honest limits</h2>
            <ul>
              <li>It is a carbohydrate. Portion size still matters, particularly if you are managing blood sugar.</li>
              <li>Some antioxidant content is lost to heat. Steaming retains more than boiling and draining.</li>
              <li>It is not a treatment for any condition, and nothing on this page is medical advice.</li>
              <li>
                Variety beats optimisation. Alternating Kavuni, millet, ragi and white rice through the
                week is better than eating any single one of them religiously.
              </li>
            </ul>
          </Prose>

          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border hairline shadow-lift">
                <Art name="blackrice" className="aspect-square w-full" label="Karuppu Kavuni black rice" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="surface-card rounded-3xl border hairline p-6">
                <p className="font-heading text-sm font-bold uppercase tracking-wider">Per 100 g, uncooked batter</p>
                <dl className="mt-4 divide-y">
                  {[
                    ['Energy', '148 kcal'],
                    ['Protein', '4.9 g'],
                    ['Carbohydrate', '29.4 g'],
                    ['Dietary fibre', '2.8 g'],
                    ['Total fat', '0.7 g'],
                    ['Iron', '1.9 mg'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between py-2.5">
                      <dt className="text-soft text-[13px]">{k}</dt>
                      <dd className="font-heading text-[13px] font-bold tabular-nums">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="text-soft mt-4 text-[10.5px] leading-relaxed">
                  Indicative values for our Karuppu Kavuni batter from standard composition tables.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="shell">
          <SectionHeading eyebrow="FAQ" title="Questions about black rice" />
          <Reveal delay={0.08} className="mx-auto mt-12 max-w-3xl">
            <Accordion items={benefitFaqs} />
          </Reveal>
        </div>
      </Section>
    </>
  )
}
