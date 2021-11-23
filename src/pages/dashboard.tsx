import { Layout } from '@/components/AppLayout'

export default function Dashboard() {
  return (
    <Layout title='Dashboard'>
      <div className='py-6'>
        <div className='w-full px-4 mx-auto sm:px-6 md:px-8'>
          <h1 className='text-2xl font-semibold text-gray-900'>Dashboard</h1>
        </div>
        <div className='w-full px-4 mx-auto sm:px-6 md:px-8'>
          {/* Replace with your content */}
          <div className='py-4'>
            <div className='border-4 border-gray-200 border-dashed rounded-lg h-96' />
          </div>
          {/* /End replace */}
        </div>
      </div>
    </Layout>
  )
}
