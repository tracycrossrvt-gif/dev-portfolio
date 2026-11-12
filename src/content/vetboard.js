import { screenshots } from './screenshots'

// /work/vetboard. Copy is verbatim from docs/redesign/reference/VetBoard.html.
// `sections` is listed in page order; each `type` maps to one layout block.
export const vetboard = {
  slug: 'vetboard',
  path: '/work/vetboard',
  label: 'VetBoard · Project summary',
  title: 'Exam prep that shows its sources.',
  lead: 'New vet tech graduates needed a focused way to study for the VTNE. I turned an AI trivia app I\'d built into a study tool where every answer is checked and cited. It\'s now used at a vet tech school, across every Amerivet hospital in my market, and by several vet tech communities on social media.',
  actions: [
    { label: 'Try VetBoard ↗', href: 'https://vetboard.vercel.app/', variant: 'accent' },
    {
      label: 'Repository ↗',
      href: 'https://github.com/tracycrossrvt-gif/vetboard',
      variant: 'outline',
    },
  ],
  facts: [
    { label: 'Role', value: 'Product owner, designer and developer' },
    { label: 'Users', value: 'Vet tech students and new grads preparing for the VTNE' },
    {
      label: 'Adoption',
      value: 'A vet tech school, Amerivet hospitals in my market, vet tech groups',
    },
    { label: 'Stack', value: 'React · Vite · Express · Google Gemini · Vercel' },
  ],
  sections: [
    {
      type: 'split',
      label: '01 · The problem',
      heading: 'A fun app isn\'t a study tool.',
      paragraphs: [
        'The original app generated trivia on any topic, including from photos. It was fun to demo, but it was the wrong tool for someone studying for a licensing exam. Questions on the fly can drift, a random topic doesn\'t follow the exam outline, and a student has no way to tell whether an answer is right.',
        'Exam takers needed questions that track the real exam, explanations they can trust, and a fast way to practice in short sessions.',
      ],
    },
    {
      type: 'rows',
      label: '02 · Product decisions',
      heading: 'Four calls that shaped the product.',
      rows: [
        {
          title: 'Cut features to fit the job',
          body: 'I removed the random-topic and photo question generators and kept two modes: practice by subject, and a mixed five-question session.',
        },
        {
          title: 'Pre-generate, don\'t improvise',
          body: 'Questions come from a bank built ahead of time instead of on demand, so every student sees vetted content and answers stay consistent.',
        },
        {
          title: 'An AI cross-check instead of a human bottleneck',
          body: 'Having a person review every question wasn\'t sustainable. A second AI pass cross-checks each one, and students can flag a problem from any question.',
        },
        {
          title: 'Keep AI where it helps learning',
          body: 'AI stays in the product as an "Explain further" tutor, so a student who misses a question can go deeper without leaving the session.',
        },
      ],
    },
    {
      type: 'figures',
      label: '03 · The experience',
      heading: 'Answer, see why, see where it came from.',
      figures: [
        {
          src: screenshots.vetboardQuestion,
          alt: 'VetBoard practice session showing question 1 of 5 about postoperative anesthetic deaths',
          caption:
            'Pick a subject or run a mixed five-question session, with progress shown as you go.',
        },
        {
          src: screenshots.vetboardAnswer,
          alt: 'A correct answer with an explanation and a link to the AAHA 2020 Anesthesia and Monitoring Guidelines',
          caption:
            'Each answer explains the reasoning and links to its source, here the AAHA anesthesia guidelines.',
        },
      ],
    },
    {
      type: 'list',
      label: '04 · Content sources',
      heading: 'Built on references vet techs already trust.',
      items: [
        { title: 'AAVSB VTNE content outline', note: 'Topics and weighting' },
        { title: 'Merck Veterinary Manual', note: 'Clinical reference' },
        { title: 'AAHA guidelines', note: 'Standards of care' },
        { title: 'RECOVER Initiative', note: 'CPR guidelines' },
        { title: 'NAVTA · vtneexam.com', note: 'Profession and exam guidance' },
      ],
    },
  ],
  next: { title: 'VetIQ Analytics', path: '/work/vetiq-analytics' },
}
