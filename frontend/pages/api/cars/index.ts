import type { NextApiRequest, NextApiResponse } from 'next'
import {dataCars} from '../../../dataCars'
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(dataCars)
}
