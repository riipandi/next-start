import { HomeIcon } from '@heroicons/react/solid'

import { BasicLink } from '@/components/Essentials'

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true }
]

const Breadcrumbs = () => {
  return (
    <nav className='hidden lg:flex' aria-label='Breadcrumb'>
      <ol role='list' className='flex items-center space-x-2'>
        <li>
          <div>
            <BasicLink href='/dashboard' className='text-gray-400 hover:text-gray-500'>
              <HomeIcon className='flex-shrink-0 w-5 h-5' aria-hidden='true' />
              <span className='sr-only'>Dashboard</span>
            </BasicLink>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className='flex items-center'>
              <svg
                className='flex-shrink-0 w-5 h-5 text-gray-300'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
                aria-hidden='true'
              >
                <path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
              </svg>
              <BasicLink
                href={page.href}
                className='ml-2 text-sm font-medium text-gray-500 hover:text-gray-700'
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </BasicLink>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
