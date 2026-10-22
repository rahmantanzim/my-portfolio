import type { Project } from '@/types/content'

/**
 * Static project content. When the backend is ready, the same shape will be
 * served from `GET /projects` (see src/services/content.ts).
 *
 * - `featured: true` projects appear on the home page (keep it to 4).
 * - Projects with a `caseStudy` get their own page at /projects/:slug.
 */
export const projects: Project[] = [
  {
    slug: 'ai-blog-platform',
    title: 'AI Blog Platform',
    summary:
      'MERN blog with a JWT-protected admin dashboard and Gemini-powered first drafts that admins edit before publishing.',
    category: 'personal',
    context: 'Personal project',
    featured: true,
    order: 1,
    image: { src: '/projects/ai-blog-platform.webp', alt: 'AI Blog Platform home page' },
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Gemini API', 'JWT'],
    links: {
      live: 'https://fullstack-ai-blog-eta.vercel.app',
      github: 'https://github.com/rahmantanzim/fullstack-ai-blog',
    },
    caseStudy: {
      overview:
        'A full-stack blogging platform built on the MERN stack. Readers browse and comment on posts; admins manage everything from a protected dashboard and can ask the Gemini API to write a complete first draft of a post.',
      role: 'Solo project — designed and built the frontend, API and database.',
      highlights: [
        'JWT-protected admin dashboard where admins create and edit posts.',
        'Cover image uploads handled through ImageKit.',
        'Comment moderation: reader comments stay hidden until an admin approves them.',
        'Gemini API integration generates a full first draft, which the admin edits before publishing.',
        'Deployed on Vercel.',
      ],
    },
  },
  {
    slug: 'swipe-based-2fa',
    title: 'Swipe-Based 2FA System',
    summary:
      'Android app that confirms a user’s identity from how they swipe, using SVM and KNN classifiers. I built the live React dashboard.',
    category: 'university',
    context: 'Team of 3 · Course project',
    featured: true,
    order: 2,
    image: null,
    tags: ['React', 'Vitest', 'Python', 'scikit-learn', 'Firebase', 'Android'],
    links: {
      live: null,
      github: 'https://github.com/Danmallan/Swipe-Based-2FA-Dashboard',
    },
    caseStudy: {
      overview:
        'A behavioural second factor for mobile login: instead of a code, the system checks whether the way someone swipes matches the account owner. An Android app collects touch data, a Python service classifies it with SVM and KNN models, and Firebase connects the pieces.',
      role: 'Built the React dashboard that shows live touch data from the phone as it comes in.',
      highlights: [
        'Dashboard streams screen positions and user details from the phone in real time.',
        'Classification with SVM and KNN models (scikit-learn).',
        'Android app, Python API, Firebase and React dashboard working together.',
      ],
      outcomes: ['232 automated tests across Pytest and Vitest.'],
    },
  },
  {
    slug: 'parser-fuzzing-tools',
    title: 'Parser Fuzzing Tools',
    summary:
      'Grammar-based HTML fuzzer that caused 525 crashes in 1,000 runs where random mutation caused none, plus a fuzzer for Python’s json module.',
    category: 'university',
    context: 'Course project · Software verification',
    featured: true,
    order: 3,
    image: { src: '/projects/parser-fuzzing-tools.webp', alt: 'Illustration of an HTML parser fuzzer' },
    tags: ['Python', 'coverage.py', 'Grammar-based fuzzing', 'AST'],
    links: {
      live: null,
      github: 'https://github.com/rahmantanzim/cfg-html-fuzzer',
    },
    caseStudy: {
      overview:
        'Two fuzzers for testing how parsers handle unexpected input. The HTML fuzzer builds syntactically valid trees from a grammar and then mutates them, so inputs get past the parser’s early checks and reach deeper code.',
      role: 'Designed and implemented both fuzzers and the experiments.',
      highlights: [
        'Grammar-based HTML fuzzer that builds valid syntax trees and applies 8 kinds of mutations.',
        'Compared against a random-mutation fuzzer as a baseline.',
        'Second fuzzer generates inputs for Python’s built-in json module.',
      ],
      outcomes: [
        'Over 1,000 runs the grammar-based fuzzer caused 525 recursion crashes in a simulated parser; the random fuzzer caused none because its input was rejected early.',
        'Of 5,000 generated JSON inputs: 2,949 parsed, 1,377 were rejected cleanly and 674 (13.5%) crashed the parser.',
      ],
    },
  },
  {
    slug: 'review-campaign-microsite',
    title: 'Review Campaign Microsite',
    summary:
      'Laravel campaign site where laptop buyers submitted reviews, with an admin panel and keyword filter so the client’s team could moderate entries themselves.',
    category: 'business',
    context: 'Client work at HYPE Dhaka · ASUS campaign',
    featured: true,
    order: 4,
    image: { src: '/projects/review-campaign-microsite.webp', alt: 'ASUS laptop review campaign artwork' },
    tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    links: {
      live: 'https://www.behance.net/gallery/129215805/USER-GENERATED-REVIEW-CAMPAIGN-MICROSITE',
      github: null,
    },
    caseStudy: {
      overview:
        'A user-generated review campaign for an ASUS laptop promotion. Buyers submitted reviews through the microsite, and the client’s marketing team reviewed and published them without needing a developer.',
      role: 'Built the microsite and admin panel in Laravel as one of two agency developers.',
      highlights: [
        'Review submission flow built with Laravel, MySQL and Bootstrap.',
        'Admin panel for the client’s team to review, approve and manage entries.',
        'Automated keyword filter that blocks profanity before a review reaches moderators.',
      ],
    },
  },
  {
    slug: 'encrypted-chat',
    title: 'Encrypted Chat',
    summary:
      'Real-time chat where every message is encrypted on the sender’s machine with RSA-OAEP, so the server only ever relays ciphertext.',
    category: 'university',
    featured: false,
    order: 5,
    image: { src: '/projects/encrypted-chat.webp', alt: 'Illustration of end-to-end encrypted messaging' },
    tags: ['Python', 'Flask-SocketIO', 'RSA-OAEP', 'Cryptography'],
    links: { live: null, github: 'https://github.com/rahmantanzim/python-cryptography-chat' },
  },
  {
    slug: 'contest-registration-site',
    title: 'Contest & Registration Site',
    summary:
      'Plain PHP and MySQL contest site for a client’s two-week promotion. Took 3,000 registrations with server-side validation on every form.',
    category: 'business',
    context: 'Client work at HYPE Dhaka',
    featured: false,
    order: 6,
    image: null,
    tags: ['PHP', 'MySQL', 'Form validation'],
    links: { live: null, github: null },
  },
  {
    slug: 'dhongerbakso-ecommerce',
    title: 'Dhongerbakso E-Commerce Store',
    summary:
      'WooCommerce store for an apparel brand with a single-page checkout, QR-based mobile payment verification, SMTP email and courier API integration.',
    category: 'business',
    featured: false,
    order: 7,
    image: { src: '/projects/dhongerbakso-ecommerce.webp', alt: 'Dhongerbakso e-commerce feature overview' },
    tags: ['WordPress', 'WooCommerce', 'PHP', 'CartFlows'],
    links: { live: 'https://dhongerbakso.com', github: null },
  },
  {
    slug: 'historical-archives-catalog',
    title: 'Historical Archives Catalog',
    summary:
      'WordPress site for Heritage Archives Bangladesh with custom layouts to catalogue, search and read historical documents and publications.',
    category: 'business',
    featured: false,
    order: 8,
    image: { src: '/projects/historical-archives-catalog.webp', alt: 'The Archives of Bangladesh History home page' },
    tags: ['WordPress', 'Elementor', 'Custom theme'],
    links: { live: 'https://heritage-archives.org', github: null },
  },
  {
    slug: 'nextjs-typeorm-app',
    title: 'Next.js & TypeORM App',
    summary:
      'Next.js and TypeScript app on PostgreSQL (Supabase) using TypeORM for relational modelling, server-side data fetching and schema migrations.',
    category: 'personal',
    featured: false,
    order: 9,
    image: null,
    tags: ['Next.js', 'TypeScript', 'TypeORM', 'PostgreSQL', 'Supabase'],
    links: { live: null, github: null },
  },
  {
    slug: 'python-data-visualization',
    title: 'Python Data Visualization',
    summary:
      'Jupyter notebooks using Pandas and Matplotlib to clean raw datasets and plot multi-variable scatter and connected-dot charts.',
    category: 'university',
    featured: false,
    order: 10,
    image: null,
    tags: ['Python', 'Pandas', 'Matplotlib', 'Jupyter'],
    links: { live: null, github: null },
  },
]

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'personal', label: 'Personal' },
  { id: 'university', label: 'University' },
  { id: 'business', label: 'Client work' },
] as const
