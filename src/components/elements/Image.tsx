import getConfig from 'next/config'
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
  const { publicRuntimeConfig } = getConfig()
  const { src, ...rest } = props

  if (publicRuntimeConfig.imageLoader === 'cloudflare') {
    return <NextImage loader={cloudflareLoader} src={src.src} {...rest} />
  }

  return <NextImage {...props} />
}

export default Image
