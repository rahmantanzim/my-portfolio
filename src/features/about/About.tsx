import { SectionHeader } from '@/components/ui/SectionHeader'

/**
 * FUTURE SCOPE — hidden until `site.sections.about` is set to true.
 * Draft copy below; rewrite in your own voice before publishing.
 */
export function About() {
  return (
    <section id="about" tabIndex={-1} aria-labelledby="about-title" className="section">
      <div className="container-page">
        <SectionHeader id="about-title" eyebrow="About" title="A bit about me" />
        <div className="max-w-2xl space-y-4 text-pretty text-muted-foreground">
          <p>
            I started out building client websites at a small agency in Dhaka, where I was often the only developer on
            a project — talking to clients, agreeing on scope and shipping on deadline.
          </p>
          <p>
            Since moving to Canada I’ve kept building, and I’m now doing a full-time Master’s in Software Engineering
            at Memorial University, with a focus on testing, reliability and full-stack web development.
          </p>
        </div>
      </div>
    </section>
  )
}
