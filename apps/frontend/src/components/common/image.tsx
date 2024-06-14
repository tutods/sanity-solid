import {createSignal, JSX} from 'solid-js'

type ImageProps = JSX.ImgHTMLAttributes<HTMLImageElement> & {
  /**
   * Image to show while the original image is loading.
   */
  loadingImage?: string
}

export function Image({loadingImage, alt, src, srcSet, ...props}: ImageProps) {
  const [isLoading, setIsLoading] = createSignal(true)

  // TODO: generage blur image while is loading
  // console.log('Q', isLoading() ? loadingImage : src)

  return <img
    {...props}
    src={isLoading() ? loadingImage : src}
    loading={'lazy'}
    alt={alt}
    srcSet={isLoading() ? '' : srcSet}
    onLoad={() => {
      setIsLoading(false)
    }}
  />
}