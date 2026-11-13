import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import mothmanMark from '../../assets/media/mothman-mark.webp'
import { site } from '../../content/site'

function SiteShell({ children }) {
  const { pathname, hash } = useLocation()

  // A new page starts at the top, unless the link points at a section.
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="site-nav" aria-label="Main">
          <Link className="brand" to="/" aria-label={`${site.name}, home`}>
            {/* Decorative: the link is already named. A 2.8 KB copy of the
                favicon logo, sized for 28px at up to 3x density. */}
            <img className="brand-mark" src={mothmanMark} alt="" width="28" height="28" />
            <span>
              TC<span className="accent">.</span>
            </span>
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
