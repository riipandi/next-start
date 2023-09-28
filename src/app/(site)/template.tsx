'use client'

export default function Template({ children }: React.PropsWithChildren) {
  return (
    <div className='flex min-h-screen flex-col bg-white pb-12 pt-16 dark:bg-black'>{children}</div>
  )
}
