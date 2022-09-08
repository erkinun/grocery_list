import mockGrocery from './fixtures.js'
import { getGroceryList, initDB, updateGroceryList } from './database.js'

let db = {
  id1: mockGrocery,
}

beforeAll(() => {
  initDB(db)
})

describe('database ', () => {
  test('should get the grocery list for a user', () => {
    const output = getGroceryList('id1')

    expect(output?.title).toEqual(mockGrocery.title)
    expect(output).not.toBeNull()
  })

  test('should return undefined if the id is not found in db', () => {
    const output = getGroceryList('id2')

    expect(output).toBeUndefined()
  })

  test('update should enable the user to store their list', async () => {
    await updateGroceryList('id1', { ...mockGrocery, title: 'Sunday Shopping' })

    const output = getGroceryList('id1')

    expect(output?.title).toEqual('Sunday Shopping')
  })
})
