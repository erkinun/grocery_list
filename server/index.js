import express from 'express'
import { getGroceryList, updateGroceryList } from './database.js'
const app = express()
const port = 8080

app.use(express.json())

app.put('/api/grocery', (req, res) => {
  console.log('recevied ', req.body)
  updateGroceryList(req.body)
  res.json({ status: 'ok' })
})

app.get('/api/grocery', (req, res) => {
  res.json(getGroceryList())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
