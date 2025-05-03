import mongoose from 'mongoose'
import {Status} from '../enum/person.status'
import { required } from 'joi'

const PersonSchema = new mongoose.Schema({
    name: {
      type: String, 
      required: true
    },
    favoriteFood : {
      type: String,
      required: true
    },
    favoriteMovie: {
      type: String
    },
    status: {
      type: String,
      default: Status.Active
    }
  }, { timestamps: true, versionKey: false }
)

const  PersonModel = mongoose.model('Person', PersonSchema)

export default PersonModel
