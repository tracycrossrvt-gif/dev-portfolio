import { screenshots } from './screenshots'

// /work/vetiq-analytics. Copy is verbatim from docs/redesign/reference/VetIQ.html.
// `sections` is listed in page order; each `type` maps to one layout block.
export const vetiq = {
  slug: 'vetiq-analytics',
  path: '/work/vetiq-analytics',
  label: 'VetIQ Analytics · Project summary',
  title: 'Teaching new managers which numbers matter.',
  lead: 'A practice manager can open a dozen reports and still not know where to look. VetIQ puts the handful of numbers that run a hospital on one screen, with targets, a forecast and clear next steps. Amerivet now uses it to train new practice managers.',
  actions: [
    { label: 'Try VetIQ ↗', href: 'https://vet-iq-analytics.vercel.app/', variant: 'accent' },
    {
      label: 'Repository ↗',
      href: 'https://github.com/tracycrossrvt-gif/VetIQ-Analytics',
      variant: 'outline',
    },
  ],
  facts: [
    { label: 'Role', value: 'Product owner, designer and developer' },
    { label: 'Users', value: 'New veterinary practice managers' },
    { label: 'Adoption', value: 'Training tool for new practice managers at Amerivet' },
    { label: 'Stack', value: 'React · Vite · React Router · Recharts · Vercel' },
  ],
  sections: [
    {
      type: 'figures',
      figures: [
        {
          ...screenshots.vetiqOverview,
          alt: 'VetIQ Practice overview: a health score of 72 out of 100 marked Needs attention, above KPI cards for revenue, average client transaction, hourly labor, cost of goods, new clients and EBITDA margin',
          caption:
            'The Practice overview. Every metric sits next to its target, and the health score says at a glance whether the month needs attention.',
        },
      ],
    },
    {
      type: 'split',
      label: '01 · The problem',
      heading: 'More data didn\'t mean more clarity.',
      paragraphs: [
        'Running a hospital comes down to a few levers: revenue, average client transaction, labor, cost of goods and new clients. A new manager usually gets that information spread across reports, with no sense of which number to fix first.',
        'I built VetIQ around the way I actually read a hospital\'s month: where are we against goal, where will we land, and what do we do about it this week.',
      ],
    },
    {
      type: 'rows',
      label: '02 · Product decisions',
      heading: 'Built to answer three questions in order.',
      rows: [
        {
          title: 'How healthy is the month?',
          body: 'One Practice Health Score, weighted across revenue, ACT, labor, COGS and client growth, so a new manager knows right away whether to dig in.',
        },
        {
          title: 'Where will we land?',
          body: 'A month-end forecast based on business days elapsed shows projected revenue against goal, clearly labeled as an estimate, not booked revenue.',
        },
        {
          title: 'What do I do about it?',
          body: '"Where to focus" flags the metrics off target and pairs them with next steps, like reviewing unused appointment capacity or doctor production.',
        },
        {
          title: 'A safe place to practice',
          body: 'The demo workspace uses sample data that trainees can edit, saved only in their browser, so they can test what-ifs without touching a real hospital\'s numbers.',
        },
      ],
    },
    {
      type: 'list',
      label: '03 · Inside the workspace',
      heading: 'One view for the month, deeper views when you need them.',
      items: [
        { title: 'Overview', note: 'Health score, KPIs, forecast, focus areas' },
        { title: 'Revenue Intelligence', note: 'Revenue trends' },
        { title: 'Doctor Insights', note: 'Provider production' },
        { title: 'Client Growth', note: 'New-client acquisition' },
        { title: 'Cost & Labor', note: 'Labor and COGS against targets' },
        { title: 'Data Entry', note: 'Update the month\'s figures' },
      ],
    },
  ],
  next: { title: 'MMAC Hub', path: '/case-studies/mmac-hub' },
}
