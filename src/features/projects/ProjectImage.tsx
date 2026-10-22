import { Code2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/types/content'

interface ProjectImageProps {
  project: Project
  className?: string
  /** Load eagerly for above-the-fold images (detail page header). */
  priority?: boolean
}

/** Project screenshot, or a neutral placeholder showing the title when there's no image yet. */
export function ProjectImage({ project, className, priority = false }: ProjectImageProps) {
  if (!project.image) {
    return (
      <div
        aria-hidden
        className={cn(
          'project-placeholder flex flex-col items-center justify-center gap-3 p-6 text-center',
          className,
        )}
      >
        <Code2 className="size-8 text-primary/70" />
        <span className="font-mono text-sm text-muted-foreground">{project.tags.slice(0, 3).join(' · ')}</span>
      </div>
    )
  }

  return (
    <img
      src={project.image.src}
      alt={project.image.alt}
      width={1200}
      height={750}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={cn('object-cover', className)}
    />
  )
}
