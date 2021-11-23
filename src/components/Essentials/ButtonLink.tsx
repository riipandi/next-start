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
        'py-2 px-4 inline-block rounded font-bold hover:text-brand-400 animated-underline',
        'border border-gray-600',
        'focus:outline-none focus-visible:text-brand-400',
        {
          'bg-gray-900 text-gray-50': variants === 'primary',
          'bg-gray-50 text-gray-900 hover:bg-gray-200 hover:text-gray-900 focus-visible:text-gray-900':
            variants === 'secondary'
        },
        className
      )}
    >
      {children}
    </BasicLink>
  )
}

export default ButtonLink
