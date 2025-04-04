import { error } from 'console';
import express from 'express';
import fs from 'fs'

const app = express()
const PORT = 5000

app.use(express.json())
app.get('/', (req, res) => {
  res.send()
})

app.listen(PORT, () => {
  return console.log(`Tech app running on PORT ... ${PORT}`);
})

