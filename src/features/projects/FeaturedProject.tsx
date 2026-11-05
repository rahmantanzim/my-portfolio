import { ExternalLink } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import type { Project } from '@/types/content'
import { ProjectImage } from './ProjectImage'

interface FeaturedProjectProps {
  project: Project
  /** Alternate sides: image left / text right, then the reverse. */
  flip: boolean
}

/**
 * Large featured project: tinted screenshot on one side, with the description
 * panel overlapping it from the other. On phones the screenshot sits behind the
 * text as a dimmed background.
 */
export function FeaturedProject({ project, flip }: FeaturedProjectProps) {
  const href = project.caseStudy ? `/projects/${project.slug}` : (project.links.live ?? project.links.github)
  const internal = Boolean(project.caseStudy)

  const title = !href ? (
    project.title
  ) : internal ? (
    <Link to={href} className="transition-colors hover:text-primary">
      {project.title}
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
      {project.title}
    </a>
  )

  return (
    <article className="relative grid grid-cols-12 items-center">
      {/* Text column */}
      <div
        className={cn(
          'relative z-10 col-span-12 col-start-1 row-start-1 px-6 py-10 sm:px-10 md:col-span-7 md:p-0',
          flip ? 'md:col-start-1 md:text-left' : 'md:col-start-6 md:text-right',
        )}
      >
        <p className="font-mono text-[0.8125rem] text-primary">Featured project</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-[1.75rem]">
          {title}
        </h3>
        {project.context && <p className="mt-1 text-sm text-muted-foreground">{project.context}</p>}

        <div className="mt-5 text-pretty text-foreground/85 md:rounded md:bg-surface md:p-6 md:leading-relaxed md:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]">
          <p>{project.summary}</p>
        </div>

        <ul
          className={cn(
            'mt-5 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[0.8125rem] text-muted-foreground md:max-w-[72%]',
            !flip && 'md:ml-auto md:justify-end',
          )}
          aria-label="Built with"
        >
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className={cn('mt-4 flex items-center gap-4 text-foreground', !flip && 'md:justify-end')}>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title}: code on GitHub`}
              className="p-1 transition-colors hover:text-primary"
            >
              <FiGithub className="size-5" aria-hidden />
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title}: live site`}
              className="p-1 transition-colors hover:text-primary"
            >
              <ExternalLink className="size-5" aria-hidden />
            </a>
          )}
          {project.caseStudy && (
            <Link
              to={`/projects/${project.slug}`}
              className="font-mono text-[0.8125rem] text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
            >
              Case study
            </Link>
          )}
        </div>
      </div>

      {/* Image column */}
      <div
        className={cn(
          'col-span-12 col-start-1 row-start-1 h-full md:col-span-7 md:h-auto',
          flip ? 'md:col-start-6' : 'md:col-start-1',
        )}
      >
        <div className="tint-frame h-full opacity-[0.12] md:opacity-100">
          {href && internal ? (
            <Link to={href} tabIndex={-1} aria-hidden className="block h-full">
              <ProjectImage project={project} className="aspect-[16/10] h-full w-full object-cover object-top" />
            </Link>
          ) : (
            <ProjectImage project={project} className="aspect-[16/10] h-full w-full object-cover object-top" />
          )}
        </div>
      </div>
    </article>
  )
}
