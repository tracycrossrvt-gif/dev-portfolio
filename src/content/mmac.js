import assistanceIntakeSchema from '../assets/media/mmac-assistance-intake-schema.png'
import coreWorkflowsMvp from '../assets/media/mmac-core-workflows-mvp.png'
import { screenshots } from './screenshots'

// /case-studies/mmac-hub. Copy is verbatim from docs/redesign/reference/MMAC.html.
// The two diagrams keep the alt text from the current MmacCaseStudyPage; their
// captions reuse sentences from that page\'s existing figure captions.
// `sections` is listed in page order; each `type` maps to one layout block.
export const mmac = {
  slug: 'mmac-hub',
  path: '/case-studies/mmac-hub',
  label: 'MMAC Hub · Case study',
  title: 'They asked for a website. They needed a system.',
  lead: 'Macon Moves Animal Care helps families get affordable veterinary care in Macon, Jackson and Rabun Counties. As it grew across partner hospitals, volunteers, clinics and assistance programs, it needed a way to coordinate the work behind the website.',
  actions: [
    { label: 'Visit live demo ↗', href: 'https://mmac-hub.vercel.app/', variant: 'accent' },
    {
      label: 'Repository ↗',
      href: 'https://github.com/tracycrossrvt-gif/mmac-hub',
      variant: 'outline',
    },
  ],
  facts: [
    { label: 'Role', value: 'Product discovery, data model, frontend' },
    { label: 'Users', value: 'Public, MMAC admin, hospital staff, volunteers' },
    // `accent` renders in gold ahead of `value`.
    { label: 'Status', accent: 'Live demo', value: ', awaiting MMAC sign-off' },
    { label: 'Stack', value: 'Next.js · Supabase (PostgreSQL) · Zod · Vercel' },
  ],
  sections: [
    {
      type: 'figures',
      figures: [
        {
          src: screenshots.mmacHome,
          alt: 'MMAC Hub public homepage: Real Care for Real Life, with buttons to get help and learn how MMAC helps',
          caption:
            'The branded public site, live as a portfolio demo. A banner asks visitors not to submit real information.',
        },
      ],
    },
    {
      type: 'split',
      label: '01 · The problem',
      heading: 'The website was the easy part.',
      paragraphs: [
        'Delivering care meant coordinating requests, animals, counties, partner hospitals, schedules, services, volunteers, clinics and financial programs. Putting forms online wouldn\'t fix that. I needed to understand who needs what information, who makes which decisions, and where things got stuck.',
        'Years of running corporate veterinary hospitals meant I knew many of these workflows from the inside. That made it more important not to design around my own assumptions. MMAC\'s real processes and people were the source of truth.',
      ],
    },
    {
      type: 'cards',
      label: '02 · One system, four kinds of users',
      heading: 'I started with people and permissions, not screens.',
      numbered: true,
      cards: [
        {
          title: 'The public',
          body: 'Ask for help without knowing veterinary terms or how MMAC works inside.',
        },
        {
          title: 'MMAC admin',
          body: 'Controls availability, reviews requests and handles exceptions.',
        },
        {
          title: 'Hospital staff',
          body: 'Schedule approved cases without seeing more than they need.',
        },
        {
          title: 'Volunteers',
          body: 'Get resources and expectations, with no admin access.',
        },
      ],
    },
    {
      type: 'rows',
      label: '03 · Product rules',
      heading: 'Turning what people know into rules the software can follow.',
      rows: [
        {
          title: 'Keep complexity with the system',
          body: 'People choose the help they need, not a clinical category. Prescreening adapts by species, like heartworm testing for dogs and FeLV/FIV for cats, without asking the requester to know that.',
        },
        {
          title: 'Model capacity the way MMAC controls it',
          body: 'The administrator decides what\'s offered. Weekdays are the default and weekends can be turned on. The public sees what\'s available, not the partner details behind it.',
        },
        {
          title: 'Permissions are workflow design',
          body: 'Each role gets enough access to do its job and no more. That was decided in the model before it became an interface.',
        },
        {
          title: 'Capture now what you\'ll need to prove later',
          body: 'As a nonprofit, MMAC will need to connect spending to programs, funding and geography. The data is captured as the work happens so reports don\'t mean rebuilding history.',
        },
      ],
    },
    {
      type: 'split',
      label: '04 · The foundation',
      heading: 'Intake is the gate to everything.',
      paragraphs: [
        'Before MMAC can coordinate care, it needs a reliable picture of who\'s asking, which animals are involved and what they need. So the Assistance Intake data model came first.',
        'It keeps people, households, animals, requests, requested services and prescreening as separate records instead of one big form. Later workflows like scheduling, providers and reporting build on that same foundation.',
      ],
      tags: [
        'people',
        'households',
        'animals',
        'assistance_requests',
        'requested_services',
        'prescreening',
      ],
      // Shown below the table-name tags.
      figure: {
        src: assistanceIntakeSchema,
        width: 1536,
        height: 1024,
        alt: 'Implemented MMAC Hub Assistance Intake relational schema showing relationships between people, households, animals, assistance requests, requested services, and prescreening.',
        caption:
          'The relational model separates people, households, animals, requests, services, and prescreening so later workflows can build on shared operational data.',
      },
    },
    {
      type: 'cards',
      label: '05 · What shipped · New',
      heading: 'From schema to a live site MMAC can review.',
      numbered: false,
      cards: [
        {
          title: 'A working intake form',
          body: 'Fixed the submission blocker caused by hidden field errors and late validation, and made error messages clear and accessible.',
        },
        {
          title: 'A database I can trust',
          body: 'Backed up, rehearsed and rebuilt the database so every migration is recorded, then verified permissions and admin access.',
        },
        {
          title: 'A branded public site',
          body: 'Home, Our Programs, Get Involved and Get Help, checked against MMAC\'s real counties, services, contacts and donation link.',
        },
      ],
      note: 'Deployed to Vercel and tested end to end on a phone: browsing, donating, submitting a request, signing in as admin and updating its status.',
    },
    {
      type: 'timeline',
      label: '06 · What\'s next',
      heading: 'Rolled out in phases, at MMAC\'s pace.',
      // Shown above the Now / Next / Then timeline. This diagram shows planned
      // workflows, so it lives here rather than under "What shipped".
      figure: {
        src: coreWorkflowsMvp,
        width: 1536,
        height: 1024,
        alt: 'Designed MMAC Hub product model showing the core user paths and shared operational data required underneath assistance intake, vaccine clinics, volunteer and donation workflows, and the administrator portal.',
        caption:
          'This artifact maps the core user paths and the shared operational data required underneath them. Planned workflows, not shipped interfaces.',
      },
      steps: [
        {
          when: 'Now',
          current: true,
          title: 'Review and sign-off',
          body: 'MMAC reviews the live demo and approves it.',
        },
        {
          when: 'Next',
          current: false,
          title: 'MMAC\'s own production site',
          body: 'A separate database, email notifications, a privacy notice and admin access for MMAC\'s team.',
        },
        {
          when: 'Then',
          current: false,
          title: 'The full data model, phase by phase',
          body: 'Scheduling, providers and reporting added one at a time on the intake foundation.',
        },
      ],
    },
  ],
  next: { title: 'VetBoard', path: '/work/vetboard' },
}
