import { Reveal } from '@/components/ui/Reveal'
import { site } from '@/config/site'
import { ContactForm } from './ContactForm'

export function Contact() {
  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-title" className="section">
      <Reveal className="content-column max-w-[37.5rem] text-center">
        <p className="font-mono text-sm text-primary">04. What’s next?</p>
        <h2 id="contact-title" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Get in touch
        </h2>
        <p className="mx-auto mt-6 max-w-lg leading-relaxed text-pretty text-muted-foreground">
          I’m looking for a full-time developer role, in St. John’s, remote, or somewhere I can relocate to. If you’re
          hiring or just want to talk about a project, my inbox is open and I usually reply within a day.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <a href={`mailto:${site.email}`} className="btn-outline">
            Say hello
          </a>
          <a
            href={site.phone.href}
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {site.phone.display}
          </a>
        </div>

        <details className="group mt-16 text-left">
          <summary className="mx-auto w-fit cursor-pointer list-none font-mono text-[0.8125rem] text-muted-foreground transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
            <span className="mr-1 inline-block text-primary transition-transform group-open:rotate-90">▹</span>
            Or send a message from here
          </summary>
          <div className="mt-8 rounded bg-surface p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)] sm:p-8">
            <ContactForm />
          </div>
        </details>
      </Reveal>
    </section>
  )
}
