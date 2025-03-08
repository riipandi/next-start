import type { Metadata } from 'next'
import Image from 'next/image'
import Link from '#/app/link'

export const metadata: Metadata = {
  title: {
    absolute: `Next.js Tailwind Starter - A starter project for Next.js with Tailwind CSS and Typescript`,
  },
}

export default function Page() {
  return (
    <div className="container relative mx-auto h-full min-h-screen px-4 py-16">
      <div className="flex min-h-[80vh] flex-col items-center justify-center space-y-12">
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
            <code className="inline-block rounded-lg bg-gradient-to-r from-gray-200/80 to-gray-100/80 px-3 py-1 font-semibold text-gray-900 text-sm dark:from-gray-800 dark:to-gray-900 dark:text-gray-100">
              src/app/page.tsx
            </code>
          </li>
          <li className="animation-delay-200 animate-fade-in">
            Save and see your changes instantly.
          </li>
        </ol>

        {/* Action buttons with organic hover effect */}
        <div className="flex flex-wrap justify-center gap-5">
          <Link
            href="https://vercel.com/new/clone?repository-url=https://github.com/riipandi/next-start&project-name=next-start&repo-name=next-start&env=NEXT_PUBLIC_BASE_URL"
            newTab
          >
            <img
              src="https://vercel.com/button"
              className="h-10 w-auto transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Deploy with Vercel"
            />
          </Link>
          <Link
            href="https://deploy.workers.cloudflare.com/?url=https://github.com/riipandi/next-start"
            newTab
          >
            <img
              src="https://deploy.workers.cloudflare.com/button"
              className="h-10 w-auto transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Deploy to Cloudflare Workers"
            />
          </Link>
        </div>
      </div>

      {/* Floating footer */}
      <footer className="absolute right-0 bottom-0 left-0 py-12">
        <div className="flex flex-wrap justify-center gap-12 text-gray-600 dark:text-gray-400">
          {[
            {
              text: 'Learn Next.js',
              icon: 'file',
              href: 'https://nextjs.org/learn?utm_source=next-start&utm_medium=appdir-template-tw&utm_campaign=next-start',
            },
            {
              text: 'Templates',
              icon: 'window',
              href: 'https://vercel.com/templates?framework=next.js&utm_source=next-start&utm_medium=appdir-template-tw&utm_campaign=next-start',
            },
            {
              text: 'nextjs.org →',
              icon: 'globe',
              href: 'https://nextjs.org/?utm_source=next-start&utm_medium=appdir-template-tw&utm_campaign=next-start',
            },
          ].map(({ text, icon, href }) => (
            <Link
              key={text}
              href={href}
              className="group flex items-center gap-2 transition-colors duration-300 hover:text-gray-900 dark:hover:text-gray-200"
              newTab
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
            </Link>
          ))}
        </div>
      </footer>
    </div>
  )
}
