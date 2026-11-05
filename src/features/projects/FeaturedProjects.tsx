import { ArrowRight } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { BrutalHeader } from '@/components/ui/BrutalHeader'
import { projectsQuery } from '@/services/content'
import { ProjectBlock } from './ProjectBlock'

const MAX_FEATURED = 4

export function FeaturedProjects() {
  const { data: projects = [], isError } = useQuery(projectsQuery)
  const featured = projects.filter((p) => p.featured).slice(0, MAX_FEATURED)

  return (
    <section id="projects" tabIndex={-1} aria-labelledby="projects-title" className="brut-panel section">
      <div className="container-page">
        <BrutalHeader
          id="projects-title"
          label="Index / Work"
          title="Projects that"
          highlight="make an impact"
          aside="Full-stack apps, university research and client work. Each one links to a write-up and the code."
        />

        {isError ? (
          <p className="brut-box p-6 font-mono">Projects couldn’t be loaded right now. Please try again later.</p>
        ) : (
          <ul className="space-y-8">
            {featured.map((project, i) => (
              <li key={project.slug}>
                <ProjectBlock project={project} index={i} />
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 flex justify-end">
          <Link to="/projects" className="brut-button brut-focus">
            All {projects.length} projects
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
