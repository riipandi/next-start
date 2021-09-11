import Link from 'next/link'

interface Props {
  children: React.ReactNode
  className?: string
  href: string
  newTab?: boolean
}

const NextLink = ({ children, ...props }: Props) => {
  return <Link {...props}>{children}</Link>
}

export default NextLink
