import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '@/types/content'
import { ProjectImage } from './ProjectImage'
import { categoryLabel } from './useProjectFilters'

interface ProjectRowProps {
  project: Project
  /** Show the screenshot that opens on hover. Off for the compact archive list. */
  withMedia?: boolean
}

/**
 * One project in the editorial index: context and links on the left, title and
 * description in the middle, stack as micro-labels on the right. No card, no
 * radius; rows are separated by a hairline that thickens to teal on hover.
 */
export function ProjectRow({ project, withMedia = true }: ProjectRowProps) {
  const hasPage = Boolean(project.caseStudy)
  const primaryHref = hasPage ? `/projects/${project.slug}` : (project.links.live ?? project.links.github)
  const external = !hasPage && Boolean(primaryHref)
  const links = [
    project.links.github && { href: project.links.github, label: 'Code' },
    project.links.live && { href: project.links.live, label: 'Live' },
  ].filter(Boolean) as { href: string; label: string }[]

  const title = primaryHref ? (
    external ? (
      <a href={primaryHref} target="_blank" rel="noopener noreferrer" className="stretched-link">
        <span className="editorial-title inline-block">{project.title}</span>
      </a>
    ) : (
      <Link to={primaryHref} className="stretched-link">
        <span className="editorial-title inline-block">{project.title}</span>
      </Link>
    )
  ) : (
    <span className="editorial-title inline-block">{project.title}</span>
  )

  return (
    <article className="editorial-row group grid gap-x-10 gap-y-5 py-8 lg:grid-cols-12 lg:py-10">
      {/* Left column: context and outbound links */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 lg:col-span-3 lg:flex-col lg:justify-start">
        <p className="font-mono text-xs text-muted-foreground">{project.context ?? categoryLabel(project.category)}</p>
        {links.length > 0 && (
          <ul className="relative z-10 flex gap-4 font-mono text-xs">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title}: ${l.label}`}
                  className="text-foreground/80 underline decoration-rule underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Middle column: title, description, case-study cue */}
      <div className="lg:col-span-6 lg:border-x lg:border-rule lg:px-10">
        <h3 className="text-2xl leading-tight font-semibold tracking-tight text-balance md:text-[2rem]">
          {title}
        </h3>
        <p className="mt-4 max-w-[58ch] leading-relaxed text-pretty text-muted-foreground">{project.summary}</p>
        {hasPage && (
          <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            Read case study
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </p>
        )}

        {withMedia && (
          <div className="media-reveal">
            <div>
              <ProjectImage
                project={project}
                className="mt-7 aspect-[16/9] w-full border border-rule object-cover object-top"
              />
            </div>
          </div>
        )}
      </div>

      {/* Right column: stack as micro-labels */}
      <div className="lg:col-span-3">
        <p className="sr-only">Built with</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-muted-foreground lg:flex-col">
          {project.tags.map((tag) => (
            <li key={tag} className="transition-colors group-hover:text-foreground/90">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
