import express from 'express';
import dotenv from 'dotenv';
import { client } from './config/config';
import { loadData } from './data'
import { loadDbData } from './config/load-data'
import routes from './routes'

dotenv.config();
const app = express()

const { PORT } = process.env

app.use(express.json())

app.get('/', async (req: any, res: any) => {
  return res.send(' PEOPLE PREFERENCES APP ')
})

// Loading initial data
// No persisted data
loadData()
// Persisted data - load data to database
loadDbData()
// Router
app.use(routes)

/* Connect to mongo*/
async function start() {
    try {
      await client
      console.log('Connected to mongo!!');
      app.listen(PORT, () => {
        return console.log(`Server running on PORT... ${PORT}`);
      })
    } catch (error) {
      console.log(error);
    }
}


start()