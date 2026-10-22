import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { site } from '@/config/site'
import { cn } from '@/lib/utils'
import { MESSAGE_MAX, useContactForm } from './useContactForm'

const inputClass =
  'w-full rounded-xl border bg-surface/70 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 ' +
  'transition-colors outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/30'

export function ContactForm() {
  const { values, errors, status, onChange, onSubmit, honeypot, setHoneypot } = useContactForm()
  const sending = status === 'sending'

  const fieldClass = (hasError: boolean) => cn(inputClass, hasError ? 'border-danger' : 'border-border')

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5" aria-describedby="form-status">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={onChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={fieldClass(Boolean(errors.name))}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-sm text-danger">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={values.email}
          onChange={onChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={fieldClass(Boolean(errors.email))}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-sm text-danger">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={MESSAGE_MAX}
          value={values.message}
          onChange={onChange}
          placeholder="A role, a project, or just hello."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(fieldClass(Boolean(errors.message)), 'resize-y')}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-danger">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={sending}>
        {sending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            Send message
            <Send className="size-4" aria-hidden />
          </>
        )}
      </Button>

      <div id="form-status" role="status" aria-live="polite">
        {status === 'success' && (
          <p className="flex items-start gap-3 rounded-xl border border-success/30 bg-success/10 p-4 text-sm text-success">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden />
            Thanks — your message is on its way. I’ll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="flex items-start gap-3 rounded-xl border border-danger/30 bg-danger/10 p-4 text-sm text-danger">
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
            <span>
              Sorry, the message couldn’t be sent. Please try again, or email me directly at{' '}
              <a href={`mailto:${site.email}`} className="underline underline-offset-2">
                {site.email}
              </a>
              .
            </span>
          </p>
        )}
      </div>
    </form>
  )
}
