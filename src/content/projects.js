import { screenshots } from './screenshots'

// The four "Selected work" cards on the homepage, in display order.
// Copy is verbatim from docs/redesign/reference/Main.html.
export const projects = [
  {
    slug: 'mmac-hub',
    title: 'MMAC Hub',
    status: 'Live demo · awaiting partner sign-off',
    oneLiner:
      'Assistance intake and case management for a rural animal-welfare nonprofit serving three counties.',
    bullets: [
      'Mapped four user groups into a permissions model before drawing a single screen',
      'Designed the intake data model: people, households, animals, requests and prescreening',
      'Shipped a branded public site and admin review flow, tested end to end on a phone',
    ],
    tags: ['Product discovery', 'Data modeling', 'Next.js', 'Supabase'],
    liveUrl: 'https://mmac-hub.vercel.app/',
    repoUrl: 'https://github.com/tracycrossrvt-gif/mmac-hub',
    detailPath: '/case-studies/mmac-hub',
    detailLabel: 'Read case study',
    screenshot: screenshots.mmacHome,
    screenshotAlt:
      'MMAC Hub homepage with a kitten photo and the headline Real Care for Real Life',
  },
  {
    slug: 'vetboard',
    title: 'VetBoard',
    status: 'In use at a vet tech school and Amerivet hospitals',
    oneLiner:
      'VTNE exam prep for newly graduated vet techs, where every answer shows its source.',
    bullets: [
      'Rolled out to a vet tech school, every Amerivet hospital in my market and several vet tech communities',
      'Cut a general trivia app down to the two modes exam takers actually needed',
      'Built a pre-generated question bank, AI cross-checked and weighted to the AAVSB outline',
      'Every explanation cites AAHA, Merck or NAVTA, with an "Explain further" tutor',
    ],
    tags: ['Scope cutting', 'AI content pipeline', 'Learning UX'],
    liveUrl: 'https://vetboard.vercel.app/',
    repoUrl: 'https://github.com/tracycrossrvt-gif/vetboard',
    detailPath: '/work/vetboard',
    detailLabel: 'Read summary',
    screenshot: screenshots.vetboardAnswer,
    screenshotAlt:
      'VetBoard practice question answered correctly, with an explanation citing the AAHA anesthesia guidelines',
  },
  {
    slug: 'vetiq-analytics',
    title: 'VetIQ Analytics',
    status: 'Training tool for new Amerivet practice managers',
    oneLiner: 'The numbers a practice manager should check every morning, without the noise.',
    bullets: [
      'One weighted Practice Health Score across revenue, ACT, labor, COGS and client growth',
      'Month-end revenue forecast based on business days elapsed',
      'Recommended next steps tied to whichever metrics need attention',
    ],
    tags: ['KPI design', 'Domain expertise', 'Training design'],
    liveUrl: 'https://vet-iq-analytics.vercel.app/',
    repoUrl: 'https://github.com/tracycrossrvt-gif/VetIQ-Analytics',
    detailPath: '/work/vetiq-analytics',
    detailLabel: 'Read summary',
    screenshot: screenshots.vetiqOverview,
    screenshotAlt: 'VetIQ Analytics overview with a practice health score of 72 and KPI cards',
  },
  {
    slug: 'taskflow',
    title: 'TaskFlow',
    status: 'Live',
    oneLiner: 'A lightweight kanban board for teams that need less process, not more.',
    bullets: [
      'Drag cards between stages, or edit them in place',
      'A live summary of total, in-progress and completed work',
      'Saves automatically on the device, with no account needed',
    ],
    tags: ['Interaction design', 'State management', 'React · Vite'],
    liveUrl: 'https://taskflow-kanban-woad.vercel.app/',
    repoUrl: 'https://github.com/tracycrossrvt-gif/taskflow-kanban',
    detailPath: null,
    detailLabel: null,
    screenshot: screenshots.taskflowBoard,
    screenshotAlt: 'TaskFlow kanban board with To Do, In Progress and Done columns',
  },
]
