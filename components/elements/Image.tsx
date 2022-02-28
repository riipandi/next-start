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
  // Use custom image loader when building for production outside Vercel.
  const outsideVercel = process.env.ENV === 'production' && process.env.VERCEL !== '1'
  return outsideVercel ? <NextImage {...props} loader={cfImageLoader} /> : <NextImage {...props} />
}
