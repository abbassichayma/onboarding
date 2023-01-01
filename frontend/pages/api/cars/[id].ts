import type { NextApiRequest, NextApiResponse } from 'next'
import {dataCars} from '../../../dataCars'
type Data = {
  name: string,
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) 

{
    
let id = req.query.id;
let car= dataCars.find(d=>d.id==id)
if(car){
    res.status(200).send(car)
}
  res.status(400).json({err:"there is no car"})
}