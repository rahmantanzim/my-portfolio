import { SectionHeader } from '@/components/ui/SectionHeader'

/**
 * FUTURE SCOPE — hidden until `site.sections.testimonials` is set to true.
 * Only add real quotes from real people, with their permission.
 */
export interface Testimonial {
  quote: string
  name: string
  title: string
}

const testimonials: Testimonial[] = []

export function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <section id="testimonials" tabIndex={-1} aria-labelledby="testimonials-title" className="section">
      <div className="container-page">
        <SectionHeader id="testimonials-title" eyebrow="Kind words" title="What people say" />
        <ul className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <li key={t.name} className="rounded-2xl border border-border bg-card p-6">
              <blockquote className="text-pretty">“{t.quote}”</blockquote>
              <p className="mt-4 text-sm font-medium">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
