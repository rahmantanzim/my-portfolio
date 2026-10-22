import type { Education, Experience, SkillGroup } from '@/types/content'

/** Software development roles — shown in full. */
export const devExperience: Experience[] = [
  {
    id: 'hype-dhaka',
    role: 'Web Developer',
    organization: 'HYPE Dhaka',
    location: 'Dhaka, Bangladesh',
    start: '2018-06',
    end: '2022-06',
    summary: 'One of two developers at a small digital agency, often the only developer on a project.',
    highlights: [
      'Built 12 client websites, mostly on WordPress and WooCommerce, and maintained 5 live client sites.',
      'Built a Laravel review-campaign microsite with an admin panel so the client’s team could manage entries without developer help.',
      'Built a PHP and MySQL contest site that took 3,000 registrations in two weeks, with server-side validation on every form.',
      'Agreed scope, features and deadlines directly with clients.',
      'Tracked down and fixed backend and database bugs on live client sites.',
    ],
    tags: ['PHP', 'Laravel', 'WordPress', 'WooCommerce', 'MySQL', 'JavaScript', 'jQuery'],
  },
]

/** Non-development roles — shown compactly, focused on transferable skills. */
export const otherExperience: Experience[] = [
  {
    id: 'sobeys',
    role: 'Cash Office Supervisor',
    organization: 'Sobeys',
    location: "St. John's, NL",
    start: '2024-05',
    end: '2025-12',
    highlights: [
      'Reconciled about $4,000 in daily cash and deposits; trained about 10 new employees and supervised the front-store team.',
    ],
    tags: [],
  },
  {
    id: 'intact',
    role: 'Claims Customer Representative',
    organization: 'Intact Insurance',
    location: "St. John's, NL",
    start: '2022-11',
    end: '2024-04',
    highlights: [
      'Handled up to 30 claims a day across several internal systems; rated “Exceeds Expectations” in 2023.',
    ],
    tags: [],
  },
]

export const education: Education[] = [
  {
    id: 'mun-masc',
    degree: 'MASc, Software Engineering',
    institution: 'Memorial University of Newfoundland',
    location: "St. John's, NL",
    start: '2025-09',
    end: '2027-04',
    inProgress: true,
  },
  {
    id: 'brac-bsc',
    degree: 'BSc, Computer Science',
    institution: 'BRAC University',
    location: 'Dhaka, Bangladesh',
    end: '2020',
    inProgress: false,
    note: 'Verified by World Education Services (WES)',
  },
]

export const skillGroups: SkillGroup[] = [
  { label: 'Languages', skills: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'SQL', 'Java', 'HTML', 'CSS'] },
  { label: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'jQuery'] },
  { label: 'Backend', skills: ['Node.js', 'Express', 'Laravel', 'Flask', 'REST APIs', 'JWT auth'] },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Supabase', 'Mongoose', 'TypeORM'],
  },
  { label: 'Testing', skills: ['Jest', 'Vitest', 'Pytest', 'Grammar-based fuzzing'] },
  { label: 'Tools', skills: ['Git', 'GitHub', 'Vercel', 'WordPress', 'WooCommerce', 'cPanel'] },
]
