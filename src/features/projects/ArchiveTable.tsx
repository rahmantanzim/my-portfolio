import { ExternalLink } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import type { Project } from '@/types/content'
import { categoryLabel } from './useProjectFilters'

/** Every project in one table: title, where it was made, stack, links. */
export function ArchiveTable({ projects }: { projects: Project[] }) {
  return (
    <table className="w-full border-collapse text-left">
      <thead>
        <tr className="font-mono text-[0.8125rem] text-foreground">
          <th scope="col" className="py-3 pr-5 font-semibold">
            Title
          </th>
          <th scope="col" className="hidden py-3 pr-5 font-semibold md:table-cell">
            Made for
          </th>
          <th scope="col" className="hidden py-3 pr-5 font-semibold lg:table-cell">
            Built with
          </th>
          <th scope="col" className="py-3 font-semibold">
            <span className="sr-only">Links</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {projects.map((p) => (
          <tr key={p.slug} className="border-t border-border transition-colors hover:bg-surface/60">
            <td className="py-4 pr-5 align-top">
              {p.caseStudy ? (
                <Link to={`/projects/${p.slug}`} className="font-semibold text-foreground hover:text-primary">
                  {p.title}
                </Link>
              ) : (
                <span className="font-semibold text-foreground">{p.title}</span>
              )}
              <p className="mt-1 max-w-md text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
            </td>
            <td className="hidden py-4 pr-5 align-top text-sm text-muted-foreground md:table-cell">
              {p.context ?? categoryLabel(p.category)}
            </td>
            <td className="hidden py-4 pr-5 align-top lg:table-cell">
              <ul className="flex max-w-xs flex-wrap gap-x-2 gap-y-1 font-mono text-xs text-muted-foreground">
                {p.tags.map((t, i) => (
                  <li key={t}>
                    {t}
                    {i < p.tags.length - 1 && <span className="ml-2 text-primary/60">·</span>}
                  </li>
                ))}
              </ul>
            </td>
            <td className="py-4 align-top">
              <div className="flex items-center justify-end gap-3 text-muted-foreground">
                {p.links.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title}: code on GitHub`}
                    className="hover:text-primary"
                  >
                    <FiGithub className="size-[1.125rem]" aria-hidden />
                  </a>
                )}
                {p.links.live && (
                  <a
                    href={p.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title}: live site`}
                    className="hover:text-primary"
                  >
                    <ExternalLink className="size-[1.125rem]" aria-hidden />
                  </a>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
