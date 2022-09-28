import React from 'react'
import { Spacing } from '@meli-project/foundation'

export interface MarginProps {
  space?: keyof typeof Spacing
  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean
  children: any
}

const Margin: React.FC<MarginProps> = ({ space = 'xxxs', children, left, right, top, bottom }) => {
  let className = ''

  if (left === null && right === null && top === null && bottom === null) {
    className = `dse-margin-${space}`
  }

  if (left !== null) {
    className = `${className} dse-margin-left-${space}`
  }

  if (right !== null) {
    className = `${className} dse-margin-right-${space}`
  }

  if (top !== null) {
    className = `${className} dse-margin-top-${space}`
  }

  if (bottom !== null) {
    className = `${className} dse-margin-bottom-${space}`
  }

  return <div className={className}>
    {children}
  </div>
}

export default Margin
