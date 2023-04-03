import { NextApiRequest,NextApiResponse } from "next";
import {services} from '../../../data'
export default (req: NextApiRequest, res: NextApiResponse) => {
    //get default request 
    console.log('API',services);
    res.status(200).json({services})
}