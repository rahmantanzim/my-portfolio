import { MarginSection } from '@/components/ui/MarginSection'
import { Reveal } from '@/components/ui/Reveal'
import { skillGroups } from '@/data/experience'

/** Skills as a plain definition list: what kind, then the tools, in running text. */
export function Stack() {
  return (
    <MarginSection id="stack" label="Stack">
      <Reveal>
        <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.label}>
              <dt className="semi-condensed text-lg font-bold">{g.label}</dt>
              <dd className="mt-1 text-pretty text-muted-foreground">{g.skills.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </MarginSection>
  )
}
