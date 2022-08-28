import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import App from './App'
import mockGrocery from './fixtures'

const server = setupServer(
  rest.get('/api/grocery/:id', (req, res, ctx) => {
    return res(ctx.json(mockGrocery))
  }),
  rest.put('/api/grocery/:id', (req, res, ctx) => {
    return res(ctx.json({ status: 'ok' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
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
