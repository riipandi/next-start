import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen animate-gradient-xy bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Organic shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="-top-1/2 -left-1/2 absolute h-full w-full rounded-full bg-gradient-to-br from-blue-100/20 to-purple-100/20 blur-3xl dark:from-blue-900/20 dark:to-purple-900/20" />
        <div className="-bottom-1/2 -right-1/2 absolute h-full w-full rounded-full bg-gradient-to-tl from-indigo-100/20 to-pink-100/20 blur-3xl dark:from-indigo-900/20 dark:to-pink-900/20" />
      </div>

      <div className="container relative mx-auto px-4 py-16">
        <main className="flex min-h-[80vh] flex-col items-center justify-center space-y-16">
          {/* Logo with floating animation */}
          <div className="animate-float">
            <Image
              className="dark:invert"
              src="/images/next.svg"
              alt="Next.js logo"
              width={220}
              height={46}
              priority
            />
          </div>

          {/* Instructions with staggered fade-in */}
          <ol className="max-w-xl space-y-4 text-center font-medium font-mono text-gray-700 dark:text-gray-300">
            <li className="animate-fade-in">
              Get started by editing{' '}
              <code className="inline-block rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 px-3 py-1 font-semibold text-gray-900 dark:from-gray-800 dark:to-gray-900 dark:text-gray-100">
                src/app/page.tsx
              </code>
            </li>
            <li className="animation-delay-200 animate-fade-in">
              Save and see your changes instantly.
            </li>
          </ol>

          {/* Action buttons with organic hover effect */}
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://vercel.com/new/clone?repository-url=https://github.com/riipandi/next-start"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-3 text-white transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative flex items-center gap-2">
                <Image
                  className="dark:invert"
                  src="/images/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
                Deploy now
              </span>
            </a>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-full px-8 py-3 text-gray-700 transition-all duration-300 after:absolute after:inset-0 after:rounded-full after:border after:border-gray-300 after:transition-transform hover:text-gray-900 hover:after:scale-110 dark:text-gray-300 dark:hover:text-white dark:after:border-gray-600"
            >
              Read our docs
            </a>
          </div>
        </main>

        {/* Floating footer */}
        <footer className="absolute right-0 bottom-8 left-0">
          <div className="flex flex-wrap justify-center gap-12 text-gray-600 dark:text-gray-400">
            {[
              {
                text: 'Learn',
                icon: 'file',
                href: 'https://nextjs.org/learn?utm_source=next-start&utm_medium=appdir-template-tw&utm_campaign=next-start',
              },
              {
                text: 'Examples',
                icon: 'window',
                href: 'https://vercel.com/templates?framework=next.js&utm_source=next-start&utm_medium=appdir-template-tw&utm_campaign=next-start',
              },
              {
                text: 'nextjs.org →',
                icon: 'globe',
                href: 'https://nextjs.org/?utm_source=next-start&utm_medium=appdir-template-tw&utm_campaign=next-start',
              },
            ].map(({ text, icon, href }) => (
              <a
                key={text}
                href={href}
                className="group flex items-center gap-2 transition-colors duration-300 hover:text-gray-900 dark:hover:text-gray-200"
              >
                <Image
                  aria-hidden
                  src={`/images/${icon}.svg`}
                  alt={`${text} icon`}
                  width={16}
                  height={16}
                  className="transition-transform group-hover:scale-110"
                />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all group-hover:after:w-full">
                  {text}
                </span>
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}
