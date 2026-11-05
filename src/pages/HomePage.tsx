import { site } from '@/config/site'
import { Certifications } from '@/features/certifications/Certifications'
import { Contact } from '@/features/contact/Contact'
import { Experience } from '@/features/experience/Experience'
import { Hero } from '@/features/hero/Hero'
import { Now } from '@/features/now/Now'
import { Stack } from '@/features/stack/Stack'
import { Testimonials } from '@/features/testimonials/Testimonials'
import { Work } from '@/features/work/Work'

export function HomePage() {
  const { sections } = site

  return (
    <div className="sheet">
      <title>{`${site.name} — ${site.role}`}</title>
      <Hero />
      <Now />
      <Work />
      <Experience />
      <Stack />
      {sections.certifications && <Certifications />}
      {sections.testimonials && <Testimonials />}
      <Contact />
    </div>
  )
}
