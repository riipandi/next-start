import type React from 'react'
import { forwardRef } from 'react'
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link'

import { cn } from '#/utils/helpers'

interface LinkProps extends NextLinkProps {
  newTab?: boolean
}

/**
 * A custom Link component that extends the functionality of the Next Link component.
 * It adds support for opening links in a new tab and applies a consistent set of styles.
 *
 * @param props - The props for the Link component, including the standard Link props from Next.
 * @param props.newTab - Whether to open the link in a new tab.
 * @param ref - A ref to the underlying anchor element.
 * @returns A Next Link component with the custom functionality and styles applied.
 *
 * Example usage:
 * ```tsx
 * <Link href="/path" className="custom-class">Link Text</Link>
 * ```
 */
const Link = forwardRef(function Component(
  props: LinkProps & React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  const { className, newTab, ...rest } = props
  const NEW_TAB_REL = 'noopener noreferrer'
  const NEW_TAB_TARGET = '_blank'
  const DEFAULT_TARGET = '_self'

  return (
    <NextLink
      className={cn(className)}
      rel={newTab ? NEW_TAB_REL : undefined}
      target={newTab ? NEW_TAB_TARGET : DEFAULT_TARGET}
      ref={ref}
      {...rest}
    />
  )
})

export default Link
