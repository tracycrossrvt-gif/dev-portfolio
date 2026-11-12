import { Link } from 'react-router-dom'
import { site } from '../../content/site'

const pad = (n) => String(n).padStart(2, '0')
const { projectPage } = site

// Label + H2 used at the top of most sections.
function SectionHead({ label, heading, className }) {
  return (
    <>
      <p className="section-label">{label}</p>
      <h2 className={className}>{heading}</h2>
    </>
  )
}

// A two-column block: label + heading on the left, paragraphs on the right.
function SplitSection({ section }) {
  return (
    <section className="ps-section ps-split">
      <div className="ps-split-head">
        <SectionHead label={section.label} heading={section.heading} />
      </div>
      <div className="ps-split-body">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

function RowsSection({ section }) {
  return (
    <section className="ps-section ps-rows">
      <SectionHead label={section.label} heading={section.heading} className="ps-heading-narrow" />
      <div className="ps-row-list">
        {section.rows.map((row, index) => (
          <div key={row.title} className="ps-row">
            <p className="ps-row-num">{pad(index + 1)}</p>
            <h3>{row.title}</h3>
            <p>{row.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Figure({ figure, priority }) {
  return (
    <figure className="ps-figure">
      <img
        src={figure.src}
        alt={figure.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
      <figcaption>{figure.caption}</figcaption>
    </figure>
  )
}

// With a label it is a full section of screenshots; without one it is a single
// large screenshot that sits straight under the facts strip.
function FiguresSection({ section, index }) {
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
    <section className="ps-section ps-figures">
      <SectionHead label={section.label} heading={section.heading} />
      <div className="ps-figure-row">
        {section.figures.map((figure) => (
          <Figure key={figure.alt} figure={figure} />
        ))}
      </div>
    </section>
  )
}

function ListSection({ section }) {
  return (
    <section className="ps-section ps-split ps-list">
      <div className="ps-split-head">
        <SectionHead label={section.label} heading={section.heading} />
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

const sectionComponents = {
  split: SplitSection,
  rows: RowsSection,
  figures: FiguresSection,
  list: ListSection,
}

// One page layout for the VetBoard and VetIQ summaries; `page` is a content
// file such as content/vetboard.js. Sections render in the order listed there.
function ProjectSummaryPage({ page }) {
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
          <h1>{page.title}</h1>
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
          return <Section key={section.label ?? section.type} section={section} index={index} />
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
