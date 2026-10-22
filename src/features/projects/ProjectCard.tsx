import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { TagList } from '@/components/ui/Tag'
import type { Project } from '@/types/content'
import { ProjectImage } from './ProjectImage'
import { ProjectLinks } from './ProjectLinks'

/**
 * Card for featured projects. The whole card is clickable (via a stretched
 * link on the title) when the project has a case-study page; otherwise the
 * title links straight to the live site or code.
 */
export function ProjectCard({ project }: { project: Project }) {
  const hasPage = Boolean(project.caseStudy)
  const fallbackHref = project.links.live ?? project.links.github

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-primary/40">
      <div className="overflow-hidden border-b border-border">
        <ProjectImage
          project={project}
          className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        {project.context && <p className="font-mono text-xs text-muted-foreground">{project.context}</p>}

        <div className="mt-2 flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight">
            {hasPage ? (
              <Link to={`/projects/${project.slug}`} className="stretched-link transition-colors group-hover:text-primary">
                {project.title}
              </Link>
            ) : fallbackHref ? (
              <a
                href={fallbackHref}
                target="_blank"
                rel="noopener noreferrer"
                className="stretched-link transition-colors group-hover:text-primary"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          <ProjectLinks project={project} className="-mt-1.5 -mr-2 shrink-0" />
        </div>

        <p className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground">{project.summary}</p>

        <TagList tags={project.tags} className="mt-5" />

        {hasPage && (
          <p className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-primary">
            Read case study
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </p>
        )}
      </div>
    </article>
  )
}
