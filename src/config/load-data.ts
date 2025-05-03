import dotenv from 'dotenv'
import { client } from './config';
import PersonModel  from '../models/person.model'
import { peopleArr} from '../data'

dotenv.config()

export async function loadDbData() {
  try {
    const documents = await PersonModel.estimatedDocumentCount()
    
    if(documents < 1){
      console.log('DB empty, data is being loaded...');
      await PersonModel.insertMany(peopleArr)
    }

  } catch(error){
    console.log(error)
  } finally {
    (await client).disconnect
  }
} 
