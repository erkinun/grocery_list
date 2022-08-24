import express from 'express'
import { getGroceryList, updateGroceryList } from './database.js'
const app = express()
const port = 8080

app.use(express.json())

app.put('/grocery', (req, res) => {
  updateGroceryList(req.body)
  res.json({ status: 'ok' })
})

app.get('/grocery', (req, res) => {
  res.json(getGroceryList())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
