import { render, screen, fireEvent } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import App from './App'
import mockGrocery from './fixtures'

let db = mockGrocery

const server = setupServer(
  rest.get('/api/grocery/:id', (req, res, ctx) => {
    return res(ctx.json(db))
  }),
  rest.put('/api/grocery/:id', (req, res, ctx) => {
    db = req.body
    return res(ctx.json({ status: 'ok' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  db = mockGrocery
})
afterAll(() => server.close())

test('renders App', () => {
  render(<App />)
})

test('renders title of App', () => {
  render(<App />)

  expect(screen.getByText('Grocery List App')).toBeInTheDocument()
})

test('renders title of the grocery list', async () => {
  render(<App />)

  expect(await screen.findByText('Sainsburys sunday shopping')).toBeVisible()
})

test('renders edited section of the grocery list', async () => {
  render(<App />)

  expect(await screen.findByText('Edited: ', { exact: false })).toBeVisible()
})

test('renders to buy section of the grocery list', async () => {
  render(<App />)

  expect(await screen.findByText('To buy', { exact: false })).toBeVisible()
})

test('renders to completed section of the grocery list', async () => {
  render(<App />)

  expect(
    await screen.findByText('Important stuff', { exact: false })
  ).toBeVisible()
  expect(await screen.findByText('Completed', { exact: false })).toBeVisible()
})

test('lets you check off items from the Completed list', async () => {
  render(<App />)

  const checkbox = await screen.findByRole('checkbox', { checked: true })

  expect(checkbox).toBeChecked()

  fireEvent.click(checkbox)

  const updated = screen.queryByRole('checkbox', { checked: true })

  expect(updated).not.toBeInTheDocument()
})

test('lets you check off items from the to Buy list', async () => {
  render(<App />)

  const checkedOnes = screen.queryAllByRole('checkbox', { checked: true })
  const checkbox = await screen.findByRole('checkbox', { checked: false })

  fireEvent.click(checkbox)

  const updated = await screen.findAllByRole('checkbox', { checked: true })

  expect(updated.length).toEqual(checkedOnes.length + 1)
})

test('lets you write a new item', async () => {
  render(<App />)

  const salmon = await screen.findByText('Salmon')
  expect(salmon).toBeInTheDocument()

  const todos = screen.queryAllByRole('checkbox', { checked: false })
  const newTitle = screen.getByText('Add new item')

  expect(newTitle).toBeInTheDocument()

  fireEvent.click(newTitle)

  const input = screen.getByRole('textbox')

  fireEvent.change(input, { target: { value: 'Bread' } })
  const updated = await screen.findAllByRole('checkbox', { checked: false })
  expect(updated.length).toEqual(todos.length + 1)
})

test('lets you delete an item', async () => {
  const { container } = render(<App />)

  const salmon = await screen.findByText('Salmon')
  expect(salmon).toBeInTheDocument()

  const todos = screen.queryAllByRole('checkbox', { checked: false })
  const completed = screen.queryAllByRole('checkbox', { checked: true })

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const deleteSpan = container.querySelectorAll('.Checklist__item__delete')[0]

  fireEvent.click(deleteSpan)

  const todosUpdated = screen.queryAllByRole('checkbox', { checked: false })
  const completedUpdated = screen.queryAllByRole('checkbox', { checked: true })

  expect(todosUpdated.length + completedUpdated.length).toEqual(
    todos.length + completed.length - 1
  )
})
