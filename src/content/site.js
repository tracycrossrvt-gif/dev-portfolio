export const site = {
  name: 'Tracy Cross',
  title: 'Product Manager',
  location: 'Atlanta, GA',
  thesis:
    'I see the whole system. I find the friction inside it. Then I build something that makes people’s lives easier.',
  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'Approach', href: '/#approach' },
    { label: 'Background', href: '/#background' },
    { label: 'Contact', href: '/#contact' },
  ],
  resumeUrl: 'https://claude.ai/artifact/RDJ4yzZvoZmGwj6vNn9XU8',
  // Shared chrome on project detail pages, from VetBoard.html / VetIQ.html.
  projectPage: {
    backHref: '/#work',
    backLabel: '← All work',
    footerBackLabel: '← Back to all work',
    nextLabel: (title) => `Next: ${title} →`,
    fullSizeLabel: 'View full size',
  },
  contact: {
    email: 'tracycrossrvt@gmail.com',
    github: 'https://github.com/tracycrossrvt-gif',
    linkedin: 'https://www.linkedin.com/in/tracy-cross-02b827370',
  },
}
