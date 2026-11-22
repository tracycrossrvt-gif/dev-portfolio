import { useCallback, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import mothmanMark from '../../assets/media/mothman-mark.webp'
import { site } from '../../content/site'
import ContactModal from './ContactModal'
import { ContactModalContext } from './contactModalContext'

function SiteShell({ children }) {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = useCallback(() => setContactOpen(true), [])
  const closeContact = useCallback(() => setContactOpen(false), [])

  // A new page starts at the top, unless the link points at a section.
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  // Contact used to be a section, so old /#contact links open the modal instead.
  useEffect(() => {
    if (hash !== '#contact') return
    setContactOpen(true)
    navigate({ pathname, hash: '' }, { replace: true })
  }, [hash, pathname, navigate])

  return (
    <ContactModalContext.Provider value={openContact}>
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
            {site.nav.map((item) =>
              item.opensContact ? (
                <button
                  key={item.label}
                  type="button"
                  className="nav-link"
                  aria-haspopup="dialog"
                  onClick={openContact}
                >
                  {item.label}
                </button>
              ) : (
                <a key={item.href} className="nav-link" href={item.href}>
                  {item.label}
                </a>
              ),
            )}
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

        <ContactModal open={contactOpen} onClose={closeContact} />
      </div>
    </ContactModalContext.Provider>
  )
}

export default SiteShell
