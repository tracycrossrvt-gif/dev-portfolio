import { projects } from '../../content/projects'

function MmacCaseStudyPage() {
  const project = projects.find((item) => item.slug === 'mmac-hub')

  if (!project) {
    return null
  }

  return (
    <section className="page-section">
      <div className="container narrow-container">
        <p className="eyebrow">Case study</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.summary}</p>

        <div className="info-block">
          <h2>What this project is</h2>
          <p>
            MMAC Hub is the flagship portfolio project and the clearest example of the
            developer’s systems-first product approach: understand the workflow, remove
            friction, and present operational information in a way people can actually use.
          </p>
        </div>

        <div className="info-block">
          <h2>Why it matters</h2>
          <p>
            The work demonstrates a careful balance between operational depth, product
            judgment, and front-end execution. It is built to show how messy real-world
            systems can be translated into structure, clarity, and better decision-making.
          </p>
        </div>

        <div className="info-block">
          <h2>What this page establishes</h2>
          <ul className="list-plain">
            <li>Editorial, operational framing</li>
            <li>Systems thinking and product clarity</li>
            <li>Frontend craftsmanship with restrained design language</li>
            <li>Real-world workflow translation into software</li>
          </ul>
        </div>

        <div className="info-block">
          <h2>Project links</h2>
          <div className="project-links">
            <a href={project.liveUrl}>Live project</a>
            <a href={project.repoUrl}>Repository</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MmacCaseStudyPage
