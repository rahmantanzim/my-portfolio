import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Tag } from '@/components/ui/Tag'
import { skillGroups } from '@/data/experience'

export function Skills() {
  return (
    <section id="skills" tabIndex={-1} aria-labelledby="skills-title" className="section">
      <div aria-hidden className="ambient bottom-0 -left-40" />
      <div className="container-page">
        <SectionHeader id="skills-title" eyebrow="Toolkit" title="Skills &amp;" accent="tools" />

        <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={(i % 3) * 80} className="glass card-hover rounded-2xl p-6">
              <dt className="text-sm font-semibold text-primary">{group.label}</dt>
              <dd className="mt-4 flex flex-wrap gap-2">
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
