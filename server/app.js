import express from 'express'
import { getGroceryList, updateGroceryList, diagnostics } from './database.js'

const app = express()
app.use(express.json())

app.put('/api/grocery/:id', (req, res) => {
  // TODO check param id for both
  updateGroceryList(req.params.id, req.body)
  res.json({ status: 'ok' })
})

app.get('/api/grocery/:id', (req, res) => {
  res.json(getGroceryList(req.params.id))
})

app.get('/api/status', (req, res) => {
  res.json(diagnostics())
})

export default app
