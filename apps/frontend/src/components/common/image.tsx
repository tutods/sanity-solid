import {createSignal, JSX} from 'solid-js'

type ImageProps = Pick<JSX.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {}

export function Image({src, alt}: ImageProps) {
  const [isLoading, setIsLoading] = createSignal(false)

  // TODO: generage blur image while is loading

  return <img
    loading={'lazy'}
    src={src}
    srcSet={""}
    alt={alt}
    onLoad={() => setIsLoading(false)}
  />

}