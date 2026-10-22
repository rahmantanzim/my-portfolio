import { useState, type ChangeEvent, type FormEvent } from 'react'
import { sendContactMessage, type ContactMessage } from '@/services/contact'

type Field = keyof ContactMessage
type Errors = Partial<Record<Field, string>>
export type ContactStatus = 'idle' | 'sending' | 'success' | 'error'

const EMPTY: ContactMessage = { name: '', email: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const MESSAGE_MAX = 2000

function validate(values: ContactMessage): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  const message = values.message.trim()
  if (message.length < 10) errors.message = 'Please add a little more detail (at least 10 characters).'
  else if (message.length > MESSAGE_MAX) errors.message = `Please keep it under ${MESSAGE_MAX} characters.`
  return errors
}

/**
 * Contact form state. Spam and gibberish filtering belong on the backend
 * (POST /contact); this only does basic client-side validation plus a
 * honeypot field that real users never see.
 */
export function useContactForm() {
  const [values, setValues] = useState<ContactMessage>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<ContactStatus>('idle')
  const [honeypot, setHoneypot] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name as Field
    setValues((v) => ({ ...v, [field]: e.target.value }))
    // Clear a field's error as soon as the user edits it.
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
    if (status === 'success' || status === 'error') setStatus('idle')
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const found = validate(values)
    setErrors(found)
    const firstInvalid = (Object.keys(found) as Field[])[0]
    if (firstInvalid) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    // Bots fill hidden fields; pretend it worked and drop the message.
    if (honeypot) {
      setStatus('success')
      setValues(EMPTY)
      return
    }

    setStatus('sending')
    try {
      await sendContactMessage({
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      })
      setStatus('success')
      setValues(EMPTY)
    } catch (err) {
      if (import.meta.env.DEV) console.error(err)
      // Keep what the user typed so they can retry or copy it.
      setStatus('error')
    }
  }

  return { values, errors, status, onChange, onSubmit, honeypot, setHoneypot }
}
