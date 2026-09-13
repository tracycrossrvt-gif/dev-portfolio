import { useEffect, useState } from 'react'
import stormVideo from '../../assets/media/about-western-nc-storm.mp4'
import { about } from '../../content/about'
import { site } from '../../content/site'

function AboutPage() {
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
    <section className="page-section">
      <div className="container narrow-container about-page">
        <div className="about-intro">
          <p className="eyebrow">About</p>
          <h1>{about.heading}</h1>
          <p className="about-lead">{about.lead}</p>
        </div>

        <div className="text-stack about-story">
          <p>{about.intro}</p>
          {about.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ul className="list-plain about-observations">
          {about.observations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <section className="about-section">
          <p className="eyebrow">Operations</p>
          <h2>{about.operations.heading}</h2>

          <div className="text-stack">
            {about.operations.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="list-plain about-list">
            {about.operations.questions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="about-emphasis">{about.operations.emphasis}</p>
        </section>

        <div className="about-video-block">
          <div className="about-video-copy">
            <p className="eyebrow">Western North Carolina</p>
            <h2>Where I build from.</h2>
          </div>

          <video
            className="about-video"
            src={stormVideo}
            muted
            playsInline
            loop={!prefersReducedMotion}
            autoPlay={!prefersReducedMotion}
            preload="metadata"
            aria-hidden="true"
          />
        </div>

        <section className="about-section">
          <p className="eyebrow">Why software</p>
          <h2>{about.whySoftware.heading}</h2>

          <div className="text-stack">
            {about.whySoftware.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="about-emphasis">{about.whySoftware.emphasis}</p>
        </section>

        <section className="about-section">
          <p className="eyebrow">Evidence</p>
          <h2>{about.evidence.heading}</h2>

          <div className="text-stack">
            {about.evidence.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-project-evidence" aria-label="Project evidence statements">
            {about.evidence.projects.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h2>{about.person.heading}</h2>

          <div className="text-stack">
            {about.person.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="about-section about-close">
          <h2>{about.close.heading}</h2>

          <div className="text-stack">
            {about.close.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="cta-row">
            <a className="button-link" href={`mailto:${site.contact.email}`}>
              Email
            </a>
          </div>
        </section>
      </div>
    </section>
  )
}

export default AboutPage
