import app from './app.js'
import { serializeDB, initDB } from './database.js'

initDB()

const port = 8080

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const handleTermination = (code) => {
  console.log(`${code} received...`)
  serializeDB()
  process.exit()
}

process.once('SIGINT', handleTermination)
process.once('SIGTERM', handleTermination)
