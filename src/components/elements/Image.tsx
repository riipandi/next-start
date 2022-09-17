import { default as NextImage } from 'next/image'

type Props = {
  src: string
  width?: number
  quality?: number
}

const normalizeSrc = (src: string) => (src.startsWith('/') ? src.slice(1) : src)

const cloudflareLoader = ({ src, width, quality }: Props) => {
  const params = [`width=${width ?? 500}`, `quality=${quality ?? 80}`]
  const imgUrl = `/cdn-cgi/image/${params}/${normalizeSrc(src)}`
  return process.env.CF_PAGES === '1' ? imgUrl : src
}

const Image = (props: any) => {
  const { src, ...rest } = props

  if (process.env.IMAGE_LOADER === 'custom') {
    return <NextImage loader={cloudflareLoader} src={src.src} {...rest} unoptimized />
  }

  return <NextImage {...props} />
}

export default Image
