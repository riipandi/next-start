import Head from 'next/head'
import { FC } from 'react'
import { siteMeta } from '@/config/general'

interface IMetaHeader {
  title: string
  description?: string
  ogImage?: string
  noindex?: boolean
}

const MetaHead: FC<IMetaHeader> = ({ title, description, ogImage, noindex }) => {
  const isPrivate = noindex || false

  return (
    <Head>
      <meta name='description' content={description} />
      <meta property='og:locale' content='id_ID' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={siteMeta.siteUrl} />
      <meta property='og:site_name' content={siteMeta.siteTitle} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:image' content={ogImage || siteMeta.imageUrl} />
      {isPrivate && (
        <>
          <meta name='googlebot' content='noimageindex, nofollow, nosnippet' />
          <meta name='robots' content='noimageindex, nofollow, nosnippet' />
        </>
      )}
      <title>{title}</title>
    </Head>
  )
}
export default MetaHead
