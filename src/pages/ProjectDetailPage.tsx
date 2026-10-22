import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { TagList } from '@/components/ui/Tag'
import { site } from '@/config/site'
import { ProjectImage } from '@/features/projects/ProjectImage'
import { ProjectLinks } from '@/features/projects/ProjectLinks'
import { projectQuery, projectsQuery } from '@/services/content'
import NotFoundPage from './NotFoundPage'

export default function ProjectDetailPage() {
  const { slug = '' } = useParams()
  const { data: project, isPending, isError } = useQuery(projectQuery(slug))
  const { data: allProjects = [] } = useQuery(projectsQuery)

  if (isPending) return <div className="min-h-dvh" aria-busy="true" />
  if (isError)
    return (
      <div className="container-page pt-32 pb-24">
        <p className="text-muted-foreground">This project couldn’t be loaded right now.</p>
      </div>
    )
  if (!project) return <NotFoundPage />

  const cs = project.caseStudy
  // "Next case study" link, cycling through projects that have one.
  const withPages = allProjects.filter((p) => p.caseStudy)
  const idx = withPages.findIndex((p) => p.slug === project.slug)
  const next = withPages.length > 1 ? withPages[(idx + 1) % withPages.length] : null

  return (
    <article className="container-page max-w-3xl pt-28 pb-24 md:pt-32">
      <title>{`${project.title} — ${site.name}`}</title>
      <meta name="description" content={project.summary} />

      <Link
        to="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden />
        All projects
      </Link>

      <header className="mt-6">
        {project.context && <p className="font-mono text-sm text-muted-foreground">{project.context}</p>}
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-balance md:text-4xl">{project.title}</h1>
        <p className="mt-4 text-lg text-pretty text-muted-foreground">{project.summary}</p>
        <TagList tags={project.tags} className="mt-5" />
        <ProjectLinks project={project} variant="button" className="mt-6 gap-3" />
      </header>

      {project.image && (
        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <ProjectImage project={project} priority className="h-auto w-full" />
        </div>
      )}

      {cs ? (
        <div className="prose-section mt-12 space-y-10">
          <section aria-labelledby="overview">
            <h2 id="overview">Overview</h2>
            <p>{cs.overview}</p>
          </section>
          <section aria-labelledby="role">
            <h2 id="role">My role</h2>
            <p>{cs.role}</p>
          </section>
          <section aria-labelledby="built">
            <h2 id="built">What I built</h2>
            <ul>
              {cs.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>
          {cs.outcomes && cs.outcomes.length > 0 && (
            <section aria-labelledby="outcomes">
              <h2 id="outcomes">Results</h2>
              <ul>
                {cs.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </section>
          )}
          {cs.gallery && cs.gallery.length > 0 && (
            <section aria-labelledby="screenshots">
              <h2 id="screenshots">Screenshots</h2>
              <div className="mt-4 space-y-8">
                {cs.gallery.map((img) => (
                  <figure key={img.src}>
                    <a
                      href={img.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block overflow-hidden rounded-xl border border-border transition-colors hover:border-primary/40"
                    >
                      <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="w-full" />
                    </a>
                    <figcaption className="mt-2 text-sm text-muted-foreground">{img.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        <p className="mt-10 text-muted-foreground">A full write-up for this project is coming soon.</p>
      )}

      {next && next.slug !== project.slug && (
        <nav aria-label="Next project" className="mt-16 border-t border-border pt-8">
          <Link to={`/projects/${next.slug}`} className="group inline-flex flex-col">
            <span className="text-sm text-muted-foreground">Next case study</span>
            <span className="mt-1 inline-flex items-center gap-2 text-lg font-medium transition-colors group-hover:text-primary">
              {next.title}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </span>
          </Link>
        </nav>
      )}
    </article>
  )
}
