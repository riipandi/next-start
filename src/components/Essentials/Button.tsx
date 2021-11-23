import clsx from 'clsx'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  variants?: 'primary' | 'secondary'
} & React.ComponentPropsWithoutRef<'button'>

const Button = ({ children, className = '', variants = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        'py-2 px-4 rounded font-bold hover:text-brand-400 animated-underline',
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
    </button>
  )
}

export default Button
