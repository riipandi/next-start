import type { NextApiRequest, NextApiResponse } from 'next'

interface Response {
  message: string
  error: boolean
}

const handler = (req: NextApiRequest, res: NextApiResponse<Response>) => {
  res.status(200).json({ error: false, message: 'Hello world' })
}

export default handler
