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
        'py-2 px-4 rounded font-bold hover:text-primary-400 animated-underline',
        'border border-gray-600',
        'focus:outline-none focus-visible:text-primary-400',
        {
          'bg-dark text-white': variants === 'primary',
          'bg-white text-dark hover:bg-gray-200 hover:text-dark focus-visible:text-dark': variants === 'secondary'
        },
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
