import { ArrowRight } from 'lucide-react'
import Seo, { breadcrumbSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import Prose from '../components/ui/Prose'
import Art from '../components/ui/Art'
import { blackRiceBenefits } from '../data/content'

const trail = [
  { label: 'Home', to: '/' },
  { label: 'Why Karuppu Kavuni?', to: '/why-karuppu-kavuni' },
]

const compare = [
  ['Bran layer', 'Removed by polishing', 'Intact'],
  ['Antioxidants', 'Negligible', 'High (anthocyanins)'],
  ['Dietary fibre', 'Low', 'Roughly 2.5× higher'],
  ['Glycaemic load', 'High', 'Lower'],
  ['Iron', 'Low', 'Meaningful plant source'],
  ['Colour when cooked', 'White', 'Deep purple-grey'],
]

export default function WhyKavuni() {
  return (
    <>
      <Seo
        title="Why Karuppu Kavuni? The Tamil Heritage Black Rice"
        description="Karuppu Kavuni is the heritage black rice of Tamil Nadu — rich in anthocyanin antioxidants, high in fibre, iron rich and lower on the glycaemic scale than polished white rice. Here is why we grind it into everyday batter."
        keywords="karuppu kavuni, black rice benefits, forbidden rice Tamil Nadu, anthocyanin rice, kavuni arisi, heritage rice India"
        schema={breadcrumbSchema(trail)}
      />

      <PageHero
        eyebrow="Karuppu Kavuni"
        title="The rice that was once reserved for kings"
        subtitle="Grown in Tamil Nadu for centuries, nearly lost to high-yield white paddy, and now the most requested batter we make. Here is what is actually in it."
        trail={trail}
        dark
      >
        <Button to="/products/karuppu-kavuni-idly-dosa-batter" variant="accent">
          Shop the batter <ArrowRight className="size-4" />
        </Button>
        <Button to="/health-benefits-of-black-rice" variant="light">
          Health benefits in depth
        </Button>
      </PageHero>

      {/* benefits grid */}
      <Section>
        <div className="shell">
          <SectionHeading
            eyebrow="Six reasons"
            title="What makes this grain different"
            body="Not folklore — these are the properties that show up consistently in food-composition data."
          />

          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blackRiceBenefits.map((b) => (
              <RevealItem key={b.title}>
                <article className="surface-card card-hover group h-full rounded-3xl border hairline p-7">
                  <span className="grid size-12 place-items-center rounded-2xl bg-kavuni-500/12 text-kavuni-500 transition-all duration-500 group-hover:bg-kavuni-500 group-hover:text-white dark:text-kavuni-400">
                    <Icon name={b.icon} className="size-[22px]" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold">{b.title}</h3>
                  <p className="text-soft mt-2.5 text-sm leading-relaxed">{b.body}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* story + comparison */}
      <Section alt>
        <div className="shell grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Prose>
            <h2 className="!mt-0">A grain with a long memory</h2>
            <p>
              Karuppu Kavuni — <em>karuppu</em> meaning black, <em>kavuni</em> the varietal name — has
              been cultivated in Tamil Nadu for well over a thousand years. Under Chola-era custom it was
              largely restricted to royal households, which is where the popular nickname{' '}
              <strong>"forbidden rice"</strong> comes from.
            </p>
            <p>
              It very nearly vanished. Through the second half of the twentieth century, Indian
              agriculture shifted decisively toward high-yield white paddy. Kavuni yields less per acre,
              takes longer to mature and needs careful handling. It survived in pockets only because a
              small number of farming families kept planting it.
            </p>

            <h2>The colour is doing the work</h2>
            <p>
              That deep purple-black comes from <strong>anthocyanins</strong> — the same antioxidant
              pigment family found in blueberries, jamun and black grapes. Antioxidants matter because
              they neutralise free radicals, the unstable molecules associated with cellular ageing and
              chronic inflammation.
            </p>
            <p>
              White rice has effectively none of this, and not because the variety is inferior. Polishing
              physically strips away the bran layer that carries the pigment, the fibre and most of the
              micronutrients. Kavuni keeps its bran, which is also why it needs a longer soak and a slower
              grind.
            </p>

            <h2>Why fermenting it makes it better still</h2>
            <p>
              Whole grains contain <strong>phytic acid</strong>, a compound that binds minerals like iron
              and zinc and blocks the body from absorbing them. Natural fermentation begins breaking
              phytic acid down.
            </p>
            <p>
              So grinding Kavuni into batter and letting it ferment overnight does not just make it
              convenient — it makes the iron and zinc already present more available to you than they
              would be in a plain cooked-rice preparation. Tradition arrived at this long before anyone
              measured it.
            </p>

            <h2>What it will not do</h2>
            <p>
              Black rice is a genuinely good grain, not a treatment for anything. It works the way real
              nutrition works: quietly, as part of a varied diet, over years. If you are managing
              diabetes or any other condition, talk to your doctor or dietitian about your own diet rather
              than to a website.
            </p>
          </Prose>

          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border hairline shadow-lift">
                <Art name="blackrice" className="aspect-square w-full" label="Karuppu Kavuni black rice grains" />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="surface-card overflow-hidden rounded-3xl border hairline">
                <div className="border-b px-5 py-4">
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
                    Kavuni vs white rice
                  </h3>
                </div>
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="surface-alt">
                      <th scope="col" className="p-3 text-left font-heading text-[11px] font-bold uppercase">
                        &nbsp;
                      </th>
                      <th scope="col" className="p-3 text-left font-heading text-[11px] font-bold uppercase">
                        White
                      </th>
                      <th scope="col" className="p-3 text-left font-heading text-[11px] font-bold uppercase text-kavuni-500 dark:text-kavuni-400">
                        Kavuni
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {compare.map(([label, white, kavuni]) => (
                      <tr key={label} className="border-t">
                        <th scope="row" className="p-3 text-left font-heading text-[12px] font-bold">
                          {label}
                        </th>
                        <td className="text-soft p-3">{white}</td>
                        <td className="p-3 font-semibold">{kavuni}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-soft border-t px-4 py-3 text-[10.5px] leading-relaxed">
                  Indicative comparison based on published food-composition data for polished white rice
                  and unpolished black rice.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-3xl border border-kavuni-400/40 bg-kavuni-500/[0.08] p-6">
                <p className="font-heading text-base font-bold">Supporting the farmers</p>
                <p className="text-soft mt-2 text-sm leading-relaxed">
                  We buy Kavuni directly from a small group of Tamil Nadu farms. Steady batter demand has
                  let them expand acreage twice since 2021 — which is the only reliable way a heritage
                  seed survives.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section size="sm">
        <div className="shell">
          <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-kavuni-700 px-7 py-14 text-center text-white sm:px-14">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_60%_at_15%_10%,rgb(124_90_168_/_0.5),transparent_60%),radial-gradient(ellipse_45%_50%_at_88%_90%,rgb(255_193_7_/_0.2),transparent_60%)]"
            />
            <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-4xl">
              Try the batter that made a heritage grain viable again
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
              Ground fresh this morning, sealed cold, and on your breakfast table tomorrow.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button to="/products/karuppu-kavuni-idly-dosa-batter" variant="accent" size="lg">
                Order Karuppu Kavuni Batter
              </Button>
              <Button to="/products" variant="light" size="lg">
                See all varieties
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
