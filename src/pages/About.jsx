import { ArrowRight } from 'lucide-react'
import Seo, { breadcrumbSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import Prose from '../components/ui/Prose'
import Art from '../components/ui/Art'
import Counter from '../components/ui/Counter'
import { promises, qualityPoints, stats } from '../data/content'

const trail = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
]

export default function About() {
  return (
    <>
      <Seo
        title="About AG Fresh Foods"
        description="AG Fresh Foods is a Tamil Nadu batter maker grinding traditional idly and dosa batter fresh every morning. Learn how we source, grind, pack and deliver without preservatives."
        keywords="about AG Fresh Foods, batter manufacturer Coimbatore, fresh idly dosa batter company"
        schema={breadcrumbSchema(trail)}
      />

      <PageHero
        eyebrow="About Us"
        title="A batter company that refuses to make batter in advance"
        subtitle="AG Fresh Foods exists because good idly is not complicated — it is just inconvenient. We took on the inconvenient part and left the recipe alone."
        trail={trail}
      >
        <Button to="/our-story">
          Read our story <ArrowRight className="size-4" />
        </Button>
        <Button to="/manufacturing-process" variant="outline">
          See how it's made
        </Button>
      </PageHero>

      <Section>
        <div className="shell grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Prose>
            <h2 className="!mt-0">Who we are</h2>
            <p>
              AG Fresh Foods is a family-run food business in {''}
              <strong>Coimbatore, Tamil Nadu</strong>. We make one category of product — fresh idly and
              dosa batter — and we make it the way it was made before packaged batter existed: whole
              grains, overnight soaking, slow stone grinding and natural fermentation.
            </p>
            <p>
              What started as forty packs a day out of a home kitchen in 2017 now reaches more than 180
              retail stores across six districts. The scale changed. The method did not.
            </p>

            <h2>What we actually do differently</h2>
            <p>
              Most packaged batter is built for shelf life. That is a reasonable commercial decision,
              and it usually means a preservative, an acidity regulator, or a batter ground so fine and
              so warm that the natural cultures never survive to do their job.
            </p>
            <p>
              We went the other way. Our batter has a <strong>four-day life</strong>, not four weeks. It
              needs refrigeration from the moment it is sealed. It costs us more to make and more to
              move. In exchange, the idly is soft, the dosa is crisp, and the ingredient list is five
              lines long.
            </p>
            <blockquote>
              <p>
                If a pack of our batter is sitting on a shelf at room temperature, something has gone
                wrong — and we would genuinely like to know about it.
              </p>
            </blockquote>

            <h2>Where Karuppu Kavuni came in</h2>
            <p>
              In 2021 we began working with farmers growing <strong>Karuppu Kavuni</strong>, the heritage
              black rice of Tamil Nadu. It was a risk: black rice costs more, grinds differently, and
              produces a purple-grey idly that looks nothing like what people expect.
            </p>
            <p>
              It became our bestseller. Partly for the antioxidants and fibre, and partly because
              children find it genuinely interesting to eat. It also created steady demand for a grain
              that had nearly disappeared from Tamil fields.
            </p>
            <p>
              You can read more about the grain on our{' '}
              <a href="/why-karuppu-kavuni">Why Karuppu Kavuni</a> page.
            </p>

            <h2>Who we make it for</h2>
            <ul>
              <li>
                <strong>Working families</strong> who want a traditional breakfast without a 5 AM start.
              </li>
              <li>
                <strong>Parents</strong> who read ingredient lists and would rather not explain what an
                acidity regulator is.
              </li>
              <li>
                <strong>People managing blood sugar or fibre intake</strong>, who need the millet, ragi
                and black rice options to genuinely be what they claim.
              </li>
              <li>
                <strong>Store owners and distributors</strong> who want a fast-moving chilled product
                and a supplier who shows up before the shutters open.
              </li>
            </ul>
          </Prose>

          {/* side rail */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border hairline shadow-soft">
                <Art name="factory" className="aspect-[4/3] w-full" label="The AG Fresh Foods production unit" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="surface-card grid grid-cols-2 gap-5 rounded-3xl border hairline p-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-heading text-2xl font-extrabold text-forest-600 tabular-nums dark:text-leaf-400">
                      <Counter value={s.value} suffix={s.suffix} />
                    </dt>
                    <dd className="text-soft mt-1 text-[11.5px] font-semibold uppercase tracking-wide">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-turmeric-500/35 bg-turmeric-500/[0.08] p-6">
                <p className="font-heading text-base font-bold">Want to see the unit?</p>
                <p className="text-soft mt-2 text-sm leading-relaxed">
                  We show serious dealers around the facility — grinding hall, cold rooms and packing
                  line. No appointment theatre, just call.
                </p>
                <Button to="/contact" variant="accent" size="sm" className="mt-4">
                  Arrange a visit
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* promise strip */}
      <Section alt size="sm">
        <div className="shell">
          <SectionHeading eyebrow="Our Promise" title="The four constraints we build around" />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p) => (
              <RevealItem key={p.title}>
                <article className="surface-card card-hover h-full rounded-3xl border hairline p-6">
                  <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-forest-500 to-leaf-500 text-white">
                    <Icon name={p.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold">{p.title}</h3>
                  <p className="text-soft mt-2 text-[13px] leading-relaxed">{p.body}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <Section size="sm">
        <div className="shell">
          <SectionHeading
            eyebrow="Quality Assurance"
            title="What we check, every single day"
            body="Food safety is a routine, not a plaque. Here is the routine."
          />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {qualityPoints.map((q) => (
              <RevealItem key={q.title}>
                <article className="h-full rounded-3xl border hairline p-6 transition-colors duration-500 hover:border-leaf-500/40">
                  <span className="grid size-11 place-items-center rounded-2xl bg-turmeric-500/15 text-turmeric-600 dark:text-turmeric-400">
                    <Icon name={q.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold">{q.title}</h3>
                  <p className="text-soft mt-2 text-[13px] leading-relaxed">{q.body}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
            <Button to="/quality-standards">
              Full quality standards <ArrowRight className="size-4" />
            </Button>
            <Button to="/gallery" variant="outline">
              See the unit
            </Button>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
