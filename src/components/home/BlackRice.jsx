import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '../ui/Section'
import Reveal, { RevealGroup, RevealItem } from '../ui/Reveal'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Art from '../ui/Art'
import { blackRiceBenefits } from '../../data/content'

export default function BlackRice() {
  return (
    <section id="black-rice" className="relative isolate overflow-hidden bg-kavuni-800 py-20 text-white lg:py-28">
      {/* premium dark wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_55%_at_12%_8%,rgb(124_90_168_/_0.4),transparent_62%),radial-gradient(ellipse_50%_50%_at_90%_92%,rgb(255_193_7_/_0.16),transparent_60%)]"
      />
      {/* grain speckles */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.16]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.55) 1px, transparent 0)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionHeading
              align="left"
              light
              eyebrow="Karuppu Kavuni"
              title="Why Black Rice?"
              body="For centuries Karuppu Kavuni was grown across Tamil Nadu and largely reserved for royal households. It survived because a few farming families refused to let the seed go. Here is what modern nutrition finds in it."
              className="!mx-0"
            />

            <RevealGroup className="mt-11 grid gap-4 sm:grid-cols-2">
              {blackRiceBenefits.map((b) => (
                <RevealItem key={b.title}>
                  <article className="group h-full rounded-2xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-turmeric-400/50 hover:bg-white/[0.1]">
                    <span className="grid size-10 place-items-center rounded-xl bg-turmeric-500/18 text-turmeric-300 transition-colors duration-500 group-hover:bg-turmeric-500 group-hover:text-kavuni-800">
                      <Icon name={b.icon} className="size-5" />
                    </span>
                    <h3 className="mt-4 font-heading text-base font-bold">{b.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/65">{b.body}</p>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
              <Button to="/why-karuppu-kavuni" variant="accent">
                Explore Karuppu Kavuni <ArrowRight className="size-4" />
              </Button>
              <Button to="/products/karuppu-kavuni-idly-dosa-batter" variant="light">
                Shop the batter
              </Button>
            </Reveal>
          </div>

          {/* infographic */}
          <Reveal x={40} y={0} delay={0.1}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-kavuni-400/40 to-turmeric-500/25 blur-3xl"
              />
              <div className="overflow-hidden rounded-[2rem] border border-white/15 shadow-lift">
                <Art name="blackrice" className="aspect-square w-full" label="Karuppu Kavuni black rice in a bowl" />
              </div>

              {/* nutrient ring stats */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  ['6×', 'more antioxidants than white rice'],
                  ['2.5×', 'more dietary fibre'],
                  ['Low', 'glycaemic load'],
                ].map(([v, l]) => (
                  <div
                    key={l}
                    className="rounded-2xl border border-white/12 bg-white/[0.06] px-3 py-4 text-center backdrop-blur-sm"
                  >
                    <p className="font-heading text-2xl font-extrabold text-turmeric-300">{v}</p>
                    <p className="mt-1.5 text-[11px] leading-tight text-white/60">{l}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-center text-[10.5px] text-white/40">
                Indicative comparison against polished white rice, based on published food-composition data.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
