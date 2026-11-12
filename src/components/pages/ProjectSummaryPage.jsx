import { Link } from 'react-router-dom'
import { site } from '../../content/site'

const pad = (n) => String(n).padStart(2, '0')
const { projectPage } = site

// Optional per-section max-width for the H2, e.g. '20ch'.
const widthStyle = (maxWidth) => (maxWidth ? { maxWidth } : undefined)

// Label + H2 used at the top of most sections.
function SectionHead({ section }) {
  return (
    <>
      <p className="section-label">{section.label}</p>
      <h2 style={widthStyle(section.headingMaxWidth)}>{section.heading}</h2>
    </>
  )
}

function Figure({ figure, priority }) {
  return (
    <figure className="ps-figure">
      <img
        src={figure.src}
        alt={figure.alt}
        width={figure.width}
        height={figure.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
      <figcaption>
        {figure.caption}
        {figure.fullSize ? (
          <a
            className="ps-figure-full"
            href={figure.fullSize.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${projectPage.fullSizeLabel}: ${figure.fullSize.name} (opens in a new tab)`}
          >
            {projectPage.fullSizeLabel}
          </a>
        ) : null}
      </figcaption>
    </figure>
  )
}

// Two columns: label + heading on the left, paragraphs on the right.
// Optional table-name tags and a diagram follow the paragraphs.
function SplitSection({ section, className }) {
  return (
    <section className={`ps-split ${className}`}>
      <div className="ps-split-head">
        <SectionHead section={section} />
      </div>
      <div className="ps-split-body">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {section.tags ? (
          <ul className="tag-list tag-list-roomy" aria-label="Tables">
            {section.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
        {section.figure ? <Figure figure={section.figure} /> : null}
      </div>
    </section>
  )
}

function RowsSection({ section, className }) {
  return (
    <section className={className}>
      <SectionHead section={{ headingMaxWidth: '18ch', ...section }} />
      <div className="ps-row-list">
        {section.rows.map((row, index) => (
          <div key={row.title} className="ps-row">
            <p className="ps-row-num">{pad(index + 1)}</p>
            <h3 style={section.titleSize ? { fontSize: section.titleSize } : undefined}>
              {row.title}
            </h3>
            <p>{row.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// With a label it is a full section of screenshots; without one it is a single
// large screenshot that sits straight under the facts strip.
function FiguresSection({ section, className, index }) {
  if (!section.label) {
    return (
      <div className="ps-lead-figure">
        {section.figures.map((figure) => (
          <Figure key={figure.alt} figure={figure} priority={index === 0} />
        ))}
      </div>
    )
  }
  return (
    <section className={className}>
      <SectionHead section={section} />
      <div className="ps-figure-row">
        {section.figures.map((figure) => (
          <Figure key={figure.alt} figure={figure} />
        ))}
      </div>
    </section>
  )
}

function ListSection({ section, className }) {
  return (
    <section className={`ps-split ${className}`}>
      <div className="ps-split-head">
        <SectionHead section={section} />
      </div>
      <ul className="ps-list-items">
        {section.items.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.note}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

// A grid of small cards, optionally numbered (MMAC users, what shipped).
function CardsSection({ section, className }) {
  return (
    <section className={className}>
      <SectionHead section={section} />
      <div className={section.numbered ? 'ps-cards ps-cards-numbered' : 'ps-cards'}>
        {section.cards.map((card, index) => (
          <div key={card.title} className="ps-card">
            {section.numbered ? <p className="ps-card-num">{pad(index + 1)}</p> : null}
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
      {section.note ? <p className="ps-cards-note">{section.note}</p> : null}
    </section>
  )
}

// Now / Next / Then. An optional diagram sits above it.
function TimelineSection({ section, className }) {
  return (
    <section className={className}>
      <SectionHead section={section} />
      {section.figure ? (
        <div className="ps-timeline-figure">
          <Figure figure={section.figure} />
        </div>
      ) : null}
      <ol className="ps-timeline">
        {section.steps.map((step) => (
          <li key={step.when}>
            <p className={step.current ? 'ps-timeline-when accent' : 'ps-timeline-when'}>
              {step.when}
            </p>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

const sectionComponents = {
  split: SplitSection,
  rows: RowsSection,
  figures: FiguresSection,
  list: ListSection,
  cards: CardsSection,
  timeline: TimelineSection,
}

// Vertical spacing follows the canvas pages: the first section after the
// facts gets the most room, the one after it the least, and the last one
// leaves extra space before the footer.
function spacingClass(position, count) {
  const top = position === 0 ? 'ps-pad-first' : position === 1 ? 'ps-pad-second' : 'ps-pad-rest'
  return position === count - 1 ? `${top} ps-pad-last` : top
}

// One page layout for VetBoard, VetIQ and the MMAC case study. `page` is a
// content file such as content/vetboard.js; sections render in its order.
function ProjectSummaryPage({ page }) {
  const spaced = page.sections.filter((section) => section.label)

  return (
    <div className="project-summary">
      <div className="container ps-top">
        <Link className="ps-back" to={projectPage.backHref}>
          {projectPage.backLabel}
        </Link>
      </div>

      <div className="container">
        <section className="ps-hero">
          <p className="section-label">{page.label}</p>
          <h1 style={widthStyle(page.titleMaxWidth)}>{page.title}</h1>
          <p className="lead">{page.lead}</p>
          <div className="btn-row">
            {page.actions.map((action) => (
              <a
                key={action.href}
                className={`btn btn-${action.variant}`}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {action.label}
              </a>
            ))}
          </div>
        </section>

        <section className="ps-facts" aria-label="Project facts">
          {page.facts.map((fact) => (
            <div key={fact.label} className="ps-fact">
              <p className="ps-fact-label">{fact.label}</p>
              <p className="ps-fact-value">
                {fact.accent ? <span className="accent">{fact.accent}</span> : null}
                {fact.value}
              </p>
            </div>
          ))}
        </section>

        {page.sections.map((section, index) => {
          const Section = sectionComponents[section.type]
          const className = section.label
            ? spacingClass(spaced.indexOf(section), spaced.length)
            : undefined
          return (
            <Section
              key={section.label ?? section.type}
              section={section}
              index={index}
              className={className}
            />
          )
        })}
      </div>

      <footer className="ps-footer">
        <div className="container ps-footer-inner">
          <Link to={projectPage.backHref}>{projectPage.footerBackLabel}</Link>
          <Link to={page.next.path}>{projectPage.nextLabel(page.next.title)}</Link>
        </div>
      </footer>
    </div>
  )
}

export default ProjectSummaryPage
