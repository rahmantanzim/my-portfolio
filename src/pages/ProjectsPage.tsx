import { useQuery } from '@tanstack/react-query'
import { site } from '@/config/site'
import { ProjectFilters } from '@/features/projects/ProjectFilters'
import { useProjectFilters } from '@/features/projects/useProjectFilters'
import { projectsQuery } from '@/services/content'
import { Link } from 'react-router-dom'

export default function ProjectsPage() {
  const { data: projects = [], isPending, isError } = useQuery(projectsQuery)
  const { category, activeTech, techOptions, filtered, setCategory, setTech, reset } = useProjectFilters(projects)

  return (
    <div className="sheet pt-8 pb-24 md:pt-14">
      <title>{`Projects — ${site.name}`}</title>

      <h1 className="display text-[clamp(3.5rem,12vw,8rem)]">Everything</h1>
      <p className="mt-6 max-w-[56ch] text-lg text-pretty text-muted-foreground">
        Every project, from agency client sites to university research. The ones with a case study have a full write-up.
      </p>

      <div className="mt-12">
        <ProjectFilters
          category={category}
          onCategoryChange={setCategory}
          techOptions={techOptions}
          activeTech={activeTech}
          onTechChange={setTech}
        />
      </div>

      <p className="tabular mt-10 text-[0.9375rem] text-muted-foreground" aria-live="polite">
        {isPending ? 'Loading projects…' : `${filtered.length} ${filtered.length === 1 ? 'project' : 'projects'}`}
      </p>

      {isError && <p className="mt-6 text-muted-foreground">Projects couldn’t be loaded right now.</p>}

      {!isPending && !isError && filtered.length === 0 && (
        <p className="mt-6">
          Nothing matches those filters.{' '}
          <button type="button" onClick={reset} className="ink-link cursor-pointer">
            Clear them
          </button>
          .
        </p>
      )}

      {filtered.length > 0 && (
        <ul className="mt-3 border-t border-foreground">
          {filtered.map((p) => {
            const links = [
              p.caseStudy && { href: `/projects/${p.slug}`, label: 'Case study', internal: true },
              p.links.live && { href: p.links.live, label: 'Live', internal: false },
              p.links.github && { href: p.links.github, label: 'Code', internal: false },
            ].filter(Boolean) as { href: string; label: string; internal: boolean }[]

            return (
              <li
                key={p.slug}
                className="grid gap-x-8 gap-y-2 border-b border-border py-6 md:grid-cols-[15rem_minmax(0,1fr)_9rem]"
              >
                <div>
                  <h2 className="semi-condensed text-xl leading-tight font-bold">{p.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{p.context}</p>
                </div>
                <div>
                  <p className="text-pretty text-muted-foreground">{p.summary}</p>
                  <p className="mt-2 text-sm text-foreground/80">{p.tags.join(', ')}</p>
                </div>
                <ul className="flex flex-wrap gap-x-4 gap-y-1 text-[0.9375rem] font-medium md:flex-col md:items-end">
                  {links.map((l) => (
                    <li key={l.label}>
                      {l.internal ? (
                        <Link to={l.href} className="ink-link">
                          {l.label}
                        </Link>
                      ) : (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.title}: ${l.label}`}
                          className="ink-link"
                        >
                          {l.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
