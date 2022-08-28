import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import EditableTitle from './EditableTitle'

test('renders Editable Title', () => {
  render(<EditableTitle />)
  const linkElement = screen.getByText(/title/i)
  expect(linkElement).toBeInTheDocument()
})

test('Input is initially hidden', () => {
  render(<EditableTitle />)
  const input = screen.queryByRole('input')
  expect(input).toBe(null)
})

test('Clicking on Title enables input', async () => {
  render(<EditableTitle />)
  fireEvent(
    screen.getByText(/title/i),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  )

  const input = await screen.findByRole('textbox')
  expect(input).toBeInTheDocument()
})
