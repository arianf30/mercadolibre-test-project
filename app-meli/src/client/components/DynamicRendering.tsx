import * as React from 'react'
import StaticRendering from './StaticRendering'

interface PropsDR {
  children: any
  isBot: boolean
}

const DynamicRendering: React.FC<PropsDR> = ({ children, isBot }): React.ReactElement => {
  // BOT: return SSR Component
  if (isBot) {
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

export default DynamicRendering
