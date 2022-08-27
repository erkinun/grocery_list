let db = {}

export const getGroceryList = (id) => db[id]

export const updateGroceryList = async (id, list) => (db[id] = list)

export const diagnostics = () => db
