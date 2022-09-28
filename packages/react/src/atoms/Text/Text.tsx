import * as React from 'react'
import { FontSize } from '@meli-project/foundation'

export interface TextProps {
  size?: keyof typeof FontSize
  children: string
}

const Text: React.FC<TextProps> = ({ size = FontSize.base, children }) => {
  const className = `dsmeli-text dsmeli-text-${size}`

  return <p className={className}>{children}</p>
}

export default Text
