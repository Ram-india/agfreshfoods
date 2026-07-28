import { ArrowRight, MessageCircle } from 'lucide-react'
import Section, { SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'
import Accordion from '../ui/Accordion'
import Button from '../ui/Button'
import { faqs } from '../../data/content'
import { whatsappLink } from '../../data/site'

export default function FaqSection() {
  return (
    <Section id="faq">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Questions we get every week"
              body="Straight answers about freshness, storage and delivery. Anything missing? Message us — a real person replies."
              className="!mx-0"
            />
            <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
              <Button href={whatsappLink('Hi AG Fresh Foods, I have a question about your batter.')} variant="whatsapp">
                <MessageCircle className="size-4" /> Ask on WhatsApp
              </Button>
              <Button to="/faqs" variant="ghost">
                All FAQs <ArrowRight className="size-4" />
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Accordion items={faqs.slice(0, 5)} />
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
