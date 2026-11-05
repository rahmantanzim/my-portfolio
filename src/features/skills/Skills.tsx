import { BrutalHeader } from '@/components/ui/BrutalHeader'
import { skillGroups } from '@/data/experience'
import { cn } from '@/lib/utils'

/**
 * Asymmetric spans on a 6-column grid so the catalog doesn't read as a uniform
 * 3×2 grid. Keys match the labels in src/data/experience.ts.
 */
const layout: Record<string, string> = {
  Languages: 'lg:col-span-4',
  Frontend: 'lg:col-span-2 lg:bg-ink lg:text-paper lg:hover:bg-lime lg:hover:text-ink',
  Backend: 'lg:col-span-2',
  Databases: 'lg:col-span-4',
  Testing: 'lg:col-span-3',
  Tools: 'lg:col-span-3',
}

/**
 * Technical catalog: each category is a flat, hard-bordered block. Hovering a
 * block turns it cyber lime instantly; hovering a tool inverts it and shifts it right.
 */
export function Skills() {
  const total = skillGroups.reduce((n, g) => n + g.skills.length, 0)

  return (
    <section id="skills" tabIndex={-1} aria-labelledby="skills-title" className="brut-panel section">
      <div className="container-page">
        <BrutalHeader
          id="skills-title"
          label={`Catalog / ${total} items`}
          title="Skills &amp;"
          highlight="tools"
          aside="Grouped by where I use them. TypeScript, React and Python are what I reach for now; PHP and WordPress come from four years of agency work."
        />

        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className={cn(
                'brut-cell group flex flex-col p-5 shadow-[4px_4px_0_#000] hover:text-ink sm:p-6',
                layout[group.label],
              )}
            >
              <dt className="flex items-start justify-between gap-4 border-b-2 border-current pb-3">
                <span className="text-xl font-extrabold tracking-tight uppercase">{group.label}</span>
                <span className="border-2 border-current px-1.5 font-mono text-xs font-bold">
                  {String(group.skills.length).padStart(2, '0')}
                </span>
              </dt>
              <dd className="mt-4">
                <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm font-semibold uppercase">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className="brut-tool px-1">{skill}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
