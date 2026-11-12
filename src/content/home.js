import { site } from './site'

// Homepage copy, verbatim from docs/redesign/reference/Main.html.
// The project cards themselves live in projects.js.
// Headings ending in a gold period store the text without it; the page adds it.
export const home = {
  hero: {
    label: '01 · Tracy Cross · Product Manager · Atlanta, GA',
    title: 'I find where the work breaks, then ship the fix',
    lead: "Product manager with 15+ years in veterinary hospital leadership, most recently in corporate hospital operations. I map how work really moves, define what to build, and build it myself in React and Next.js. MBA. MS in AI Engineering starting January 2027.",
    primary: { label: 'See the work', href: '#work' },
    secondary: { label: 'Get in touch', href: '#contact' },
  },
  trackRecord: [
    {
      value: '15+',
      text: 'years in hospital leadership across GP, specialty and emergency care',
    },
    { value: '2→12', text: "doctors on the hospital teams I've led" },
    {
      value: '200+',
      text: 'SOPs written to carry a hospital through AAHA recertification',
    },
    { value: '4', text: 'live products I defined, designed and built' },
  ],
  ticker: [
    'Product discovery',
    'Workflow mapping',
    'Data modeling',
    'Roadmaps',
    'React · Next.js',
    'Supabase',
    'Stakeholder alignment',
  ],
  work: {
    label: '02 · Selected work',
    heading: "Products I've defined, designed and shipped.",
    liveLabel: 'Live site ↗',
    repoLabel: 'Repo ↗',
  },
  approach: {
    label: '03 · What I do',
    heading: 'From the floor to the roadmap.',
    intro:
      "I've run the operations these products serve, so I start from how the work actually happens, not how a requirements doc says it does.",
    rows: [
      {
        title: 'Discovery & workflow mapping',
        body: 'Talk to the people doing the work, map where it breaks, and write down the rules the software has to respect.',
        tags: 'Stakeholder interviews · Process maps · Product rules',
      },
      {
        title: 'Product definition',
        body: 'Decide what ships first, what waits, and what gets cut, then roll it out in phases people can absorb.',
        tags: 'MVP scoping · Prioritization · Phased roadmaps',
      },
      {
        title: 'Data & systems design',
        body: 'Model the data and permissions so the reporting an organization will need later is captured as the work happens.',
        tags: 'ERDs · PostgreSQL · Role-based access',
      },
      {
        title: 'Interface build',
        body: 'Prototype and ship accessible, responsive interfaces myself, so ideas get tested on real screens fast.',
        tags: 'React · Next.js · Supabase · Vercel',
      },
      {
        title: 'Operations & adoption',
        body: 'Write the SOPs, train the team, and stay through the rollout until the new way is the normal way.',
        tags: '200+ SOPs · AAHA accreditation · Team training',
      },
      {
        title: 'Business & metrics',
        body: 'Read a P&L, set the KPIs that matter, and connect product decisions to labor, cost and revenue.',
        tags: 'MBA · KPI design · Labor & COGS',
      },
    ],
  },
  background: {
    label: '04 · Background',
    heading: 'Two decades of operations, one product mindset.',
    intro:
      "I've owned a hospital and led corporate hospitals, rebuilding how teams work along the way. Now I bring that judgment to the products those teams depend on.",
    timeline: [
      {
        when: '2010–2016',
        title: 'Owner, independent veterinary hospital.',
        text: 'Built and grew my own practice.',
      },
      {
        when: '2018–present',
        title: 'Hospital leadership, corporate and private.',
        text: 'Led teams from 2 to 12 doctors across GP, specialty and emergency care.',
      },
      {
        when: '2025',
        title: 'AAHA recertification.',
        text: "Wrote 200+ SOPs; the reviewer called it one of the most thorough libraries she'd seen.",
      },
      {
        when: 'BBA · MBA',
        title: 'Business training.',
        text: 'Finance, strategy and operations behind every product call.',
      },
      {
        when: '2026',
        title: 'Frontend engineering.',
        text: 'React and Next.js, shipping the four products above.',
      },
      {
        when: 'Jan 2027 →',
        upcoming: true,
        title: 'MS in AI Engineering, Quantic.',
        text: 'Going deeper on building with AI.',
      },
    ],
  },
  contact: {
    label: '05 · Contact',
    heading: "Let's fix what your team keeps working around",
    // The gold email button comes first and shows site.contact.email.
    links: [
      { label: 'LinkedIn', href: site.contact.linkedin },
      { label: 'GitHub', href: site.contact.github },
      { label: 'Resume', href: site.resumeUrl },
    ],
  },
}
