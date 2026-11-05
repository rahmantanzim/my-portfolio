import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { NumberedHeading } from '@/components/ui/NumberedHeading'
import { Reveal } from '@/components/ui/Reveal'
import { devExperience, education, otherExperience } from '@/data/experience'
import { cn, formatMonth, formatRange } from '@/lib/utils'

interface Tab {
  id: string
  tab: string
  title: string
  at: string
  dates: string
  points: string[]
}

/** Development work first, then the current degree, then other jobs and the first degree. */
const tabs: Tab[] = [
  ...devExperience.map((j) => ({
    id: j.id,
    tab: j.organization,
    title: j.role,
    at: j.organization,
    dates: formatRange(j.start, j.end),
    points: [...(j.summary ? [j.summary] : []), ...j.highlights],
  })),
  ...education
    .filter((e) => e.inProgress)
    .map((e) => ({
      id: e.id,
      tab: 'Memorial University',
      title: e.degree,
      at: e.institution,
      dates: formatRange(e.start, e.end, 'expected'),
      points: [
        'Full-time, finishing in April 2027.',
        'Course projects include a swipe-based 2FA system, where I built the React dashboard and its 43 Vitest tests, and grammar-based fuzzers for HTML and JSON parsers.',
      ],
    })),
  ...otherExperience.map((j) => ({
    id: j.id,
    tab: j.organization,
    title: j.role,
    at: j.organization,
    dates: formatRange(j.start, j.end),
    points: j.highlights,
  })),
  ...education
    .filter((e) => !e.inProgress)
    .map((e) => ({
      id: e.id,
      tab: 'BRAC University',
      title: e.degree,
      at: e.institution,
      dates: formatMonth(e.end),
      points: [e.location, ...(e.note ? [e.note] : [])],
    })),
]

export function Experience() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const base = useId()

  // Arrow keys move between tabs (WAI-ARIA tabs pattern).
  const onKeyDown = (e: KeyboardEvent) => {
    const next = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key]
    if (next === undefined && e.key !== 'Home' && e.key !== 'End') return
    e.preventDefault()
    const i =
      e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : (active + (next ?? 0) + tabs.length) % tabs.length
    setActive(i)
    tabRefs.current[i]?.focus()
  }

  const current = tabs[active]

  return (
    <section id="experience" tabIndex={-1} aria-labelledby="experience-title" className="section">
      <Reveal className="content-column max-w-[50rem]">
        <NumberedHeading id="experience-title" number="02">
          Where I’ve worked
        </NumberedHeading>

        <div className="flex flex-col gap-8 md:flex-row md:gap-10">
          {/* Tab list: vertical on desktop, scrolls sideways on phones */}
          <div
            role="tablist"
            aria-label="Jobs and education"
            aria-orientation="vertical"
            className="-mx-6 flex overflow-x-auto px-6 md:mx-0 md:flex-col md:overflow-visible md:px-0"
          >
            {tabs.map((t, i) => {
              const selected = i === active
              return (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabRefs.current[i] = el
                  }}
                  role="tab"
                  type="button"
                  id={`${base}-tab-${i}`}
                  aria-selected={selected}
                  aria-controls={`${base}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={onKeyDown}
                  className={cn(
                    'h-11 shrink-0 cursor-pointer border-b-2 px-5 text-left font-mono text-[0.8125rem] whitespace-nowrap transition-colors md:border-b-0 md:border-l-2',
                    selected
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border-strong text-muted-foreground hover:bg-primary/5 hover:text-primary',
                  )}
                >
                  {t.tab}
                </button>
              )
            })}
          </div>

          <div
            role="tabpanel"
            id={`${base}-panel`}
            aria-labelledby={`${base}-tab-${active}`}
            tabIndex={0}
            className="min-h-[22rem] flex-1 outline-none"
          >
            <h3 className="text-xl font-medium">
              {current.title} <span className="text-primary">@ {current.at}</span>
            </h3>
            <p className="mt-1.5 font-mono text-[0.8125rem] text-muted-foreground">{current.dates}</p>
            <ul className="tri-list mt-6 space-y-3 leading-relaxed text-pretty text-muted-foreground">
              {current.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
