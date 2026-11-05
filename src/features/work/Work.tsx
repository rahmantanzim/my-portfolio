import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { MarginSection } from '@/components/ui/MarginSection'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectImage } from '@/features/projects/ProjectImage'
import { cn } from '@/lib/utils'
import { projectsQuery } from '@/services/content'
import type { Project } from '@/types/content'

const MAX_FEATURED = 4
/** Jellybean Row house colours, one per featured project. */
const swatches = ['bg-harbour', 'bg-mustard', 'bg-moss', 'bg-berry']

function FeaturedEntry({ project, swatch }: { project: Project; swatch: string }) {
  const page = project.caseStudy ? `/projects/${project.slug}` : null
  const links = [
    page && { href: page, label: 'Case study', internal: true },
    project.links.live && { href: project.links.live, label: 'Live site', internal: false },
    project.links.github && { href: project.links.github, label: 'Code', internal: false },
  ].filter(Boolean) as { href: string; label: string; internal: boolean }[]

  return (
    <article className="group grid gap-6 sm:grid-cols-[minmax(0,1fr)_13rem] sm:gap-8">
      <div>
        <p className="flex items-center gap-2.5 text-sm text-muted-foreground">
          <span aria-hidden className={cn('size-3 shrink-0', swatch)} />
          {project.context}
        </p>
        <h3 className="semi-condensed mt-3 text-[1.75rem] leading-tight font-bold tracking-tight md:text-[2rem]">
          {page ? (
            <Link to={page} className="decoration-primary decoration-2 underline-offset-[0.15em] hover:underline">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-3 max-w-[56ch] text-pretty text-muted-foreground">{project.summary}</p>
        <p className="mt-4 text-sm text-foreground/80">{project.tags.join(', ')}</p>
        {links.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-[0.9375rem] font-medium">
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
                    aria-label={`${project.title}: ${l.label}`}
                    className="ink-link"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Small framed screenshot; links to the case study */}
      {project.image &&
        (page ? (
          <Link to={page} tabIndex={-1} aria-hidden className="block self-start">
            <ProjectImage
              project={project}
              className="aspect-[4/3] w-full border border-foreground object-cover object-top grayscale-[35%] transition-[filter] duration-300 group-hover:grayscale-0"
            />
          </Link>
        ) : (
          <ProjectImage project={project} className="aspect-[4/3] w-full self-start border border-foreground object-cover" />
        ))}
    </article>
  )
}

export function Work() {
  const { data: projects = [], isError } = useQuery(projectsQuery)
  const featured = projects.filter((p) => p.featured).slice(0, MAX_FEATURED)
  const others = projects.filter((p) => !featured.includes(p))

  return (
    <MarginSection id="work" label="Work">
      {isError ? (
        <p className="text-muted-foreground">Projects couldn’t be loaded right now. Please try again later.</p>
      ) : (
        <>
          <ul className="divide-y divide-border">
            {featured.map((p, i) => (
              <Reveal as="li" key={p.slug} className="py-10 first:pt-0 last:pb-0">
                <FeaturedEntry project={p} swatch={swatches[i % swatches.length]} />
              </Reveal>
            ))}
          </ul>

          {others.length > 0 && (
            <Reveal className="mt-16">
              <h3 className="font-semibold">Smaller things</h3>
              <ul className="mt-4 border-t border-border">
                {others.map((p) => {
                  const href = p.links.live ?? p.links.github
                  return (
                    <li
                      key={p.slug}
                      className="grid gap-x-6 gap-y-1 border-b border-border py-3.5 sm:grid-cols-[13rem_minmax(0,1fr)]"
                    >
                      <span className="font-medium">
                        {href ? (
                          <a href={href} target="_blank" rel="noopener noreferrer" className="ink-link">
                            {p.title}
                          </a>
                        ) : (
                          p.title
                        )}
                      </span>
                      <span className="text-[0.9375rem] text-muted-foreground">{p.summary}</span>
                    </li>
                  )
                })}
              </ul>
              <p className="mt-5 text-[0.9375rem]">
                <Link to="/projects" className="ink-link">
                  All {projects.length} projects, with filters
                </Link>
              </p>
            </Reveal>
          )}
        </>
      )}
    </MarginSection>
  )
}
