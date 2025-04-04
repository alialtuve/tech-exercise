import {Status} from '../enum/person.status'

export interface IPerson {
  name: string,
  favoriteFood: string,
  favoriteMovie: string,
  status: Status,
  date?: string
}
