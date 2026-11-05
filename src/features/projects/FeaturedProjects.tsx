import { ArrowRight } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { projectsQuery } from '@/services/content'
import { ProjectRow } from './ProjectRow'

const MAX_FEATURED = 4

export function FeaturedProjects() {
  const { data: projects = [], isError } = useQuery(projectsQuery)
  const featured = projects.filter((p) => p.featured).slice(0, MAX_FEATURED)

  return (
    <section id="projects" tabIndex={-1} aria-labelledby="projects-title" className="section">
      <div aria-hidden className="ambient top-1/4 -right-40" />
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <SectionHeader
            id="projects-title"
            eyebrow="Featured work"
            title="Projects that"
            accent="make an impact"
            className="mb-10 md:mb-12"
          />
          <p className="mb-10 max-w-sm text-sm leading-relaxed text-muted-foreground md:mb-12">
            Full-stack apps, university research and client work.
          </p>
        </div>

        {/* Column headings for the index, desktop only */}
        <div
          aria-hidden
          className="hidden grid-cols-12 gap-x-10 pb-3 font-mono text-[0.6875rem] text-muted-foreground/70 lg:grid"
        >
          <span className="col-span-3">Context</span>
          <span className="col-span-6 px-10">Project</span>
          <span className="col-span-3">Stack</span>
        </div>

        {isError ? (
          <p className="border-t border-rule pt-8 text-muted-foreground">
            Projects couldn’t be loaded right now. Please try again later.
          </p>
        ) : (
          <ul className="border-b border-rule">
            {featured.map((project) => (
              <Reveal as="li" key={project.slug}>
                <ProjectRow project={project} />
              </Reveal>
            ))}
          </ul>
        )}

        <div className="mt-8 flex justify-end">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 border-b border-rule pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            All {projects.length} projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
