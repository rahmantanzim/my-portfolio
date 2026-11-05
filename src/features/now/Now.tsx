import { MarginSection } from '@/components/ui/MarginSection'
import { site } from '@/config/site'

export function Now() {
  return (
    <MarginSection id="now" label="Now">
      <div className="max-w-[60ch] space-y-4 text-pretty">
        <p className="text-xl leading-relaxed">
          Finishing a Master’s in Software Engineering at Memorial University, done in April 2027. I’m looking for a
          full-time developer role, here in St. John’s, remote, or somewhere I can move to.
        </p>
        <p className="text-muted-foreground">
          Canadian Permanent Resident. Before the Master’s I spent four years at a small agency in Dhaka, usually as
          the only developer on a project.{' '}
          <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer" className="ink-link text-foreground">
            Read the résumé
          </a>
          .
        </p>
      </div>
    </MarginSection>
  )
}
