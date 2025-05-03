import express from 'express'
import {getAllPerson, addPerson} from '../controllers/person.controller'
import { validateInputs } from '../middleware/validation'

const peopleRouter = express.Router()

peopleRouter.route('/')
.get( getAllPerson )
.post( validateInputs, addPerson )

export default peopleRouter;
