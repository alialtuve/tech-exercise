import {Router} from 'express'
import peopleRouter from '../person/person.routes'
import personRouter from './person.route'

const routes = Router()

routes.use('/no-persisted', peopleRouter)
routes.use('/persisted', personRouter)

export default routes
