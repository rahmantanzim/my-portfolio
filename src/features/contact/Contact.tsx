import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { site } from '@/config/site'
import { ContactForm } from './ContactForm'

const details = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: 'Phone', value: site.phone.display, href: site.phone.href },
  { icon: MapPin, label: 'Location', value: site.location, href: null },
]

export function Contact() {
  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-title" className="section">
      <div className="container-page">
        <SectionHeader
          id="contact-title"
          eyebrow="Contact"
          title="Let’s talk"
          description="Hiring for an internship or a full-time role, or have a project in mind? I usually reply within a day."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_24rem] lg:gap-12">
          <Reveal className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <ContactForm />
          </Reveal>

          <Reveal delay={80} className="space-y-6">
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <p className="font-medium text-foreground">{site.availability.headline}</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                {site.availability.details.map((d) => (
                  <li key={d} className="flex gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="space-y-1">
              {details.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface text-primary">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs text-muted-foreground">{label}</span>
                      <span className="block font-medium">{value}</span>
                    </span>
                  </>
                )
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} className="flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-surface">
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-2">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            <SocialLinks className="-ml-1" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
