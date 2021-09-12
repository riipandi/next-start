import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

export type BasicLinkProps = {
  children: React.ReactNode
  className?: string
  href: string
  newTab?: boolean
} & React.ComponentPropsWithoutRef<'a'> &
  LinkProps

const BasicLink = ({ children, href, newTab, className, ...props }: BasicLinkProps) => {
  const isNewTab = newTab !== undefined ? newTab : href && !href.startsWith('/') && !href.startsWith('#')

  if (!isNewTab) {
    return (
      <Link href={href}>
        <a {...props} className={className}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <a target='_blank' rel='noopener noreferrer' href={href} {...props} className={clsx(className, 'cursor-[pointer')}>
      {children}
    </a>
  )
}

export default BasicLink
