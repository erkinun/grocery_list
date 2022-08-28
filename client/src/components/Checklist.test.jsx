import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import CheckList from './Checklist'
import mockGrocery from '../fixtures'

test('renders Checklist', () => {
  render(<CheckList things={mockGrocery.things} />)
})

test('renders Checklist todo section', () => {
  render(<CheckList things={mockGrocery.things} />)

  expect(screen.getByText('To buy')).toBeInTheDocument()
})

test('renders Checklist completed section', () => {
  render(<CheckList things={mockGrocery.things} />)

  expect(screen.getByText('Completed')).toBeInTheDocument()
})

test('renders Checklist unchecked checkboxes', () => {
  render(<CheckList things={mockGrocery.things} />)

  const boxes = screen.getAllByRole('checkbox', { checked: false })

  expect(boxes[0]).toBeInTheDocument()
})

test('checking a checkbox triggers onChange fn', () => {
  const onChangeSpy = jest.fn()
  render(<CheckList things={mockGrocery.things} onChange={onChangeSpy} />)

  const boxes = screen.getAllByRole('checkbox', { checked: false })

  fireEvent(
    boxes[0],
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  )
  expect(onChangeSpy).toHaveBeenCalledTimes(1)
})

test('changing one of the list items triggers onChange fn', async () => {
  const onChangeSpy = jest.fn()
  render(<CheckList things={mockGrocery.things} onChange={onChangeSpy} />)

  fireEvent(
    screen.getByText(/salmon/i),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  )

  const input = await screen.findByRole('textbox')
  fireEvent.change(input, { target: { value: 'a' } })
  expect(onChangeSpy).toHaveBeenCalledTimes(1)
})
