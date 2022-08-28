import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import CheckListItem from './ChecklistItem'
import mockGrocery from '../fixtures'

const things = mockGrocery.things

test('renders ChecklistItem', () => {
  render(<CheckListItem item={{ ...things[0], done: false }} />)
})

test('renders done ChecklistItem', () => {
  render(<CheckListItem item={{ ...things[0], done: true }} />)
})
