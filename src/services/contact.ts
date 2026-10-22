import { API_URL, apiRequest } from './api'

export interface ContactMessage {
  name: string
  email: string
  message: string
}

/**
 * Sends a contact message.
 * - With VITE_API_URL set: POST /contact on the backend (where spam checks belong).
 * - Otherwise: EmailJS, loaded on demand so it isn't in the main bundle.
 */
export async function sendContactMessage(input: ContactMessage): Promise<void> {
  if (API_URL) {
    await apiRequest('/contact', { method: 'POST', body: JSON.stringify(input) })
    return
  }

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS is not configured. Check the VITE_EMAILJS_* environment variables.')
  }

  const { default: emailjs } = await import('@emailjs/browser')
  await emailjs.send(serviceId, templateId, { ...input }, { publicKey })
}
