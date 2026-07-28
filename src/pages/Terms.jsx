import Seo, { breadcrumbSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Prose from '../components/ui/Prose'
import { site } from '../data/site'

const trail = [
  { label: 'Home', to: '/' },
  { label: 'Terms & Conditions', to: '/terms-conditions' },
]

const UPDATED = '28 July 2026'

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description={`The terms that apply when you order from ${site.name}, including product freshness, storage responsibility, delivery, replacements and dealer arrangements.`}
        schema={breadcrumbSchema(trail)}
      />

      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle={`The terms that apply when you buy from us or use this website. Last updated ${UPDATED}.`}
        trail={trail}
      />

      <Section>
        <div className="shell max-w-3xl">
          <Prose>
            <p>
              These terms apply to purchases from <strong>{site.legalName}</strong> and to your use of this
              website. Placing an order means you accept them.
            </p>

            <h2>1. Our products</h2>
            <p>
              We sell freshly ground, naturally fermented idly and dosa batter containing{' '}
              <strong>no preservatives</strong>. This has direct consequences you should understand before
              buying:
            </p>
            <ul>
              <li>
                Shelf life is <strong>three to four days</strong> from the printed packed-on date, and only
                when the batter is kept continuously refrigerated at approximately 4°C.
              </li>
              <li>
                The batter is a living ferment. Mild sourness, slight rising in the pack and a little
                separated liquid are normal and expected.
              </li>
              <li>
                Texture, colour and taste vary slightly between batches because the grains and the ambient
                conditions vary. This is a characteristic of the product, not a defect.
              </li>
            </ul>

            <h2>2. Storage is a shared responsibility</h2>
            <p>
              We control the cold chain up to the point of handover — sealing, cold storage, refrigerated
              transport and the store chiller. Once a pack is in your hands, keeping it refrigerated is
              your responsibility.
            </p>
            <p>
              We cannot replace batter that has spoiled because it was left out of refrigeration, kept in a
              fridge door, frozen, or used after the printed date. Please read our{' '}
              <a href="/storage-instructions">storage instructions</a> — they exist for exactly this
              reason.
            </p>

            <h2>3. Orders and availability</h2>
            <ul>
              <li>
                Orders placed through WhatsApp, phone or this website are <strong>requests</strong>, and
                are confirmed by us before they are binding.
              </li>
              <li>
                We produce to a daily cap and do not carry stock over. In periods of high demand we may be
                unable to fulfil an order, and will tell you rather than substitute a variety.
              </li>
              <li>
                Products marked <strong>Coming Soon</strong> are not yet available for sale. Registering
                interest does not create an order.
              </li>
              <li>Prices are as quoted at the time of confirmation and may change without notice.</li>
            </ul>

            <h2>4. Delivery</h2>
            <ul>
              <li>
                We deliver on our own refrigerated routes within our published service areas, and through
                partner stores elsewhere.
              </li>
              <li>
                Delivery timings are estimates. We aim to reach stores before opening hours, but traffic,
                weather and vehicle issues can cause delays.
              </li>
              <li>
                Someone must be available to receive and refrigerate the batter. If a delivery cannot be
                handed over, we cannot leave a perishable product unattended and cannot replace it free of
                charge.
              </li>
            </ul>

            <h2>5. Replacements and refunds</h2>
            <p>We will replace a pack, or refund it, where:</p>
            <ul>
              <li>The pack was damaged, leaking or unsealed on arrival</li>
              <li>The batter was spoiled at handover, or the cold chain failed before it reached you</li>
              <li>The wrong variety or pack size was supplied</li>
            </ul>
            <p>
              Please report the issue <strong>within 24 hours</strong> and quote the batch code printed on
              the pack, so we can trace the production run. Photographs help. Given the nature of the
              product, we cannot accept returns of packs that are simply unwanted.
            </p>

            <h2>6. Health, allergens and dietary claims</h2>
            <ul>
              <li>
                Our products contain <strong>pulses (urad dal)</strong> and <strong>fenugreek</strong>. Our
                Wheat Dosa Batter contains <strong>gluten</strong>.
              </li>
              <li>
                All varieties are made on shared equipment. We cannot guarantee an allergen-free or
                certified gluten-free facility.
              </li>
              <li>
                Nutritional values on this website are indicative, drawn from standard composition tables,
                and vary naturally between batches.
              </li>
              <li>
                Nothing on this website is medical or dietary advice. If you are managing diabetes, an
                allergy or any other condition, consult a qualified professional.
              </li>
            </ul>

            <h2>7. Dealers and distributors</h2>
            <p>
              Dealer and distributor relationships are governed by a separate written agreement covering
              territory, pricing, margins, minimum quantities and return terms. Nothing on this website
              constitutes an offer of dealership, and submitting an application does not create one.
              Marketing support and display equipment are provided at our discretion and remain our
              property unless the agreement states otherwise.
            </p>

            <h2>8. Website use and intellectual property</h2>
            <p>
              The content of this website — text, illustrations, layout, logo and brand name — belongs to{' '}
              {site.legalName}. You may not reproduce it commercially without written permission. You agree
              not to misuse the site, attempt to gain unauthorised access, or submit false enquiries.
            </p>

            <h2>9. Limitation of liability</h2>
            <p>
              To the extent permitted by law, our liability for any claim relating to a purchase is limited
              to the value of the product supplied. We are not liable for indirect or consequential losses.
              Nothing in these terms limits liability that cannot be limited under Indian consumer law.
            </p>

            <h2>10. Governing law</h2>
            <p>
              These terms are governed by the laws of India. Disputes are subject to the exclusive
              jurisdiction of the courts at {site.address.city}, {site.address.state}.
            </p>

            <h2>11. Contact</h2>
            <p>
              {site.legalName}
              <br />
              {site.address.line1}, {site.address.line2}
              <br />
              {site.address.city}, {site.address.state} {site.address.postalCode}
              <br />
              Email: <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              Phone: <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>
            </p>

            <blockquote>
              <p>
                These terms are a starting template and are not legal advice. Have them reviewed by a
                lawyer against your actual operations, FSSAI obligations and consumer-law duties before
                publishing.
              </p>
            </blockquote>
          </Prose>
        </div>
      </Section>
    </>
  )
}
