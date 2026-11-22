import { useEffect, useRef } from 'react'
import { home } from '../../content/home'
import { site } from '../../content/site'

// Contact lives in a native <dialog>: showModal() traps focus, makes the page
// behind it inert, closes on Escape and hands focus back to whatever opened it.
function ContactModal({ open, onClose }) {
  const ref = useRef(null)
  const { contact } = home

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  // A click on the backdrop lands on the <dialog> element itself, not its panel.
  const handleClick = (event) => {
    if (event.target === ref.current) onClose()
  }

  return (
    <dialog
      ref={ref}
      className="contact-modal"
      aria-labelledby="contact-modal-heading"
      onClose={onClose}
      onClick={handleClick}
    >
      <div className="contact-modal-panel">
        <button
          type="button"
          className="contact-modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          <svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true">
            <path
              d="M3.5 3.5l9 9M12.5 3.5l-9 9"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <p className="section-label">{contact.label}</p>
        <h2 id="contact-modal-heading" className="contact-modal-heading">
          {contact.heading}
          <span className="accent">.</span>
        </h2>
        <div className="btn-row">
          <a className="btn btn-accent" href={`mailto:${site.contact.email}`}>
            {site.contact.email}
          </a>
          {contact.links.map((link) => (
            <a
              key={link.label}
              className="btn btn-outline"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </dialog>
  )
}

export default ContactModal
