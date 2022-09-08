import express from 'express'
import { getGroceryList, updateGroceryList, diagnostics } from './database.js'

const app = express()
app.use(express.json())

app.put('/api/grocery/:id', (req, res) => {
  const id = req.params.id
  const groceryList = req.body
  updateGroceryList(id, groceryList)
  res.json({ status: 'ok' })
})

app.get('/api/grocery/:id', (req, res) => {
  const id = req.params.id
  const groceryList = getGroceryList(id)
  res.json(groceryList)
})

app.get('/api/status', (req, res) => {
  res.json(diagnostics())
})

export default app
