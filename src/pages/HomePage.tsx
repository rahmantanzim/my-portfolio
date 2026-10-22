import { site } from '@/config/site'
import { About } from '@/features/about/About'
import { Certifications } from '@/features/certifications/Certifications'
import { Contact } from '@/features/contact/Contact'
import { Experience } from '@/features/experience/Experience'
import { Hero } from '@/features/hero/Hero'
import { FeaturedProjects } from '@/features/projects/FeaturedProjects'
import { Skills } from '@/features/skills/Skills'
import { Testimonials } from '@/features/testimonials/Testimonials'

export function HomePage() {
  const { sections } = site

  return (
    <>
      <title>{`${site.name} — ${site.role}`}</title>
      <Hero />
      {sections.about && <About />}
      <FeaturedProjects />
      <Experience />
      <Skills />
      {sections.certifications && <Certifications />}
      {sections.testimonials && <Testimonials />}
      <Contact />
    </>
  )
}
