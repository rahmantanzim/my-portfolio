import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { skillGroups } from '@/data/experience'

/**
 * Editorial skills table: heading in a narrow left column (sticky on desktop),
 * categories in a 3×2 text grid on the right, separated by 1px rules.
 * Skills are plain text with a small square marker — no pills or boxes.
 */
export function Skills() {
  const total = skillGroups.reduce((n, g) => n + g.skills.length, 0)

  return (
    <section id="skills" tabIndex={-1} aria-labelledby="skills-title" className="section">
      <div aria-hidden className="ambient bottom-0 -left-40" />
      <div className="container-page grid gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeader id="skills-title" eyebrow="Toolkit" title="Skills &amp;" accent="tools" className="mb-6 md:mb-6" />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {total} tools, grouped by where I use them. TypeScript, React and Python are what I reach for now; PHP and
              WordPress come from four years of agency work.
            </p>
          </div>
        </div>

        <Reveal className="lg:col-span-8">
          <dl className="rule-grid grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label} className="py-6 pr-3 even:pl-4 sm:py-7 sm:pr-7 sm:pl-7 sm:even:pl-7">
                <dt className="flex items-baseline justify-between gap-4 border-b border-rule pb-3">
                  <span className="text-base font-semibold tracking-tight sm:text-lg">{group.label}</span>
                  <span className="font-mono text-xs text-muted-foreground" aria-label={`${group.skills.length} skills`}>
                    {String(group.skills.length).padStart(2, '0')}
                  </span>
                </dt>
                <dd>
                  <ul className="square-list mt-4 space-y-2 text-[0.9375rem] text-foreground/85">
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
