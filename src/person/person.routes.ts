import express, { Request, Response} from 'express'
import {getPeopleData} from './person.controller'
import { StatusCodes } from 'http-status-codes'
const peopleRouter = express.Router()

peopleRouter.get('/', (req: Request, res: Response) => {
    try {
      const getAllData = getPeopleData()
      console.log(getAllData);
      
      res.status(StatusCodes.OK).json({ people: getAllData})
      return
    } catch(error) {
      res.status(StatusCodes.BAD_REQUEST).json({error})
    }
 })

export default peopleRouter;
