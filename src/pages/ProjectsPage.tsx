import { ArrowLeft } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { site } from '@/config/site'
import { ProjectFilters } from '@/features/projects/ProjectFilters'
import { ProjectListItem } from '@/features/projects/ProjectListItem'
import { useProjectFilters } from '@/features/projects/useProjectFilters'
import { projectsQuery } from '@/services/content'

export default function ProjectsPage() {
  const { data: projects = [], isPending, isError } = useQuery(projectsQuery)
  const { category, activeTech, techOptions, filtered, setCategory, setTech, reset } = useProjectFilters(projects)

  return (
    <div className="container-page max-w-4xl pt-28 pb-24 md:pt-32">
      <title>{`Projects — ${site.name}`}</title>

      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Home
      </Link>

      <header className="mt-6 mb-10">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">All projects</h1>
        <p className="mt-3 text-muted-foreground">
          Everything I’ve built, from client sites to university research. Projects marked “Case study” have a full
          write-up.
        </p>
      </header>

      <ProjectFilters
        category={category}
        onCategoryChange={setCategory}
        techOptions={techOptions}
        activeTech={activeTech}
        onTechChange={setTech}
      />

      <p className="mt-8 text-sm text-muted-foreground" aria-live="polite">
        {isPending ? 'Loading projects…' : `${filtered.length} ${filtered.length === 1 ? 'project' : 'projects'}`}
      </p>

      {isError && <p className="mt-6 text-muted-foreground">Projects couldn’t be loaded right now.</p>}

      {!isPending && !isError && filtered.length === 0 && (
        <div className="mt-6 rounded-2xl border border-dashed border-border p-8 text-center">
          <p className="text-muted-foreground">No projects match these filters.</p>
          <button type="button" onClick={reset} className="mt-3 cursor-pointer text-sm text-primary hover:underline">
            Clear filters
          </button>
        </div>
      )}

      <ul className="mt-2 divide-y divide-border">
        {filtered.map((project) => (
          <li key={project.slug}>
            <ProjectListItem project={project} />
          </li>
        ))}
      </ul>
    </div>
  )
}
