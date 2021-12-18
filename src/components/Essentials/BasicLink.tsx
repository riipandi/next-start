import Link, { LinkProps } from 'next/link'

export type AnchorProps = {
  children: React.ReactNode
  className?: string
  href: string
  newTab?: boolean
} & React.ComponentPropsWithoutRef<'a'> &
  LinkProps

const BasicLink = ({ children, href, newTab = false, className, ...props }: AnchorProps) => {
  const isNewTab = newTab === undefined || href.startsWith('/') || href.valueOf() == '#' ? false : true

  return href.startsWith('/') || href === '' ? (
    <Link href={href} {...props}>
      <a className={className}>{children}</a>
    </Link>
  ) : (
    <a href={href} target={isNewTab ? '_blank' : '_self'} rel='noopener noreferrer' className={className} {...props}>
      {children}
    </a>
  )
}

export default BasicLink
