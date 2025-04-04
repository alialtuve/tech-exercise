import jsonfile from 'jsonfile'
import { IPerson } from './person.interface'

export function readData (filePath: string) {
  return jsonfile.readFileSync(filePath)
}

export function writeData (peopleArr: IPerson[]) {
   return jsonfile.writeFile('data.json', peopleArr, function(err) {
      if(err) console.log(err);
    })
}
