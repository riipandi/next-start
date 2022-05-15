import Head from 'next/head'
import { FC } from 'react'

import { siteMeta } from '@/config/general'

interface IMetaHeader {
  title?: string
  description?: string
  ogImage?: string
  noindex?: boolean
}

const MetaHead: FC<IMetaHeader> = ({ title, description, ogImage, noindex }) => {
  const defaultTitle = title ? `${title} - ${siteMeta.siteTitle}` : `${siteMeta.siteTitle}`
  const pageTitle = title?.startsWith('>') ? title.substring(1) : defaultTitle
  const pageDescription = description || siteMeta.description
  const isPrivate = noindex || false

  return (
    <Head>
      <meta name='description' content={pageDescription} />
      <meta property='og:locale' content='id_ID' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={pageDescription} />
      <meta property='og:url' content={siteMeta.siteUrl} />
      <meta property='og:site_name' content={siteMeta.siteTitle} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:description' content={pageDescription} />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:image' content={ogImage || siteMeta.imageUrl} />
      {isPrivate && (
        <>
          <meta name='googlebot' content='noimageindex, nofollow, nosnippet' />
          <meta name='robots' content='noimageindex, nofollow, nosnippet' />
        </>
      )}
      <title>{pageTitle}</title>
    </Head>
  )
}
export default MetaHead
