import { MarginSection } from '@/components/ui/MarginSection'
import { Reveal } from '@/components/ui/Reveal'
import { site } from '@/config/site'
import { ContactForm } from './ContactForm'

export function Contact() {
  return (
    <MarginSection id="contact" label="Contact">
      <Reveal>
        <p className="max-w-[44ch] text-xl leading-relaxed text-pretty">
          Hiring, or want to talk about a project? Email is best. I usually reply within a day.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="display mt-8 inline-block text-[clamp(2.75rem,9vw,5.5rem)] decoration-primary decoration-[0.06em] underline-offset-[0.12em] hover:text-primary hover:underline"
        >
          {site.email}
        </a>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]">
          <li>
            <a href={site.phone.href} className="ink-link">
              {site.phone.display}
            </a>
          </li>
          {site.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="ink-link">
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <details className="group mt-14 max-w-xl">
          <summary className="w-fit cursor-pointer list-none font-medium [&::-webkit-details-marker]:hidden">
            <span className="ink-link">Or write to me from here</span>
            <span aria-hidden className="ml-2 inline-block text-primary transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="mt-6">
            <ContactForm />
          </div>
        </details>
      </Reveal>
    </MarginSection>
  )
}
