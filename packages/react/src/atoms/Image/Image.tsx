import * as React from 'react'

interface ImageProps {
  src: string
  thumb: string
  alt?: string
  width?: string | number
  height?: string | number
}

const Image: React.FC<ImageProps> = ({ src, thumb, alt = '', width = '', height = '' }): React.ReactElement => {
  // const [isLoaded, setIsLoaded] = React.useState<boolean>(false)
  const className = 'dsmeli-image-container'

  return <>
    {/* <img
      className={className}
      style={{ display: `${isLoaded ? 'none' : 'block'}` }}
      alt={alt}
      height={height}
      width={width}
      src={thumb}
    /> */}
    <img
      // onLoad={() => setIsLoaded(true)}
      className={className}
      // style={{ display: `${isLoaded ? 'block' : 'none'}` }}
      alt={alt}
      height={height}
      width={width}
      src={src}
    />
  </>
}

export default Image
