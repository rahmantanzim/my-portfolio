import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '@/types/content'
import { categoryLabel } from './useProjectFilters'

/** Screenshot inside a minimal OS window; a terminal panel when there's no image yet. */
function ProjectWindow({ project }: { project: Project }) {
  const file = project.image ? project.image.src.split('/').pop() : `${project.slug}.sh`

  return (
    <figure className="brut-window">
      <figcaption className="brut-window-bar">
        <i aria-hidden />
        <i aria-hidden />
        <i aria-hidden />
        <span className="ml-2 truncate">{file}</span>
      </figcaption>
      {project.image ? (
        <img
          src={project.image.src}
          alt={project.image.alt}
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full bg-paper object-cover object-top"
        />
      ) : (
        <div className="flex aspect-[16/10] flex-col justify-end gap-1 bg-ink p-5 font-mono text-sm text-lime">
          <p>
            <span className="text-paper/60">$</span> cat {project.slug}/stack
          </p>
          <p className="text-paper">{project.tags.join('  ').toLowerCase()}</p>
          <p>
            <span className="text-paper/60">$</span> <span className="animate-pulse">▍</span>
          </p>
        </div>
      )}
    </figure>
  )
}

/** One project as a rigid block: details on the left, framed screenshot on the right. */
export function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const hasPage = Boolean(project.caseStudy)
  const links = [
    hasPage && { href: `/projects/${project.slug}`, label: 'Case study', internal: true },
    project.links.live && { href: project.links.live, label: 'Live', internal: false },
    project.links.github && { href: project.links.github, label: 'Code', internal: false },
  ].filter(Boolean) as { href: string; label: string; internal: boolean }[]

  return (
    <article className="brut-box grid lg:grid-cols-12">
      {/* Details */}
      <div className="flex flex-col border-ink p-6 sm:p-8 lg:col-span-6 lg:border-r-2">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink pb-4 font-mono text-xs font-bold uppercase">
          <span>{project.context ?? categoryLabel(project.category)}</span>
          <span aria-hidden className="bg-ink px-1.5 py-0.5 text-lime">
            #{String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="mt-6 text-3xl leading-none font-extrabold tracking-tight uppercase sm:text-4xl">{project.title}</h3>
        <p className="mt-5 max-w-[56ch] leading-relaxed text-ink-soft">{project.summary}</p>

        <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Built with">
          {project.tags.map((tag) => (
            <li key={tag} className="brut-tag">
              {tag}
            </li>
          ))}
        </ul>

        {links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            {links.map((l, i) =>
              l.internal ? (
                <Link key={l.label} to={l.href} className="brut-button brut-focus">
                  {l.label}
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title}: ${l.label}`}
                  className={`brut-button brut-focus ${i > 0 || hasPage ? 'is-quiet' : ''}`}
                >
                  {l.label}
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              ),
            )}
          </div>
        )}
      </div>

      {/* Screenshot */}
      <div className="border-t-2 border-ink bg-concrete p-6 sm:p-8 lg:col-span-6 lg:border-t-0">
        <ProjectWindow project={project} />
      </div>
    </article>
  )
}
