import { useQuery } from '@tanstack/react-query'
import { NumberedHeading } from '@/components/ui/NumberedHeading'
import { Reveal } from '@/components/ui/Reveal'
import { projectsQuery } from '@/services/content'
import { FeaturedProject } from './FeaturedProject'
import { OtherProjects } from './OtherProjects'

const MAX_FEATURED = 4

export function FeaturedProjects() {
  const { data: projects = [], isError } = useQuery(projectsQuery)
  const featured = projects.filter((p) => p.featured).slice(0, MAX_FEATURED)
  const others = projects.filter((p) => !featured.includes(p))

  return (
    <section id="projects" tabIndex={-1} aria-labelledby="projects-title" className="section">
      <div className="content-column">
        <Reveal>
          <NumberedHeading id="projects-title" number="03">
            Some things I’ve built
          </NumberedHeading>
        </Reveal>

        {isError ? (
          <p className="text-muted-foreground">Projects couldn’t be loaded right now. Please try again later.</p>
        ) : (
          <>
            <ul className="space-y-24 md:space-y-32">
              {featured.map((project, i) => (
                <Reveal as="li" key={project.slug}>
                  <FeaturedProject project={project} flip={i % 2 === 1} />
                </Reveal>
              ))}
            </ul>
            <Reveal>
              <OtherProjects projects={others} />
            </Reveal>
          </>
        )}
      </div>
    </section>
  )
}
