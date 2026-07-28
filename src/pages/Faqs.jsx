import { MessageCircle, Phone } from 'lucide-react'
import Seo, { breadcrumbSchema, faqSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Accordion from '../components/ui/Accordion'
import { faqs } from '../data/content'
import { site, telLink, whatsappLink } from '../data/site'

const trail = [
  { label: 'Home', to: '/' },
  { label: 'FAQs', to: '/faqs' },
]

const dealerFaqs = [
  {
    q: 'What margin do dealers get?',
    a: 'Margins are healthy for a chilled daily-repeat category, with slab-based incentives that improve as monthly volume grows. Exact numbers depend on your tier and district, so we discuss them on the call rather than publish a single figure that would be wrong for most applicants.',
  },
  {
    q: 'Do you provide a display fridge?',
    a: 'For qualifying outlets, yes — branded display fridges are provided on a deposit-and-usage basis once you have a consistent order history. Newer partners typically start using their own chiller and upgrade later.',
  },
  {
    q: 'What happens to stock I do not sell?',
    a: 'Same-day unsold stock comes back with our van at no cost to you. This is deliberate: it removes your risk, and it stops old batter reaching a customer with our name on the pack.',
  },
  {
    q: 'Which districts are open for distribution?',
    a: `We currently run routes in ${site.serviceAreas.join(', ')}, and we are actively looking for distributors in adjacent districts. If you are just outside our current map, apply anyway — expansion follows demand, and a serious partner in a new district is usually how a route starts.`,
  },
  {
    q: 'Do I need a GST registration?',
    a: 'For distributor-level partnerships, yes. For small retail stores buying at counter level, we can work with your existing setup. Bring it up on the onboarding call and we will tell you exactly what applies to you.',
  },
]

const orderFaqs = [
  {
    q: 'Can I get the batter delivered to my home?',
    a: `We deliver directly in parts of our service area and reach everywhere else through partner stores. WhatsApp us your pin code and we will either add you to a route or tell you the nearest store that stocks us.`,
  },
  {
    q: 'What are the pack sizes and how much does it make?',
    a: 'Packs are 500 g, 1 kg and 2 kg depending on the variety. As a rough guide, 1 kg of idly batter makes about 25–30 idlies, or roughly 12–15 dosas. Most families of four buy 1 kg every two to three days.',
  },
  {
    q: 'Do you take bulk or catering orders?',
    a: 'Yes. Hotels, caterers, offices and hostels are a meaningful part of what we do. We quote fixed monthly rates and schedule early-morning drops so the batter arrives before your kitchen starts. Message us with your daily quantity for a quote.',
  },
  {
    q: 'Is there a minimum order for home delivery?',
    a: 'On our own routes the practical minimum is one 1 kg pack, though most customers order two or three at a time to cut down on delivery days. There is no minimum at a partner store.',
  },
]

export default function Faqs() {
  return (
    <>
      <Seo
        title="Frequently Asked Questions"
        description="Answers about AG Fresh Foods batter freshness, preservatives, storage, delivery areas, pack sizes, bulk orders and dealer terms."
        keywords="idly batter FAQ, dosa batter questions, batter shelf life, batter delivery areas, dealer minimum quantity"
        schema={[breadcrumbSchema(trail), faqSchema([...faqs, ...orderFaqs, ...dealerFaqs])]}
      />

      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        subtitle="Freshness, storage, delivery and dealerships. If your question is not here, ask it — a person answers our WhatsApp."
        trail={trail}
      >
        <Button href={whatsappLink('Hi AG Fresh Foods, I have a question.')} variant="whatsapp">
          <MessageCircle className="size-4" /> Ask on WhatsApp
        </Button>
        <Button href={telLink} variant="outline">
          <Phone className="size-4" /> {site.phone}
        </Button>
      </PageHero>

      <Section>
        <div className="shell max-w-4xl">
          <SectionHeading align="left" eyebrow="Product & freshness" title="About the batter" className="!mx-0" />
          <Reveal delay={0.08} className="mt-10">
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </Section>

      <Section alt>
        <div className="shell max-w-4xl">
          <SectionHeading align="left" eyebrow="Ordering & delivery" title="Getting it to you" className="!mx-0" />
          <Reveal delay={0.08} className="mt-10">
            <Accordion items={orderFaqs} defaultOpen={-1} />
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="shell max-w-4xl">
          <SectionHeading
            align="left"
            eyebrow="Dealers & distributors"
            title="For business partners"
            className="!mx-0"
          />
          <Reveal delay={0.08} className="mt-10">
            <Accordion items={dealerFaqs} defaultOpen={-1} />
          </Reveal>

          <Reveal delay={0.12} className="surface-alt mt-14 rounded-3xl border hairline p-8 text-center sm:p-12">
            <h2 className="text-2xl sm:text-3xl">Still not answered?</h2>
            <p className="text-soft mx-auto mt-4 max-w-xl text-[15px] leading-relaxed">
              Send the question over. If we get it more than twice, it ends up on this page — and
              sometimes becomes a whole article.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={whatsappLink('Hi AG Fresh Foods, I have a question.')} variant="whatsapp">
                <MessageCircle className="size-4" /> WhatsApp us
              </Button>
              <Button to="/contact" variant="outline">
                Send an enquiry
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
