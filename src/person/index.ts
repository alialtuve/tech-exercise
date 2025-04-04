import {Router} from 'express'
import peopleRouter from './person.routes'

const routes = Router()

routes.use('/people', peopleRouter)

export default routes