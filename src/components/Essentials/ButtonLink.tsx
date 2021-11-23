import clsx from 'clsx'

import BasicLink, { BasicLinkProps } from './BasicLink'

type ButtonLinkProps = {
  variants?: 'primary' | 'secondary'
} & BasicLinkProps

const ButtonLink = ({ children, className = '', variants = 'primary', ...props }: ButtonLinkProps) => {
  return (
    <BasicLink
      {...props}
      className={clsx(
        'py-2 px-4 inline-block rounded font-bold hover:text-primary-400 animated-underline',
        'border border-gray-600',
        'focus:outline-none focus-visible:text-primary-400',
        {
          'bg-dark text-light-50': variants === 'primary',
          'bg-light-50 text-dark hover:bg-gray-200 hover:text-dark focus-visible:text-dark': variants === 'secondary'
        },
        className
      )}
    >
      {children}
    </BasicLink>
  )
}

export default ButtonLink
