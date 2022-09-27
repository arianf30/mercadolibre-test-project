import * as React from 'react'

interface PropsSR {
  children: any
}

const StaticRendering: React.FC<PropsSR> = ({ children }): React.ReactElement => {
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

export default StaticRendering
