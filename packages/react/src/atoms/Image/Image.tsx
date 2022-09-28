import * as React from 'react'

interface ImageProps {
  src?: string
  thumb: string
  alt?: string
  width?: string | number
  height?: string | number
}

const Image: React.FC<ImageProps> = ({ src, thumb, alt = '', width = '', height = '' }): React.ReactElement => {
  const className = 'dsmeli-image-container'
  const handler = (e: any): void => {
    const url = new URL(e.target.src)
    if (url.pathname === thumb) {
      e.target.src = src
    }
  }

  return <>
    <img
      onLoad={(e) => handler(e)}
      className={className}
      alt={alt}
      height={height}
      width={width}
      src={thumb}
    />
  </>
}

export default Image
