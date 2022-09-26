import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useInView } from 'react-intersection-observer'

const EMPTY_HTML = { __html: '' }
const isServer = typeof window === 'undefined'

export default function ProgressiveHydration({ children }) {
  const { ref, inView } = useInView()

  React.useEffect(
    function () {
      const { current: el } = ref
      // CLIENT:
      // If we want to force the hydration OR the element is near screen
      // then we hydrate the content to get the functionality ready
      if (inView) {
        const action = el.hasChildNodes() ? 'hydrate' : 'render'
        ReactDOM[action](children, el)
      }
    },
    [children, inView]
  )

  // SERVER: Just render the content as usual
  if (isServer) {
    return <div ref={ref}>{children}</div>
  }

  // CLIENT: Avoid hydration until we say so
  return (
    <div
      ref={ref}
      suppressHydrationWarning
      dangerouslySetInnerHTML={EMPTY_HTML}
    />
  )
}