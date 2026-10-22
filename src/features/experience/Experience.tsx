import { Briefcase, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TagList } from '@/components/ui/Tag'
import { devExperience, education, otherExperience } from '@/data/experience'
import { cn, formatMonth, formatRange } from '@/lib/utils'

/** Timeline entries, newest first: the current degree, then development work, then the first degree. */
const timeline = [
  { kind: 'education' as const, item: education[0] },
  ...devExperience.map((item) => ({ kind: 'work' as const, item })),
  ...education.slice(1).map((item) => ({ kind: 'education' as const, item })),
]

function TimelineDot({ current }: { current: boolean }) {
  return (
    <span
      aria-hidden
      className="absolute top-7 left-0 z-10 flex size-3 -translate-x-1/2 items-center justify-center md:left-1/2"
    >
      {current && <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />}
      <span className="relative size-3 rounded-full bg-primary ring-4 ring-background" />
    </span>
  )
}

export function Experience() {
  return (
    <section id="experience" tabIndex={-1} aria-labelledby="experience-title" className="section">
      <div aria-hidden className="ambient top-1/3 -left-40" />
      <div className="container-page">
        <SectionHeader
          id="experience-title"
          eyebrow="Career journey"
          title="Experience &"
          accent="education"
          description="Development work and study, newest first."
        />

        <div className="relative">
          <div aria-hidden className="timeline-line absolute top-0 bottom-0 left-0 w-0.5 md:left-1/2 md:-translate-x-1/2" />

          <ol className="space-y-10 md:space-y-14">
            {timeline.map((entry, i) => {
              const right = i % 2 === 1
              const isEducation = entry.kind === 'education'
              const current = isEducation ? entry.item.inProgress : entry.item.end === null

              return (
                <li key={entry.item.id} className="relative grid md:grid-cols-2 md:gap-16">
                  <TimelineDot current={current} />
                  <Reveal className={cn('pl-8 md:pl-0', right ? 'md:col-start-2' : 'md:text-right')}>
                    <article className="glass card-hover rounded-2xl p-6 text-left md:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm font-medium text-primary">
                          {isEducation
                            ? entry.item.inProgress
                              ? formatRange(entry.item.start, entry.item.end, 'expected')
                              : formatMonth(entry.item.end)
                            : formatRange(entry.item.start, entry.item.end)}
                        </p>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-2.5 py-1 text-xs text-muted-foreground">
                          {isEducation ? (
                            <GraduationCap className="size-3.5" aria-hidden />
                          ) : (
                            <Briefcase className="size-3.5" aria-hidden />
                          )}
                          {isEducation ? (current ? 'Current · full-time' : 'Education') : 'Development'}
                        </span>
                      </div>

                      {isEducation ? (
                        <>
                          <h3 className="mt-3 text-xl font-semibold">{entry.item.degree}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {entry.item.institution} · {entry.item.location}
                          </p>
                          {entry.item.note && <p className="mt-3 text-sm text-muted-foreground">{entry.item.note}</p>}
                        </>
                      ) : (
                        <>
                          <h3 className="mt-3 text-xl font-semibold">{entry.item.role}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {entry.item.organization} · {entry.item.location}
                          </p>
                          {entry.item.summary && <p className="mt-4 leading-relaxed">{entry.item.summary}</p>}
                          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                            {entry.item.highlights.map((h) => (
                              <li
                                key={h}
                                className="relative pl-4 text-pretty before:absolute before:top-[0.6em] before:left-0 before:size-1.5 before:rounded-full before:bg-primary/70"
                              >
                                {h}
                              </li>
                            ))}
                          </ul>
                          <TagList tags={entry.item.tags} className="mt-5" />
                        </>
                      )}
                    </article>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Non-development roles, kept compact */}
        <Reveal className="mt-16 md:mx-auto md:max-w-3xl">
          <h3 className="text-center text-sm font-semibold text-primary">Other work in Canada</h3>
          <ul className="glass mt-5 divide-y divide-border/70 rounded-2xl px-6">
            {otherExperience.map((job) => (
              <li key={job.id} className="py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-medium">
                    {job.role} <span className="text-muted-foreground">· {job.organization}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{formatRange(job.start, job.end)}</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">{job.highlights[0]}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
