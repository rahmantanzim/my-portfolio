import { ExternalLink, Folder } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import type { Project } from '@/types/content'

/** Small project card: folder icon, links, title, summary, stack. The whole card links out. */
function OtherProjectCard({ project }: { project: Project }) {
  const href = project.links.live ?? project.links.github

  return (
    <article className="group relative flex h-full flex-col rounded bg-surface px-7 py-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:-translate-y-1.5 focus-within:-translate-y-1.5">
      <header className="flex items-center justify-between">
        <Folder className="size-9 text-primary" strokeWidth={1.25} aria-hidden />
        <div className="relative z-10 flex items-center gap-3 text-muted-foreground">
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
        </div>
      </header>

      <h4 className="mt-7 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="stretched-link">
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h4>
      <p className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground">{project.summary}</p>

      <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-6 font-mono text-xs text-muted-foreground" aria-label="Built with">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  )
}

export function OtherProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null

  return (
    <div className="mt-28 md:mt-36">
      <h3 className="text-center text-2xl font-semibold tracking-tight md:text-[2rem]">Other projects</h3>
      <p className="mt-3 text-center">
        <Link
          to="/projects"
          className="font-mono text-[0.8125rem] text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
        >
          See the full archive
        </Link>
      </p>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.slug}>
            <OtherProjectCard project={p} />
          </li>
        ))}
      </ul>
    </div>
  )
}
