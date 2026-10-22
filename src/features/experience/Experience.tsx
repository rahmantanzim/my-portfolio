import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TagList } from '@/components/ui/Tag'
import { devExperience, education, otherExperience } from '@/data/experience'
import { formatMonth, formatRange } from '@/lib/utils'

export function Experience() {
  return (
    <section id="experience" tabIndex={-1} aria-labelledby="experience-title" className="section">
      <div className="container-page">
        <SectionHeader id="experience-title" eyebrow="Background" title="Experience & education" />

        <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
          {/* Development experience + other work */}
          <div className="space-y-12">
            {devExperience.map((job) => (
              <Reveal as="article" key={job.id} className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {job.role} <span className="text-muted-foreground">· {job.organization}</span>
                  </h3>
                  <p className="font-mono text-sm text-muted-foreground">{formatRange(job.start, job.end)}</p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{job.location}</p>
                {job.summary && <p className="mt-4 text-pretty">{job.summary}</p>}
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {job.highlights.map((h) => (
                    <li key={h} className="relative pl-5 text-pretty before:absolute before:top-[0.6em] before:left-0 before:size-1.5 before:rounded-full before:bg-primary/70">
                      {h}
                    </li>
                  ))}
                </ul>
                <TagList tags={job.tags} className="mt-6" />
              </Reveal>
            ))}

            <Reveal>
              <h3 className="eyebrow">Other work experience</h3>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {otherExperience.map((job) => (
                  <li key={job.id} className="py-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="font-medium">
                        {job.role} <span className="text-muted-foreground">· {job.organization}</span>
                      </p>
                      <p className="font-mono text-sm text-muted-foreground">{formatRange(job.start, job.end)}</p>
                    </div>
                    <p className="mt-2 text-sm text-pretty text-muted-foreground">{job.highlights[0]}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Education */}
          <Reveal as="aside" aria-labelledby="education-title">
            <h3 id="education-title" className="eyebrow flex items-center gap-2">
              <GraduationCap className="size-4" aria-hidden />
              Education
            </h3>
            <ol className="mt-4 space-y-4">
              {education.map((ed) => (
                <li key={ed.id} className="rounded-2xl border border-border bg-card p-5">
                  {ed.inProgress && (
                    <span className="mb-3 inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Current · full-time
                    </span>
                  )}
                  <p className="font-semibold">{ed.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{ed.institution}</p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">
                    {ed.inProgress ? formatRange(ed.start, ed.end, 'expected') : formatMonth(ed.end)}
                  </p>
                  {ed.note && <p className="mt-2 text-xs text-muted-foreground">{ed.note}</p>}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
