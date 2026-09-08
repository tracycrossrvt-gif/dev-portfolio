import { about } from '../../content/about'
import { site } from '../../content/site'

function AboutPage() {
  return (
    <section className="page-section">
      <div className="container narrow-container">
        <p className="eyebrow">About</p>
        <h1>Built from systems thinking, operations, and product judgment.</h1>

        <div className="text-stack">
          <p>{about.intro}</p>
          {about.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="info-block">
          <h2>Development approach</h2>
          <ul className="list-plain">
            {about.approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-block">
          <h2>Relevant context</h2>
          <ul className="list-plain">
            {about.experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-block">
          <h2>Technologies where useful</h2>
          <ul className="list-plain">
            {about.technologies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-block">
          <h2>Contact</h2>
          <p>
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
