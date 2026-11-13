import { useLayoutEffect } from 'react'

// Section reveals: when a section label scrolls into view it gets `is-revealed`,
// and CSS slides the label up with its heading 120ms behind (index.css).
// Each label animates once. Labels inside `exclude` (the hero, which has its
// own load animation) are left alone.
//
// `rootRef` points at the page wrapper. The hook marks it `reveal-ready` before
// the first paint, so content is only ever hidden once this code is running.
// Under reduced motion the CSS hides nothing, so this is harmless there.
export function useReveal(rootRef, exclude = '.no-reveal') {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const labels = [...root.querySelectorAll('.section-label')].filter(
      (label) => !label.closest(exclude),
    )
    labels.forEach((label) => label.setAttribute('data-reveal', ''))
    root.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      // Fire a little before the label reaches the bottom edge.
      { rootMargin: '0px 0px -10% 0px' },
    )
    labels.forEach((label) => observer.observe(label))

    return () => observer.disconnect()
  }, [rootRef, exclude])
}
