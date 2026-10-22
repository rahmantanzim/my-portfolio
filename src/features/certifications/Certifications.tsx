import { ExternalLink } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

/**
 * FUTURE SCOPE — hidden until `site.sections.certifications` is set to true.
 */
interface Certification {
  title: string
  issuer: string
  year: number
  credentialUrl?: string
}

const certifications: Certification[] = [
  {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta · Coursera',
    year: 2023,
    credentialUrl: 'https://www.credly.com/badges/c8117936-9cda-4e26-b1db-5e1e53ac8e7d/linked_in_profile',
  },
  { title: 'Foundations of User Experience Design', issuer: 'Google · Coursera', year: 2022 },
  { title: 'Professional Skill Development Program', issuer: 'Career Development, Memorial University', year: 2026 },
]

export function Certifications() {
  return (
    <section id="certifications" tabIndex={-1} aria-labelledby="certifications-title" className="section">
      <div className="container-page">
        <SectionHeader id="certifications-title" eyebrow="Learning" title="Certifications" />
        <ul className="grid gap-4 md:grid-cols-3">
          {certifications.map((c) => (
            <li key={c.title} className="flex flex-col rounded-2xl border border-border bg-card p-5">
              <p className="font-mono text-xs text-muted-foreground">{c.year}</p>
              <p className="mt-2 font-medium text-pretty">{c.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              {c.credentialUrl && (
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm text-primary hover:underline"
                >
                  Verify credential
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
