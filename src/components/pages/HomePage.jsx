import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import coreWorkflowsMvp from '../../assets/media/mmac-core-workflows-mvp.png'
import nocturneFeaturedHome from '../../assets/media/nocturne-featured-home.png'
import taskflowKanbanBoard from '../../assets/media/taskflow-kanban-board.png'
import vetiqPracticeHealthDashboard from '../../assets/media/vetiq-practice-health-dashboard.png'
import winterFogVideo from '../../assets/media/winter-fog.mp4'
import winterFogPoster from '../../assets/media/winter-fog-poster.jpg'
import { projects } from '../../content/projects'
import { site } from '../../content/site'

function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured)
  const secondaryProjects = projects.filter((project) => !project.featured)
  const howIBuild = [
    'I start by understanding the whole system, not just the symptom.',
    'I look for the friction: the bottlenecks, the duplicated work, the unclear handoffs, the places where people have to improvise.',
    'Then I model what actually needs to happen so the solution matches the real workflow, not a theoretical one.',
    'I build the smallest useful thing that removes the friction and gives people clarity.',
    'I test it against reality, because operational systems are always messier than they first appear.',
    'I refine it until the work feels easier, clearer, and more humane.',
  ]
  const aboutPreview = [
    'My background has always been rooted in operations, decision-making, and the realities of complex systems.',
    'Over nearly two decades working inside complex operational environments, I learned to see people, workflows, dependencies, bottlenecks, constraints, and downstream consequences.',
    'That perspective is why I approach software the way I do: not just as a set of features, but as a system that supports real work and reduces friction.',
  ]
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
                {project.slug === 'mmac-hub' ? (
                  <figure className="mmac-evidence-preview">
                    <img
                      src={coreWorkflowsMvp}
                      width="1536"
                      height="1024"
                      loading="lazy"
                      decoding="async"
                      alt="MMAC workflow diagram: Get Help, Vaccine Clinics, and Volunteer & Donate connect to shared operational data."
                    />
                    <figcaption>
                      <strong>Workflow design · In development</strong>
                      <span>Three public paths, with administrator review and shared data underneath.</span>
                      <a href={coreWorkflowsMvp}>View full-size workflow diagram</a>
                    </figcaption>
                  </figure>
                ) : null}
                <div className="project-body">
                  <p className="project-meta">{project.label}</p>
                  <h3>{project.title}</h3>
                  <p>{project.previewBlurb}</p>
                </div>
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
          <div className="project-grid secondary-grid">
            {secondaryProjects.map((project, index) => (
              <article
                key={project.slug}
                className={index === 0 ? 'project-card project-card-secondary' : 'project-card project-card-supporting'}
              >
                {project.slug === 'vetiq' ? (
                  <figure className="project-media project-media-image">
                    <img
                      src={vetiqPracticeHealthDashboard}
                      loading="lazy"
                      decoding="async"
                      alt="Veterinary practice health dashboard showing KPIs, goal progress, and operational health indicators."
                    />
                  </figure>
                ) : project.slug === 'taskflow' ? (
                  <figure className="project-media project-media-image">
                    <img
                      src={taskflowKanbanBoard}
                      loading="lazy"
                      decoding="async"
                      alt="Kanban board with To Do, In Progress, and Done columns containing draggable tasks."
                    />
                  </figure>
                ) : project.slug === 'nocturne' ? (
                  <figure className="project-media project-media-image">
                    <img
                      src={nocturneFeaturedHome}
                      loading="lazy"
                      decoding="async"
                      alt="Horror streaming interface with a featured movie hero, search, navigation, and saved-list state."
                    />
                  </figure>
                ) : null}
                <div className="project-body">
                  <p className="project-meta">{project.label}</p>
                  <h3>{project.title}</h3>
                  <p>{project.previewBlurb}</p>
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live project
                  </a>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    Repository
                  </a>
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

          <ol className="list-plain">
            {howIBuild.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">About</p>
            <h2>Why I think this way.</h2>
          </div>

          <div className="text-stack">
            {aboutPreview.map((item) => (
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

          <div className="cta-row footer-links">
            <a className="button-link" href={`mailto:${site.contact.email}`}>
              Email
            </a>
            <a className="button-link" href={site.contact.github}>
              GitHub
            </a>
            <a className="button-link" href={site.contact.linkedin}>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
