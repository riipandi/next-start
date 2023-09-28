'use client'

import { Toaster } from '@twistail/react-toast'

export default function Template({ children }: React.PropsWithChildren) {
  return (
    <>
      <div>{children}</div>
      <Toaster position='bottom-right' />
    </>
  )
}
