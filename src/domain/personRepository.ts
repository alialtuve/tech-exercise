import { Person } from './personEntity';

export interface PersonRepository  {
  getAll(): Promise <Person []>
}
