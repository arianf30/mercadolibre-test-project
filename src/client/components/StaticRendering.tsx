import * as React from 'react'

export default function StaticRendering({ children }) {
  if (typeof window === 'undefined') {
    return <div>{children}</div>
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: '' }}
      suppressHydrationWarning
    />
  )
}
