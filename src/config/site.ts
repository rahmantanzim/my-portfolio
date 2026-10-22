import type { IconType } from 'react-icons'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'

/**
 * Single source of truth for personal details shown across the site.
 * Update things here, not inside components.
 */
export const site = {
  name: 'Tanzim Rahman',
  shortName: 'TR',
  role: 'Full-Stack Developer',
  education: 'MASc Software Engineering, Memorial University',
  url: 'https://tanzim-rahman.com',
  email: 'tanzimr@mun.ca',
  phone: { display: '+1 (709) 764-7769', href: 'tel:+17097647769' },
  location: "St. John's, NL, Canada",
  resumeUrl: '/Tanzim_Rahman_Resume.pdf',

  availability: {
    headline: 'Open to full-time roles',
    details: [
      'Canadian Permanent Resident',
      "Based in St. John's, NL · open to remote or relocating to Toronto, Calgary or Vancouver",
    ],
  },

  socials: [
    { label: 'GitHub', href: 'https://github.com/rahmantanzim', icon: FiGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tanzim-rahman08/', icon: FiLinkedin },
    { label: 'Instagram', href: 'https://www.instagram.com/tanzim_r_', icon: FiInstagram },
  ] satisfies { label: string; href: string; icon: IconType }[],

  /**
   * Section switches. Sections marked "future" are built but hidden until
   * their content is ready — flip to `true` to publish.
   */
  sections: {
    about: false, // future
    testimonials: false, // future
    certifications: false, // future
  } as Record<'about' | 'testimonials' | 'certifications', boolean>,
} as const

export const navLinks = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const
