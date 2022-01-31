import type { NextApiRequest, NextApiResponse } from 'next'

import { throwError } from '@/libraries/helper'

interface Response {
  message: string
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  switch (method) {
    case 'GET':
      return handleRequest(req, res)
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).json(throwError(405, `Method ${method} Not Allowed`))
  }
}

const handleRequest = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  res.status(200).json({ message: 'Hello world' })
}

export default handler
