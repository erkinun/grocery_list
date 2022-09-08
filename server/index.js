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

process.stdin.resume()
process.on('SIGINT', handleTermination)
process.on('SIGTERM', handleTermination)
process.on('SIGUSR1', handleTermination)
process.on('SIGUSR2', handleTermination)
