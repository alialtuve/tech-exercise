import fs from 'fs'
import {IPerson} from './person/person.interface'
import {Status} from './enum/person.status'
import {writeData} from '../src/person/person.services'

const EXISTFILE: boolean = fs.existsSync('data.json')
/*  All the objects are setted to an object array */
export function loadData () {
  
  let peopleArr: IPerson [] = [] 
  
  let rockyObj: IPerson = {
    name: 'Rocky',
    favoriteFood: 'Sushi',
    favoriteMovie: 'Back to The Future',
    status: Status.Active
  }
  
  let miroslavObj: IPerson = {
    name: 'Miroslav',
    favoriteFood: 'Sushi',
    favoriteMovie: 'American Psycho',
    status: Status.Inactive
  }
  
  let donnyObj: IPerson = {
    name: 'Donny',
    favoriteFood: 'Singapore chow mei fun',
    favoriteMovie: 'The Princess Bride',
    status: Status.Active
  }
  
  let mattObj: IPerson = {
    name: 'Matt',
    favoriteFood: 'Brisket Tacos',
    favoriteMovie: 'The Princess Bride',
    status: Status.Active
  }
  
  let altuveObj: IPerson = {
    name: 'Altuve',
    favoriteFood: 'Pupusas revueltas',
    favoriteMovie: 'Gladiator',
    status: Status.Active
  }
  
  /* A does not exist json file is created using the data in the object array */ 
  if(!EXISTFILE) {
    peopleArr.push(rockyObj)
    peopleArr.push(miroslavObj)
    peopleArr.push(donnyObj)
    peopleArr.push(mattObj)
    peopleArr.push(altuveObj)
   
    writeData(peopleArr)
  }

}
