import * as React from 'react'
import StaticRendering from './StaticRendering'

export default function DynamicRendering({ children, isBot }) {
  // BOT: return SSR Component
  if (isBot === true) {
    return <StaticRendering>
      {children}
    </StaticRendering>
  }

  // USER: return CSR Component
  if (typeof window !== 'undefined') {
    return <div>{children}</div>
  } else { // Is Server return null
    return <div />
  }
}
