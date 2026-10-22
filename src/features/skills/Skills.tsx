import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Tag } from '@/components/ui/Tag'
import { skillGroups } from '@/data/experience'

export function Skills() {
  return (
    <section id="skills" tabIndex={-1} aria-labelledby="skills-title" className="section">
      <div className="container-page">
        <SectionHeader id="skills-title" eyebrow="Toolkit" title="Skills" />

        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={(i % 3) * 60}>
              <dt className="text-sm font-medium text-foreground">{group.label}</dt>
              <dd className="mt-3 flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
