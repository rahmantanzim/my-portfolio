import { MarginSection } from '@/components/ui/MarginSection'
import { Reveal } from '@/components/ui/Reveal'
import { devExperience, education, otherExperience } from '@/data/experience'
import { formatMonth, formatRange } from '@/lib/utils'

/** One line with the date set flush right in tabular figures. */
function Row({ title, place, dates, note }: { title: string; place: string; dates: string; note?: string }) {
  return (
    <li className="grid gap-x-6 gap-y-0.5 border-b border-border py-3.5 sm:grid-cols-[minmax(0,1fr)_auto]">
      <p>
        <span className="font-medium">{title}</span>, <span className="text-muted-foreground">{place}</span>
        {note && <span className="block text-[0.9375rem] text-muted-foreground">{note}</span>}
      </p>
      <p className="tabular text-[0.9375rem] text-muted-foreground sm:text-right">{dates}</p>
    </li>
  )
}

export function Experience() {
  return (
    <MarginSection id="before" label="Before">
      {devExperience.map((job) => (
        <Reveal as="article" key={job.id}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="semi-condensed text-[1.75rem] leading-tight font-bold tracking-tight md:text-[2rem]">
              {job.role}, {job.organization}
            </h3>
            <p className="tabular text-[0.9375rem] text-muted-foreground">{formatRange(job.start, job.end)}</p>
          </div>
          <p className="mt-1 text-muted-foreground">{job.location}</p>
          {job.summary && <p className="mt-5 max-w-[60ch] text-lg text-pretty">{job.summary}</p>}
          <ul className="mt-4 max-w-[60ch] list-disc space-y-2 pl-5 text-pretty text-muted-foreground marker:text-primary">
            {job.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </Reveal>
      ))}

      <Reveal className="mt-14">
        <h3 className="font-semibold">Study</h3>
        <ul className="mt-3 border-t border-border">
          {education.map((ed) => (
            <Row
              key={ed.id}
              title={ed.degree}
              place={ed.institution}
              dates={ed.inProgress ? formatRange(ed.start, ed.end, 'expected') : formatMonth(ed.end)}
              note={ed.note}
            />
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-12">
        <h3 className="font-semibold">Other work, in Canada</h3>
        <ul className="mt-3 border-t border-border">
          {otherExperience.map((job) => (
            <Row
              key={job.id}
              title={job.role}
              place={job.organization}
              dates={formatRange(job.start, job.end)}
              note={job.highlights[0]}
            />
          ))}
        </ul>
      </Reveal>
    </MarginSection>
  )
}
