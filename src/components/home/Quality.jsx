import Section, { SectionHeading } from '../ui/Section'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import Icon from '../ui/Icon'
import { qualityPoints } from '../../data/content'

export default function Quality() {
  return (
    <Section id="quality" alt size="sm">
      <div className="shell">
        <SectionHeading
          eyebrow="Quality Assurance"
          title="Food safety is a process, not a certificate on the wall"
          body="Everything below is checked and logged daily. We are happy to walk any dealer through the unit."
        />

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {qualityPoints.map((q, i) => (
            <RevealItem key={q.title}>
              <article className="surface-card card-hover relative h-full overflow-hidden rounded-3xl border hairline p-6">
                <span
                  aria-hidden="true"
                  className="absolute -right-3 -top-4 font-heading text-6xl font-extrabold text-forest-500/[0.07]"
                >
                  0{i + 1}
                </span>
                <span className="relative grid size-12 place-items-center rounded-2xl bg-turmeric-500/15 text-turmeric-600 dark:text-turmeric-400">
                  <Icon name={q.icon} className="size-[22px]" />
                </span>
                <h3 className="relative mt-5 font-heading text-base font-bold">{q.title}</h3>
                <p className="text-soft relative mt-2.5 text-[13px] leading-relaxed">{q.body}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  )
}
