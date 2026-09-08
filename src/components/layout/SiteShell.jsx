import { Link } from 'react-router-dom'
import { site } from '../../content/site'

function SiteShell({ children }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/" aria-label="Home">
            {site.name}
          </Link>

          <nav className="site-nav" aria-label="Primary navigation">
            {site.nav.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content" className="site-main">
        {children}
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>{site.title}</p>
          <div className="footer-links">
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            <a href={site.contact.github}>GitHub</a>
            <a href={site.contact.linkedin}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteShell
