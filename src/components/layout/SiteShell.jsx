import { Link } from 'react-router-dom'
import { site } from '../../content/site'

function SiteShell({ children }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="site-nav" aria-label="Main">
          <Link className="brand" to="/" aria-label={`${site.name}, home`}>
            TC<span className="accent">.</span>
          </Link>
          {site.nav.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
          <a
            className="btn btn-light"
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </header>

      <main id="main-content" className="site-main">
        {children}
      </main>

      <footer className="container site-footer">
        <span>
          {site.name} · {site.title} · {site.location}
        </span>
        <span>© 2026</span>
      </footer>
    </div>
  )
}

export default SiteShell
