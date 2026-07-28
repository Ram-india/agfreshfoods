import { ArrowRight } from 'lucide-react'
import Seo, { breadcrumbSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Prose from '../components/ui/Prose'
import Art from '../components/ui/Art'
import { storyMilestones } from '../data/content'

const trail = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Our Story', to: '/our-story' },
]

export default function OurStory() {
  return (
    <>
      <Seo
        title="Our Story"
        description="From forty packs a day in a home kitchen to 180 retail stores across Tamil Nadu — the story of how AG Fresh Foods grew without changing the recipe."
        keywords="AG Fresh Foods story, batter business Coimbatore, family food business Tamil Nadu"
        schema={breadcrumbSchema(trail)}
      />

      <PageHero
        eyebrow="Our Story"
        title="It began with one wet grinder and a neighbour who kept asking"
        subtitle="Nine years, six districts and a great deal of very early mornings. Here is how AG Fresh Foods actually happened."
        trail={trail}
      />

      <Section>
        <div className="shell grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-3xl border hairline shadow-lift">
              <Art name="grinding" className="aspect-[4/5] w-full" label="Stone grinding at the AG Fresh Foods unit" />
            </div>
            <p className="text-soft mt-4 text-[13px] leading-relaxed">
              The same slow stone grinding we started with in 2017 — just more of them now.
            </p>
          </Reveal>

          <Prose>
            <h2 className="!mt-0">The problem was never the recipe</h2>
            <p>
              Every household in Tamil Nadu knows how to make idly batter. Soak the rice and dal
              separately, grind them, mix, salt, and leave it overnight somewhere warm. The knowledge is
              not scarce.
            </p>
            <p>
              What is scarce is the eight hours of planning it demands. Soaking has to start the previous
              afternoon. Grinding happens at night. If you forget, breakfast becomes bread. That single
              logistical failure is why a traditional South Indian breakfast quietly disappeared from a
              lot of weekday tables.
            </p>

            <h2>2017: forty packs, one grinder, no plan</h2>
            <p>
              We began making extra batter and selling it to neighbours in our apartment block. There was
              no brand, no packaging and no ambition beyond covering the cost of the rice. Word moved
              faster than we did — within a few months we were grinding through the night to keep up.
            </p>

            <h2>2019: the first three stores</h2>
            <p>
              Three provision stores in Coimbatore agreed to stock us, on the condition that we take back
              anything unsold the same evening. That condition turned out to be the best thing that
              happened to the business. It forced us to build around <strong>same-day production</strong>
              from the start, rather than bolting freshness on later.
            </p>
            <p>All three stores are still customers.</p>

            <h2>2021: betting on a grain nobody stocked</h2>
            <p>
              Karuppu Kavuni was, at that point, a specialty item sold in small quantities at organic
              stores. Grinding it into everyday breakfast batter made very little commercial sense. It
              cost more, behaved differently in the grinder, and produced an idly that was distinctly
              purple.
            </p>
            <p>
              We launched it anyway, in small batches, mostly out of stubbornness. It is now our
              bestselling variety — and the farmers we buy from have expanded their acreage twice.
            </p>

            <h2>2023: leaving the kitchen for good</h2>
            <p>
              We moved into a purpose-built unit with cold rooms, a separate packing hall and our own
              refrigerated vans. The vans mattered most. Until then we were relying on other people's
              logistics to protect a four-day product, and losing batches to broken cold chains we could
              not see.
            </p>

            <h2>2025: millets, after a year of failures</h2>
            <p>
              Millet batter took eleven months to get right. Early versions were nutritionally excellent
              and texturally disappointing — dense idlies that no child would eat twice. The fix was
              boring and slow: dozens of ratio trials until the urad dal carried the structure and the
              millets carried the fibre.
            </p>

            <h2>Where we are now</h2>
            <p>
              180 stores, six districts, and a production cap we deliberately do not exceed. We turn down
              volume when it would mean grinding tomorrow's stock today. That is not a marketing
              position — it is the only version of this business that works.
            </p>
            <p>
              If you would like to be part of the next stretch of it, our{' '}
              <a href="/dealers">dealer programme</a> is open.
            </p>
          </Prose>
        </div>
      </Section>

      {/* milestones */}
      <Section alt>
        <div className="shell">
          <SectionHeading eyebrow="Milestones" title="Nine years, in order" />

          <div className="relative mt-14">
            {/* vertical rail */}
            <span
              aria-hidden="true"
              className="absolute left-[26px] top-2 h-[calc(100%-2rem)] w-0.5 bg-gradient-to-b from-forest-500 via-leaf-500 to-turmeric-500 opacity-30 md:left-1/2 md:-translate-x-1/2"
            />

            <ol className="flex flex-col gap-8">
              {storyMilestones.map((m, i) => (
                <li
                  key={m.year}
                  className={`relative flex gap-6 md:w-1/2 ${
                    i % 2 ? 'md:ml-auto md:pl-12' : 'md:pr-12 md:text-right'
                  }`}
                >
                  <span
                    className={`absolute top-1.5 z-10 grid size-[54px] shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-forest-500 to-leaf-500 font-heading text-[13px] font-extrabold text-white shadow-[0_10px_24px_-8px_rgb(46_125_50_/_0.6)] ${
                      i % 2 ? 'left-0 md:-left-[27px]' : 'left-0 md:-right-[27px] md:left-auto'
                    }`}
                  >
                    {m.year}
                  </span>

                  <Reveal
                    x={i % 2 ? 30 : -30}
                    y={0}
                    className="surface-card ml-[70px] flex-1 rounded-3xl border hairline p-6 shadow-soft md:ml-0"
                  >
                    <h3 className="font-heading text-lg font-bold">{m.title}</h3>
                    <p className="text-soft mt-2 text-sm leading-relaxed">{m.body}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <Reveal delay={0.1} className="mt-14 flex flex-wrap justify-center gap-3">
            <Button to="/manufacturing-process">
              How we make it <ArrowRight className="size-4" />
            </Button>
            <Button to="/products" variant="outline">
              Browse the range
            </Button>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
