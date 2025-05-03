import express, { Request, Response} from 'express'
import {getPeopleData} from './person.controller'
import { StatusCodes } from 'http-status-codes'
const peopleRouter = express.Router()

peopleRouter.get('/', (req: Request, res: Response) => {

    const sort:string = (req.query.sort)?.toString()!
    
    try {
      const getAllData = getPeopleData(sort)
      
      res.status(StatusCodes.OK).json({ people: getAllData})
      return
    } catch(error) {
      res.status(StatusCodes.BAD_REQUEST).json({error})
    }
 })

export default peopleRouter;
