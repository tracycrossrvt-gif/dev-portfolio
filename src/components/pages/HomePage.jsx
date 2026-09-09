import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import winterFogVideo from '../../assets/media/winter-fog.mp4'
import winterFogPoster from '../../assets/media/winter-fog-poster.jpg'
import { projects } from '../../content/projects'
import { about } from '../../content/about'
import { site } from '../../content/site'

function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured)
  const secondaryProjects = projects.filter((project) => !project.featured)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    updatePreference()

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updatePreference)

      return () => {
        mediaQuery.removeEventListener('change', updatePreference)
      }
    }

    mediaQuery.addListener(updatePreference)

    return () => {
      mediaQuery.removeListener(updatePreference)
    }
  }, [])

  return (
    <>
      <section className="page-section hero-section">
        <div className="container hero-stage">
          <div className="hero-copy">
            <p className="eyebrow">Systems thinking / product judgment / frontend craft</p>
            <h1>{site.title}</h1>
            <p className="lead">{site.thesis}</p>
          </div>

          <div className="hero-media" aria-hidden="true">
            {prefersReducedMotion ? (
              <img src={winterFogPoster} alt="" />
            ) : (
              <video
                src={winterFogVideo}
                poster={winterFogPoster}
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Selected work</p>
            <h2>Systems, workflows, and product judgment.</h2>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article key={project.slug} className="project-card project-card-featured">
                <p className="project-meta">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.previewBlurb}</p>
                <div className="project-links">
                  {project.caseStudyPath ? (
                    <Link to={project.caseStudyPath}>Read case study</Link>
                  ) : (
                    <a href={project.liveUrl}>Live project</a>
                  )}
                  <a href={project.repoUrl}>Repository</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Additional work</p>
            <h2>Strong project presentations with room to grow.</h2>
          </div>

          <div className="project-grid secondary-grid">
            {secondaryProjects.map((project) => (
              <article key={project.slug} className="project-card">
                <p className="project-meta">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.previewBlurb}</p>
                <div className="project-links">
                  <a href={project.liveUrl}>Live project</a>
                  <a href={project.repoUrl}>Repository</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">How I build</p>
            <h2>I look for the friction, then I shape the system around it.</h2>
          </div>

          <div className="text-stack">
            {about.approach.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">About</p>
            <h2>Operational experience, product judgment, and thoughtful software.</h2>
          </div>

          <div className="text-stack">
            {about.story.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <div className="cta-row">
            <Link className="button-link" to="/about">
              Read full bio
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something that makes people’s lives easier.</h2>
          </div>

          <div className="cta-row">
            <a className="button-link" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
