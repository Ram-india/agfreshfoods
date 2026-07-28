import { Clock, ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Section, { SectionHeading } from '../ui/Section'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import ContactForm from '../forms/ContactForm'
import { mailLink, site, telLink, whatsappLink } from '../../data/site'

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-5">
      <div className="surface-card rounded-3xl border hairline p-6">
        <ul className="flex flex-col gap-5">
          <li className="flex gap-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-forest-500/12 text-forest-600 dark:text-leaf-300">
              <MapPin className="size-[18px]" />
            </span>
            <div>
              <p className="font-heading text-sm font-bold">Visit the unit</p>
              <p className="text-soft mt-1 text-sm leading-relaxed">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city}, {site.address.state} {site.address.postalCode}
              </p>
              <a
                href={site.mapLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-forest-600 hover:underline dark:text-leaf-300"
              >
                Open in Google Maps <ExternalLink className="size-3" />
              </a>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-forest-500/12 text-forest-600 dark:text-leaf-300">
              <Phone className="size-[18px]" />
            </span>
            <div>
              <p className="font-heading text-sm font-bold">Call or WhatsApp</p>
              <a href={telLink} className="text-soft mt-1 block text-sm hover:text-forest-600 dark:hover:text-leaf-300">
                {site.phone}
              </a>
              <a href={mailLink} className="text-soft mt-0.5 flex items-center gap-1.5 text-sm hover:text-forest-600 dark:hover:text-leaf-300">
                <Mail className="size-3.5" /> {site.email}
              </a>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-forest-500/12 text-forest-600 dark:text-leaf-300">
              <Clock className="size-[18px]" />
            </span>
            <div>
              <p className="font-heading text-sm font-bold">Business hours</p>
              <dl className="mt-1.5 flex flex-col gap-1">
                {site.hours.map((h) => (
                  <div key={h.day} className="text-soft flex flex-wrap gap-x-2 text-[13px]">
                    <dt className="font-semibold">{h.day}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </li>
        </ul>

        <div className="mt-6 flex flex-col gap-2.5 border-t pt-6 sm:flex-row">
          <Button href={whatsappLink()} variant="whatsapp" size="sm" className="flex-1">
            <MessageCircle className="size-4" /> WhatsApp
          </Button>
          <Button href={telLink} variant="outline" size="sm" className="flex-1">
            <Phone className="size-4" /> Call now
          </Button>
        </div>
      </div>

      {/* dealer nudge */}
      <div className="rounded-3xl border border-turmeric-500/35 bg-turmeric-500/[0.08] p-6">
        <p className="font-heading text-sm font-bold">Dealer enquiry?</p>
        <p className="text-soft mt-1.5 text-sm leading-relaxed">
          Store owners and distributors get a dedicated line and a call back within 24 working hours.
        </p>
        <Button to="/dealers" variant="accent" size="sm" className="mt-4">
          Apply for dealership
        </Button>
      </div>
    </div>
  )
}

export function MapEmbed({ className = 'h-[380px]' }) {
  return (
    <div className={`overflow-hidden rounded-3xl border hairline shadow-soft ${className}`}>
      <iframe
        title={`Map showing ${site.name} in ${site.address.city}`}
        src={site.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="size-full border-0 grayscale-[0.15] transition-[filter] duration-500 hover:grayscale-0"
      />
    </div>
  )
}

export default function ContactSection() {
  return (
    <Section id="contact">
      <div className="shell">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to us before breakfast tomorrow"
          body="Orders, store locations, bulk supply or a dealership — pick whichever way is easiest for you."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.25fr]">
          <ContactDetails />
          <div className="flex flex-col gap-6">
            <ContactForm />
          </div>
        </div>

        <Reveal delay={0.1} className="mt-6">
          <MapEmbed />
        </Reveal>
      </div>
    </Section>
  )
}
