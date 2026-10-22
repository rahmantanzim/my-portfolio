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
      'Behavioural second factor for Android that checks who is using the phone from how they swipe. I built the React admin dashboard for live verification logs and model metrics.',
    category: 'university',
    context: 'Team of 3 · Course project',
    featured: true,
    order: 2,
    image: { src: '/projects/swipe-2fa-logs.webp', alt: 'Swipe 2FA admin dashboard showing authentication logs' },
    tags: ['React', 'Vitest', 'Python', 'scikit-learn', 'Firebase', 'Android'],
    links: {
      live: null,
      github: 'https://github.com/Danmallan/Swipe-Based-2FA-Dashboard',
    },
    caseStudy: {
      overview:
        'Passwords only protect the first login. Once a phone is unlocked or handed over, an app needs a lightweight way to tell whether the person using it is still the owner. This system uses swipe behaviour as a second factor: the Android app extracts features from each swipe, a Python service with scikit-learn decides accept or reject with a confidence score, Firebase stores sessions and logs, and a React dashboard shows what is happening.',
      role: 'Built the React admin dashboard and its Vitest test suite. The work was split three ways — Android app, Python backend and ML, and dashboard — and run in four short sprints with feature branches and pull-request reviews.',
      highlights: [
        'System overview: enrolled users, verification count, success rate, average latency and a 7-day performance trend.',
        'Authentication log viewer with search, success/failed filters and time ranges, showing each decision with its confidence score and reason.',
        'Per-user verification performance (training status, acceptance rate, enrollment progress) and an evidence export.',
        'Reads live sessions, attempts and model metrics from Firebase Realtime Database.',
        'Classifier is a pluggable strategy (KNN baseline, SVM default), so models can be compared without changing the rest of the pipeline.',
      ],
      outcomes: [
        '232 automated tests, all passing: 43 dashboard Vitest, 162 backend Pytest, 27 Android unit and instrumented tests.',
        'Met the evaluation targets set for the model: top-1 accuracy ≥ 85%, macro-F1 ≥ 0.80, false-accept rate ≤ 5%, false-reject rate ≤ 10%, and 95th-percentile decision latency ≤ 2 s.',
      ],
      gallery: [
        {
          src: '/projects/swipe-2fa-architecture.webp',
          alt: 'Architecture diagram: Android app, Python backend, Firebase Realtime Database and React dashboard',
          caption: 'Architecture: the Android app sends swipe features to the Python /predict API; the dashboard reads metrics and logs from Firebase.',
        },
        {
          src: '/projects/swipe-2fa-dashboard.webp',
          alt: 'Swipe 2FA dashboard system overview with user, verification, success-rate and latency cards',
          caption: 'Dashboard overview (test data from development).',
        },
      ],
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
      'Bilingual Laravel campaign site where ASUS laptop buyers submitted reviews to win a prize, with an admin panel the client used to moderate entries and edit every page without a developer.',
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
        'ASUS wanted laptop buyers in Bangladesh to post honest reviews online. The campaign site explained the rules in Bengali and English, collected each entry with proof of purchase, and published the winners. The client’s marketing team ran the whole campaign from an admin panel, without asking the agency for changes.',
      role: 'Built the microsite and admin panel in Laravel as one of two developers at the agency.',
      highlights: [
        'Bengali and English landing page explaining the three steps, the prize, review criteria and terms.',
        'Entry form collecting the buyer’s review link, place of purchase, a screenshot of the review and the purchase invoice, with server-side validation.',
        'Admin dashboard listing every entry with search, sorting and pagination, plus quick access to each review and invoice.',
        'Content editor so the client could change all landing-page text, images, review criteria and terms themselves.',
        'Keyword filter that blocks profanity before a review reaches moderators, and a results page announcing the winners.',
      ],
      gallery: [
        {
          src: '/projects/review-microsite-landing.webp',
          alt: 'Bengali campaign landing page with laptops and the three steps to enter',
          caption: 'Landing page (Bengali version) with the three steps to enter.',
        },
        {
          src: '/projects/review-microsite-admin-dashboard.webp',
          alt: 'Admin dashboard table of submitted reviews with personal details blurred',
          caption: 'Admin dashboard. Entrants’ personal details are blurred.',
        },
        {
          src: '/projects/review-microsite-admin-editor.webp',
          alt: 'Admin content editor with fields for cover text, steps, reward and terms',
          caption: 'Content editor: the client changed every piece of landing-page copy without a developer.',
        },
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
