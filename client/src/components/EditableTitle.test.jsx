import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import EditableTitle from './EditableTitle'

test('renders learn Editable Title', () => {
  render(<EditableTitle />)
  const linkElement = screen.getByText(/title/i)
  expect(linkElement).toBeInTheDocument()
})

test('Input is initially hidden', () => {
  render(<EditableTitle />)
  const input = screen.getByLabelText(/title/i)
  expect(input).not.toBeVisible()
})

test('Clicking on Title enables input', () => {
  render(<EditableTitle />)
  screen.getByText(/title/i).focus()
  const input = screen.getByLabelText(/title/i)
  expect(input).toBeVisible()
})
