import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import { footerNav, mailLink, site, telLink } from '../../data/site'

const Social = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-leaf-400/60 hover:bg-white/10 hover:text-white"
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_0%,rgb(76_175_80_/_0.2),transparent_60%),radial-gradient(ellipse_50%_50%_at_92%_100%,rgb(255_193_7_/_0.12),transparent_60%)]"
      />

      <div className="shell relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr]">
          {/* brand column */}
          <div>
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">{site.description}</p>

            <ul className="mt-7 flex flex-col gap-3.5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-leaf-400" />
                <span className="text-white/70">
                  {site.address.line1}, {site.address.line2}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.postalCode}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-leaf-400" />
                <a href={telLink} className="text-white/70 transition-colors hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-leaf-400" />
                <a href={mailLink} className="text-white/70 transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-leaf-400" />
                <span className="text-white/70">{site.hours[0].day} · {site.hours[0].time}</span>
              </li>
            </ul>

            <div className="mt-7 flex gap-2.5">
              <Social href={site.social.instagram} label="AG Fresh Foods on Instagram">
                <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </Social>
              <Social href={site.social.facebook} label="AG Fresh Foods on Facebook">
                <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor">
                  <path d="M14 9h3V5.5h-3c-2.5 0-4 1.6-4 4V12H7.5v3.5H10V22h3.5v-6.5H16l.5-3.5H13.5v-1.7c0-.8.3-1.3 1-1.3Z" />
                </svg>
              </Social>
              <Social href={site.social.youtube} label="AG Fresh Foods on YouTube">
                <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor">
                  <path d="M21.3 7.6c-.2-1-1-1.8-2-2C17.5 5.2 12 5.2 12 5.2s-5.5 0-7.3.4c-1 .2-1.8 1-2 2C2.3 9.4 2.3 12 2.3 12s0 2.6.4 4.4c.2 1 1 1.8 2 2 1.8.4 7.3.4 7.3.4s5.5 0 7.3-.4c1-.2 1.8-1 2-2 .4-1.8.4-4.4.4-4.4s0-2.6-.4-4.4ZM10 15.3V8.7l5.5 3.3-5.5 3.3Z" />
                </svg>
              </Social>
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h3 className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-turmeric-400">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-[13.5px] leading-snug text-white/65 transition-colors hover:text-white hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* service areas */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
            Delivering fresh across
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {site.serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link to="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="transition-colors hover:text-white">
              Terms & Conditions
            </Link>
            <Link to="/faqs" className="transition-colors hover:text-white">
              FAQs
            </Link>
          </div>
        </div>
      </div>

      {/* keeps the last row clear of the mobile sticky bar */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </footer>
  )
}
