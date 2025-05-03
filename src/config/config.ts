import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const DB_NAME = process.env.DB_NAME
const MONGO_PORT = process.env.MONGO_PORT ? Number(process.env.MONGO_PORT) : 27018
const MONGO_USER = process.env.MONGO_USER
const MONGO_PASSWORD = process.env.MONGO_PASSWORD

export const client = mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@db:${MONGO_PORT}/${DB_NAME}?authSource=admin`)
