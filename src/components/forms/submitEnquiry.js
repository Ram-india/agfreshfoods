import { whatsappLink } from '../../data/site'

/**
 * Enquiry handoff.
 *
 * No backend ships with this site, so submissions are handed to WhatsApp with a
 * prefilled message — the channel this business already runs on. Set
 * `VITE_FORM_ENDPOINT` in `.env` to POST to your own API or a form service
 * (Formspree, Web3Forms, a Node/Express route) instead.
 */
export async function submitEnquiry({ subject, fields }) {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT

  const lines = [
    `*${subject}*`,
    '',
    ...Object.entries(fields)
      .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== '')
      .map(([k, v]) => `${k}: ${v}`),
  ]
  const message = lines.join('\n')

  if (endpoint) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subject, ...fields }),
    })
    if (!res.ok) throw new Error(`Submission failed (${res.status})`)
    return { channel: 'api' }
  }

  window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  return { channel: 'whatsapp' }
}
