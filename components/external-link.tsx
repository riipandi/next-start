import { FC } from 'react'

import { cn } from '@/utils/helpers'

interface ExternalLinkProps {
  children: React.ReactNode
  href: string
  className?: string
}

export const ExternalLink: FC<ExternalLinkProps> = ({ children, href, className }) => {
  return (
    <a href={href} className={cn(className)} rel='noopener noreferrer' target='_blank'>
      {children}
    </a>
  )
}
