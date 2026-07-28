import Section, { SectionHeading } from '../ui/Section'
import Reveal, { RevealGroup, RevealItem } from '../ui/Reveal'
import Icon from '../ui/Icon'
import BeforeAfter from '../ui/BeforeAfter'
import { promises } from '../../data/content'

export default function Promise() {
  return (
    <Section id="promise">
      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* before / after */}
          <Reveal x={-30} y={0}>
            <BeforeAfter
              beforeArt="fermentation"
              afterArt="idly"
              beforeSrc="batter-fresh.jpg"
              afterSrc="idly-steamed.jpg"
              beforeLabel="Fresh Batter"
              afterLabel="Soft Idly"
            />
            <p className="text-soft mt-4 text-center text-[13px]">
              Drag to see what naturally fermented batter becomes on the steamer.
            </p>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Promise"
              title="Four things we will not compromise on"
              body="These are not marketing lines. They are the constraints we build the business around, and the reason we cap how much we make each day."
              className="!mx-0"
            />

            <RevealGroup className="mt-10 flex flex-col gap-4">
              {promises.map((p) => (
                <RevealItem key={p.title}>
                  <article className="group flex gap-4 rounded-2xl border hairline p-5 transition-all duration-500 hover:border-leaf-500/40 hover:bg-forest-500/[0.04]">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-forest-500 to-leaf-500 text-white">
                      <Icon name={p.icon} className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold">{p.title}</h3>
                      <p className="text-soft mt-1.5 text-sm leading-relaxed">{p.body}</p>
                    </div>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </Section>
  )
}
