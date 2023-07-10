'use client'

import { Toaster } from '@twistail/toast'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <Toaster position='bottom-right' />
    </>
  )
}
