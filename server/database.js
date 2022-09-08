import fs from 'fs'

let db = {}

export const getGroceryList = (id) => db[id]

export const updateGroceryList = async (id, list) => (db[id] = list)

export const diagnostics = () => db

const dbPath = './database.json'

export const serializeDB = () => {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8')
  } catch (e) {
    console.log('error in db save')
    console.error(e)
  }

  console.log('db saved')
}

export const initDB = (backupDb = {}) => {
  if (fs.existsSync(dbPath)) {
    const data = fs.readFileSync(dbPath)
    db = JSON.parse(data)
  } else {
    db = backupDb
  }
}
