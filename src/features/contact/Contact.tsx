import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
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
      <div aria-hidden className="ambient top-1/2 left-1/4" />
      <div className="container-page">
        <SectionHeader
          id="contact-title"
          eyebrow="Get in touch"
          title="Let’s build"
          accent="something great."
          description="Hiring for a full-time role, or have a project in mind? I usually reply within a day."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_24rem] lg:gap-12">
          <Reveal className="glass rounded-3xl border-primary/30 p-6 md:p-8">
            <ContactForm />
          </Reveal>

          <Reveal delay={80} className="space-y-6">
            <div className="glass rounded-3xl border-primary/30 p-6">
              <p className="flex items-center gap-3 font-medium text-foreground">
                <span className="relative flex size-2.5 shrink-0" aria-hidden>
                  <span className="pulse-dot absolute inline-flex size-full rounded-full bg-success" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-success" />
                </span>
                Currently available
              </p>
              <p className="mt-3 text-sm text-foreground/90">{site.availability.headline}</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                {site.availability.details.map((d) => (
                  <li key={d} className="flex gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="glass space-y-1 rounded-3xl p-3">
              {details.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
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
                      <a href={href} className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-surface">
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-3">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>

          </Reveal>
        </div>
      </div>
    </section>
  )
}
