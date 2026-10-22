import { Link } from 'react-router-dom'
import type { Project } from '@/types/content'
import { ProjectLinks } from './ProjectLinks'
import { categoryLabel } from './useProjectFilters'

/** Compact row for the /projects archive. */
export function ProjectListItem({ project }: { project: Project }) {
  const hasPage = Boolean(project.caseStudy)

  return (
    <article className="group relative py-6">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-lg font-medium tracking-tight">
            {hasPage ? (
              <Link to={`/projects/${project.slug}`} className="stretched-link transition-colors group-hover:text-primary">
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </h2>
          <p className="mt-0.5 font-mono text-xs text-muted-foreground">
            {project.context ?? categoryLabel(project.category)}
            {hasPage && <span className="text-primary"> · Case study</span>}
          </p>
        </div>
        <ProjectLinks project={project} className="-mr-2 shrink-0" />
      </div>

      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-pretty text-muted-foreground">{project.summary}</p>

      <p className="mt-3 font-mono text-xs text-muted-foreground/80">{project.tags.join('  ·  ')}</p>
    </article>
  )
}
