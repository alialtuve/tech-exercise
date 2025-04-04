import express from 'express';
import { loadData } from './data'
import routes from './person'

const app = express()

const PORT = 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1> Tech exercise </h1>')
})

// Loading initial data
loadData()

// Router
app.use(routes)

app.listen(PORT, () => {
  return console.log(`Tech app running on PORT ... ${PORT}`);
})
