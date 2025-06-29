/**
 * A custom Link component that extends the functionality of the Next.js Link component.
 * It adds support for opening links in a new tab and applies a consistent set of styles.
 *
 * Example usage:
 *
 * ```tsx
 * <Link href="/path" className="custom-class">Internal Page</Link>
 * <Link href="https://example.com" newTab>External Link</Link>
 * ```
 *
 */

import type { LinkProps as RouterLinkProps } from 'next/link'
import { default as RouterLink } from 'next/link'
import * as React from 'react'

interface LinkProps extends Omit<RouterLinkProps, 'to'> {
  newTab?: boolean
}

const Link = React.forwardRef(function Component(
  props: LinkProps & React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  const { className, newTab, ...rest } = props
  const NEW_TAB_REL = 'noopener noreferrer'
  const NEW_TAB_TARGET = '_blank'
  const DEFAULT_TARGET = '_self'

  return (
    <RouterLink
      className={className}
      target={newTab ? NEW_TAB_TARGET : DEFAULT_TARGET}
      rel={newTab ? NEW_TAB_REL : undefined}
      ref={ref}
      {...rest}
    />
  )
})

export default Link
