import Counter from '../ui/Counter'
import { RevealGroup, RevealItem } from '../ui/Reveal'
import { stats } from '../../data/content'

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-forest-600 py-14 text-white lg:py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_15%_0%,rgb(255_255_255_/_0.14),transparent_60%),radial-gradient(ellipse_45%_50%_at_88%_100%,rgb(255_193_7_/_0.2),transparent_60%)]"
      />

      <div className="shell relative">
        <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <RevealItem key={stat.label} className="text-center">
              <p className="font-heading text-4xl font-extrabold tabular-nums sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-white/70">
                {stat.label}
              </p>
              <span
                aria-hidden="true"
                className="mx-auto mt-3 block h-0.5 w-10 rounded-full bg-turmeric-400"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
