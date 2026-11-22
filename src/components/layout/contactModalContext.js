import { createContext, useContext } from 'react'

// Lets any page open the contact modal that SiteShell owns.
export const ContactModalContext = createContext(() => {})

export const useOpenContact = () => useContext(ContactModalContext)
