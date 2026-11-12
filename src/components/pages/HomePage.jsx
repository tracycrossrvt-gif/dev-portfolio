import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import winterFogVideo from '../../assets/media/winter-fog.mp4'
import winterFogPoster from '../../assets/media/winter-fog-poster.jpg'
import stormVideo from '../../assets/media/about-western-nc-storm.mp4'
import stormPoster from '../../assets/media/about-western-nc-storm-poster.jpg'
import { home } from '../../content/home'
import { projects } from '../../content/projects'
import { site } from '../../content/site'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const pad = (n) => String(n).padStart(2, '0')

// Hero background: plays straight away unless the visitor prefers reduced motion,
// in which case the poster image stays on screen.
function HeroVideo() {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const video = ref.current
    if (!video) return
    video.muted = true
    if (reduced) video.pause()
    else video.play().catch(() => {})
  }, [reduced])

  return (
    <video
      ref={ref}
      className="bg-video"
      src={winterFogVideo}
      poster={winterFogPoster}
      autoPlay={!reduced}
      muted
      loop
      playsInline
      aria-hidden="true"
      tabIndex={-1}
    />
  )
}

// Contact background: a 6 MB file, so nothing loads until the section is near
// the viewport. It plays while visible. Under reduced motion it never loads and
// the poster stays on screen.
function ContactVideo({ sectionRef }) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const video = ref.current
    const section = sectionRef.current
    if (!video || !section) return
    video.muted = true
    if (reduced) {
      video.pause()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.preload = 'auto'
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: '200px 0px' },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [reduced, sectionRef])

  return (
    <video
      ref={ref}
      className="bg-video"
      src={stormVideo}
      poster={stormPoster}
      preload="none"
      muted
      loop
      playsInline
      aria-hidden="true"
      tabIndex={-1}
    />
  )
}

function ProjectCard({ project, index }) {
  return (
    <article className="work-card">
      <div className="work-card-text">
        <p className="work-card-meta">
          {pad(index + 1)} / {pad(projects.length)} ·{' '}
          <span className="accent">{project.status}</span>
        </p>
        <h3>{project.title}</h3>
        <p className="work-card-oneliner">{project.oneLiner}</p>
        <ul className="work-card-bullets">
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <ul className="tag-list" aria-label="Skills">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="work-card-links">
          {project.detailPath ? (
            <Link className="btn btn-accent btn-sm" to={project.detailPath}>
              {project.detailLabel}
            </Link>
          ) : null}
          <a
            className={project.detailPath ? 'text-link' : 'btn btn-accent btn-sm'}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {home.work.liveLabel}
          </a>
          <a className="text-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            {home.work.repoLabel}
          </a>
        </div>
      </div>
      <img
        className="work-card-shot"
        src={project.screenshot.src}
        width={project.screenshot.width}
        height={project.screenshot.height}
        alt={project.screenshotAlt}
        loading={index === 0 ? 'eager' : 'lazy'}
        decoding="async"
      />
    </article>
  )
}

function HomePage() {
  const { hash } = useLocation()
  const contactRef = useRef(null)
  const { hero, trackRecord, ticker, work, approach, background, contact } = home

  // Arriving from another page via /#section: scroll once the section exists.
  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  return (
    <div className="home">
      <section className="home-hero">
        <HeroVideo />
        <div className="bg-overlay" aria-hidden="true" />
        <div className="container home-hero-inner">
          <p className="home-hero-label">{hero.label}</p>
          <h1>
            {hero.title}
            <span className="accent">.</span>
          </h1>
          <div className="home-hero-bottom">
            <p className="lead">{hero.lead}</p>
            <div className="btn-row">
              <a className="btn btn-accent" href={hero.primary.href}>
                {hero.primary.label}
              </a>
              <a className="btn btn-outline" href={hero.secondary.href}>
                {hero.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="track-record" aria-label="Track record">
          {trackRecord.map((item) => (
            <div key={item.value} className="track-record-item">
              <p className="track-record-value">{item.value}</p>
              <p className="track-record-text">{item.text}</p>
            </div>
          ))}
        </section>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {ticker.map((item) => (
            <span key={item} className="ticker-item">
              <span>{item}</span>
              <span className="accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section id="work" className="container home-section work-section">
        <p className="section-label">{work.label}</p>
        <h2 className="work-heading">{work.heading}</h2>
        <div className="work-stack">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="approach" className="container home-section approach-section">
        <div className="approach-head">
          <div>
            <p className="section-label">{approach.label}</p>
            <h2>{approach.heading}</h2>
          </div>
          <p className="approach-intro">{approach.intro}</p>
        </div>
        <div className="numbered-rows">
          {approach.rows.map((row, index) => (
            <div key={row.title} className="numbered-row">
              <p className="numbered-row-num">{pad(index + 1)}</p>
              <h3>{row.title}</h3>
              <div>
                <p className="numbered-row-body">{row.body}</p>
                <p className="numbered-row-tags">{row.tags}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="background" className="container home-section background-section">
        <div className="background-intro">
          <p className="section-label">{background.label}</p>
          <h2>{background.heading}</h2>
          <p>{background.intro}</p>
        </div>
        <ol className="timeline">
          {background.timeline.map((item) => (
            <li key={item.when}>
              <span className={item.upcoming ? 'timeline-when accent' : 'timeline-when'}>
                {item.when}
              </span>
              <span>
                <strong>{item.title}</strong> <span className="timeline-text">{item.text}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section id="contact" className="contact-section" ref={contactRef}>
        <ContactVideo sectionRef={contactRef} />
        <div className="bg-overlay" aria-hidden="true" />
        <div className="container contact-inner">
          <p className="section-label">{contact.label}</p>
          <h2 className="contact-heading">
            {contact.heading}
            <span className="accent">.</span>
          </h2>
          <div className="btn-row">
            <a className="btn btn-accent" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
            {contact.links.map((link) => (
              <a
                key={link.label}
                className="btn btn-outline"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
