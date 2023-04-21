export default function NotFound() {
  return (
    <div className='h-full min-h-screen bg-slate-50'>
      <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='mx-auto mt-8 sm:w-full sm:max-w-2xl'>
          <div className='space-y-4  text-gray-900'>
            <h2 className='text-lg font-bold'>Not Found</h2>
            <p className='text-sm'>Could not find requested resource</p>
          </div>
        </div>
      </div>
    </div>
  )
}
