import { skillGroups } from '@/data/experience'

// The headline stack, in the order a recruiter scans for it.
const featured = ['TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Laravel', 'Vitest', 'Git']
const skills = featured.filter((s) => skillGroups.some((g) => g.skills.includes(s)))

/** Endless scrolling strip of core skills; pauses on hover, static for reduced motion. */
export function SkillMarquee() {
  return (
    <div className="marquee-mask group overflow-hidden py-2">
      {/* Two copies so the loop is seamless; the second is hidden from screen readers. */}
      <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex gap-3" aria-label={copy === 0 ? 'Core skills' : undefined}>
            {skills.map((skill) => (
              <li
                key={skill}
                className="glass rounded-xl px-6 py-3 text-sm font-medium whitespace-nowrap text-foreground/90 transition-colors hover:border-primary/40 hover:text-primary"
              >
                {skill}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
