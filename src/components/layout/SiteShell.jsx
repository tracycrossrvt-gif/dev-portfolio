import { Link } from 'react-router-dom'
import mothmanLogoMain from '../../assets/media/mothman-logo-main.png'
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
            <img className="brand-mark" src={mothmanLogoMain} alt="" aria-hidden="true" />
            <span>{site.name}</span>
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
            <a href="/Tracy_Cross_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteShell
