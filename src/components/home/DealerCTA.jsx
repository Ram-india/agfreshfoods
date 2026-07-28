import { ArrowRight } from 'lucide-react'
import Reveal, { RevealGroup, RevealItem } from '../ui/Reveal'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import { dealerBenefits } from '../../data/content'
import { whatsappLink } from '../../data/site'

export default function DealerCTA() {
  return (
    <section id="dealers" className="relative isolate overflow-hidden py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-forest-600 via-forest-500 to-leaf-600"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_60%_at_88%_10%,rgb(255_193_7_/_0.3),transparent_58%),radial-gradient(ellipse_60%_50%_at_5%_95%,rgb(0_0_0_/_0.22),transparent_60%)]"
      />

      <div className="shell relative text-white">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow border-white/25 bg-white/10 !text-turmeric-300">Dealer Opportunity</span>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl">Become Our Distributor</h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
              Fresh batter is a daily-repeat purchase with predictable demand and quick stock turnover.
              We are expanding across Tamil Nadu and looking for retail and distribution partners who
              care about the cold chain as much as we do.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dealerBenefits.map((b) => (
            <RevealItem key={b.title}>
              <article className="h-full rounded-3xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/[0.14]">
                <span className="grid size-11 place-items-center rounded-2xl bg-turmeric-500 text-forest-900">
                  <Icon name={b.icon} className="size-[21px]" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold">{b.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/70">{b.body}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15} className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Button to="/dealers" variant="accent" size="lg">
            Apply Now <ArrowRight className="size-4" />
          </Button>
          <Button
            href={whatsappLink('Hi AG Fresh Foods, I am interested in a dealership. Please share the details.')}
            variant="light"
            size="lg"
          >
            Talk on WhatsApp
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
