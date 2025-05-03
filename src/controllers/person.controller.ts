import { Request, Response} from 'express'
import PersonModel from '../models/person.model'
import {StatusCodes} from 'http-status-codes'

export const getAllPerson = async(req: Request, res: Response) => {

  const { sort } = req.query

  let sortKey: string = '1'

  if(sort !== '') {
    if(sort === 'name') sortKey = 'name'

    if(sort === 'food') sortKey = 'favoriteFood'
    
    if(sort == 'date') sortKey = 'createdAt'
  }
  
  const people = await PersonModel.find({'status':'Active'}, 'name favoriteFood createdAt -_id')
                                  .sort(sortKey)

  res.status(StatusCodes.OK).json({people})
}

export const addPerson = async(req:Request, res:Response) => {
  const person = await PersonModel.create(req.body)
  res.status(StatusCodes.CREATED).json({ msg: 'New document added'})
}
