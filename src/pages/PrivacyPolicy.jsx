import Seo, { breadcrumbSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Prose from '../components/ui/Prose'
import { site } from '../data/site'

const trail = [
  { label: 'Home', to: '/' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

const UPDATED = '28 July 2026'

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description={`How ${site.name} collects, uses and protects the personal information you share through this website, WhatsApp and our enquiry forms.`}
        schema={breadcrumbSchema(trail)}
      />

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`How we handle the information you share with us. Last updated ${UPDATED}.`}
        trail={trail}
      />

      <Section>
        <div className="shell max-w-3xl">
          <Prose>
            <p>
              <strong>{site.legalName}</strong> ("we", "us") operates this website. This policy explains
              what personal information we collect, why we collect it, and what we do with it. We have
              tried to write it in plain language rather than legal boilerplate.
            </p>

            <h2>1. Information we collect</h2>
            <p>We collect only what we need to respond to you and run deliveries:</p>
            <ul>
              <li>
                <strong>Contact and dealer enquiry forms:</strong> your name, mobile number, email
                address (optional), city, business name and business details where relevant, and the
                content of your message.
              </li>
              <li>
                <strong>WhatsApp and phone:</strong> when you message or call us, we see your phone
                number and the conversation. WhatsApp messages are also processed by WhatsApp under their
                own privacy terms.
              </li>
              <li>
                <strong>Delivery information:</strong> for direct-route customers, the delivery address
                and preferred timing.
              </li>
              <li>
                <strong>Basic technical data:</strong> our hosting provider records standard server logs
                such as IP address, browser type and pages visited, for security and performance.
              </li>
            </ul>
            <p>
              We do <strong>not</strong> collect payment card details through this website. Payments
              happen in person, through your store, or via UPI arranged directly with us.
            </p>

            <h2>2. How we use it</h2>
            <ul>
              <li>To reply to your enquiry and, where you asked, to place or route an order</li>
              <li>To assess and process dealer and distributor applications</li>
              <li>To plan delivery routes and confirm dispatch</li>
              <li>To trace a batch if you report a problem with a pack</li>
              <li>To keep basic records required for tax and business compliance</li>
            </ul>
            <p>
              We do not use your information to build advertising profiles, and we do not send marketing
              messages unless you have asked us to.
            </p>

            <h2>3. Who we share it with</h2>
            <p>
              We do not sell your personal information. We share it only where it is necessary to operate:
            </p>
            <ul>
              <li>Our own delivery staff, so they can reach you</li>
              <li>The partner store nearest you, if you asked us to point you to one</li>
              <li>WhatsApp and our website host, as service providers processing data on our behalf</li>
              <li>Government authorities where we are legally required to disclose</li>
            </ul>

            <h2>4. Cookies and analytics</h2>
            <p>
              This website stores one small item in your browser: your light or dark theme preference. It
              is kept in local storage on your own device, is not a tracking cookie and is never sent to
              us.
            </p>
            <p>
              Pages that embed a Google Map load content from Google, which may set its own cookies under
              Google's privacy policy. If we add analytics in future, we will update this section before
              doing so.
            </p>

            <h2>5. How long we keep it</h2>
            <ul>
              <li><strong>General enquiries:</strong> up to 12 months after our last exchange</li>
              <li><strong>Dealer applications:</strong> up to 24 months, so we can revisit them when a route opens</li>
              <li><strong>Active customer records:</strong> for as long as you are a customer, plus the period tax law requires</li>
              <li><strong>Server logs:</strong> as retained by our host, typically a few weeks</li>
            </ul>

            <h2>6. Your rights</h2>
            <p>You can ask us at any time to:</p>
            <ul>
              <li>Tell you what information we hold about you</li>
              <li>Correct anything that is wrong</li>
              <li>Delete your information, where we are not required to keep it</li>
              <li>Stop contacting you</li>
            </ul>
            <p>
              Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{' '}
              <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>. We will respond within 30 days. There is
              no charge.
            </p>

            <h2>7. Security</h2>
            <p>
              This site is served over HTTPS. Enquiry details reach us through WhatsApp's encrypted
              messaging or our email. Access to customer records is limited to the people who need it to
              do their job. No system is perfectly secure, and we will tell affected customers promptly if
              a breach ever puts their information at risk.
            </p>

            <h2>8. Children</h2>
            <p>
              This website is intended for adults making household or business purchasing decisions. We do
              not knowingly collect information from children under 18. If you believe a child has sent us
              personal information, contact us and we will delete it.
            </p>

            <h2>9. Changes to this policy</h2>
            <p>
              If we change how we handle personal information, we will update this page and revise the
              date at the top. Material changes will be flagged on the website.
            </p>

            <h2>10. Contact</h2>
            <p>
              {site.legalName}
              <br />
              {site.address.line1}, {site.address.line2}
              <br />
              {site.address.city}, {site.address.state} {site.address.postalCode}, {site.address.country}
              <br />
              Email: <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              Phone: <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>
            </p>

            <blockquote>
              <p>
                This policy is provided as a starting point and is not legal advice. Please have it
                reviewed against your obligations under India's Digital Personal Data Protection Act, 2023
                before publishing.
              </p>
              <p>
                This policy is provided as a starting point and is not legal advice. Please have it
                reviewed against your obligations under India's Digital Personal Data Protection Act, 2023
                before publishing.
              </p>
            </blockquote>
          </Prose>
        </div>
      </Section>
    </>
  )
}
