import type { NextApiRequest, NextApiResponse } from 'next'

import { throwError } from '@/utils/helpers'

interface IResponse {
  message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  if (req.method !== 'GET') return throwError(res, 500, `Method not allowed!`)

  return res.status(200).json({ message: 'Hello world' })
}

export default handler
