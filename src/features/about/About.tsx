import { NumberedHeading } from '@/components/ui/NumberedHeading'
import { Reveal } from '@/components/ui/Reveal'
import { site } from '@/config/site'
import { coreSkills } from '@/data/experience'

export function About() {
  return (
    <section id="about" tabIndex={-1} aria-labelledby="about-title" className="section">
      <Reveal className="content-column">
        <NumberedHeading id="about-title" number="01">
          About me
        </NumberedHeading>

        <div className="grid gap-12 md:grid-cols-[3fr_2fr] md:gap-14">
          <div className="space-y-4 leading-relaxed text-pretty text-muted-foreground">
            <p>
              Hi, I’m Tanzim. I started building websites in 2018 at{' '}
              <span className="text-primary">HYPE Dhaka</span>, a small digital agency where there were two of us
              writing code. Over four years I shipped 12 client sites, usually talking to the client myself from the
              first call to launch, and built things like a review campaign site for ASUS.
            </p>
            <p>
              I moved to St. John’s in 2022, and I’m now doing a Master’s in Software Engineering at{' '}
              <span className="text-primary">Memorial University</span>, finishing in April 2027. Most of my work
              there is in React, TypeScript and Python, and a lot of it is about testing: I wrote the dashboard and
              its 43 Vitest tests for a swipe-based 2FA system, and fuzzers that crashed Python’s json parser.
            </p>
            <p>Here are the technologies I’ve been working with recently:</p>

            <ul className="tri-list grid max-w-md grid-cols-2 gap-x-6 gap-y-2.5 pt-1 font-mono text-[0.8125rem]">
              {coreSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="portrait-offset mx-auto w-full max-w-[18.75rem] self-start md:mx-0 md:mt-1.5">
            <div className="tint-frame">
              <img
                src="/tanzim.jpg"
                alt={`Portrait of ${site.name}`}
                width={534}
                height={776}
                loading="lazy"
                className="aspect-square w-full object-cover object-[50%_20%]"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
