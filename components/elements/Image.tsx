/* eslint-disable jsx-a11y/alt-text */
import { default as NextImage } from 'next/image'

const cfImageLoader = ({ src, width, quality }: { src: any; width: number; quality?: number }) => {
  const workersUrl = 'https://images.webtools.id'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const pattern = new RegExp('^(https?|ftp)://')
  const imgUrl = !pattern.test(src) ? `${siteUrl}${src}` : src
  const imgQuality = quality || 75

  return `${workersUrl}?width=${width}&quality=${imgQuality}&image=${imgUrl}`
}

export default function Image(props: any) {
  if (process.env.NODE_ENV === 'development') {
    return <NextImage unoptimized={true} {...props} />
  } else {
    return <NextImage {...props} loader={cfImageLoader} />
  }
}
