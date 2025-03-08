'use client'

export default function Template({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-black">
      {/* Gradient Background */}
      <div className="-z-10 fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white dark:from-gray-950 dark:to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent dark:from-orange-500/10" />
      </div>
      <main className="grow">{children}</main>
    </div>
  )
}
