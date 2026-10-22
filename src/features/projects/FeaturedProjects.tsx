import { ArrowRight } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { projectsQuery } from '@/services/content'
import { ProjectCard } from './ProjectCard'

const MAX_FEATURED = 4

export function FeaturedProjects() {
  const { data: projects = [], isError } = useQuery(projectsQuery)
  const featured = projects.filter((p) => p.featured).slice(0, MAX_FEATURED)

  return (
    <section id="projects" tabIndex={-1} aria-labelledby="projects-title" className="section">
      <div aria-hidden className="ambient top-1/4 -right-40" />
      <div className="container-page">
        <SectionHeader
          id="projects-title"
          eyebrow="Featured work"
          title="Projects that"
          accent="make an impact"
          description="Full-stack apps, university research projects and client work."
        />

        {isError ? (
          <p className="text-muted-foreground">Projects couldn’t be loaded right now. Please try again later.</p>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2">
            {featured.map((project, i) => (
              <Reveal as="li" key={project.slug} delay={(i % 2) * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </ul>
        )}

        <div className="mt-10 flex justify-center">
          <Button href="/projects" variant="animated" size="lg">
            See all {projects.length} projects
            <ArrowRight className="size-4" aria-hidden />
          </Button>
        </div>
      </div>
    </section>
  )
}
