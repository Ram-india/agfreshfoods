import { MessageCircle, Phone } from 'lucide-react'
import Seo, { breadcrumbSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import ContactForm from '../components/forms/ContactForm'
import { ContactDetails, MapEmbed } from '../components/home/ContactSection'
import { site, telLink, whatsappLink } from '../data/site'

const trail = [
  { label: 'Home', to: '/' },
  { label: 'Contact Us', to: '/contact' },
]

const quickCards = [
  {
    title: 'Place an order',
    body: 'Tell us your area and we will point you to the nearest stocking store, or arrange delivery where we run routes.',
    action: { label: 'Order on WhatsApp', href: whatsappLink() },
  },
  {
    title: 'Become a dealer',
    body: 'Store owners and distributors get a dedicated line and a call back within 24 working hours.',
    action: { label: 'Dealer enquiry', to: '/dealers' },
  },
  {
    title: 'Bulk & catering',
    body: 'Hotels, caterers and offices — we quote fixed monthly rates and schedule early-morning drops.',
    action: { label: 'Request a quote', href: whatsappLink('Hi AG Fresh Foods, I need a bulk/catering quote.') },
  },
]

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description={`Contact AG Fresh Foods in ${site.address.city} — call ${site.phone}, message us on WhatsApp, or send an enquiry. Orders, store locations, bulk supply and dealer applications.`}
        keywords="contact AG Fresh Foods, idly batter near me, batter delivery Coimbatore, dealer enquiry batter"
        schema={breadcrumbSchema(trail)}
      />

      <PageHero
        eyebrow="Contact"
        title="Talk to us before breakfast tomorrow"
        subtitle="We answer our own phone. Whichever way you reach us, a person replies — usually within the hour during working times."
        trail={trail}
      >
        <Button href={whatsappLink()} variant="whatsapp">
          <MessageCircle className="size-4" /> WhatsApp us
        </Button>
        <Button href={telLink} variant="outline">
          <Phone className="size-4" /> {site.phone}
        </Button>
      </PageHero>

      {/* quick routes */}
      <Section size="sm">
        <div className="shell">
          <RevealGroup className="grid gap-5 lg:grid-cols-3">
            {quickCards.map((c) => (
              <RevealItem key={c.title}>
                <article className="surface-card card-hover flex h-full flex-col rounded-3xl border hairline p-7">
                  <h2 className="font-heading text-lg font-bold">{c.title}</h2>
                  <p className="text-soft mt-2.5 flex-1 text-sm leading-relaxed">{c.body}</p>
                  <Button
                    {...(c.action.to ? { to: c.action.to } : { href: c.action.href })}
                    variant="outline"
                    size="sm"
                    className="mt-6"
                  >
                    {c.action.label}
                  </Button>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* details + form */}
      <Section alt>
        <div className="shell">
          <SectionHeading
            eyebrow="Get in touch"
            title="Send us a message"
            body="Fill this in and it reaches us as a WhatsApp message, so nothing gets lost in an inbox."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.25fr]">
            <ContactDetails />
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* map */}
      <Section size="sm">
        <div className="shell">
          <SectionHeading
            eyebrow="Find us"
            title="The production unit"
            body="Dealers and bulk buyers are welcome to visit. Call ahead so someone is free to walk you through the grinding hall and cold rooms."
          />
          <Reveal delay={0.1} className="mt-12">
            <MapEmbed className="h-[440px]" />
          </Reveal>
        </div>
      </Section>
    </>
  )
}
