// TODO and then handle the loading state from server
import { v4 as uuidv4 } from 'uuid'
import CheckListItem from './ChecklistItem'

import EditableTitle from './EditableTitle'

// TODO define the checklist prop types sometime
// TODO divide into two groups
const CheckList = ({ things = [], onChange }) => {
  const handleCheckedChange = (id, checked, item) => {
    if (things.find((t) => t.id === id)) {
      onChange(
        things.map((t) =>
          t.id === id
            ? {
                ...t,
                done: !!checked,
              }
            : t
        )
      )
    } else {
      onChange(things.push({ done: checked, item, id }))
    }
  }

  const handleItemTextChange = (id, val) => {
    if (val === '') {
      // implicit delete
      onChange(things.filter((t) => t.id !== id))
      return
    }
    // find the item
    // else add it to the items and send back!
    if (things.find((t) => t.id === id)) {
      // update the stuff
      onChange(
        things.map((t) =>
          t.id === id
            ? {
                ...t,
                item: val,
              }
            : t
        )
      )
    } else {
      // add and send
      onChange(things.push({ done: false, item: val, id }))
    }
  }

  const completed = things.filter((t) => t.done)
  const todo = things.filter((t) => !t.done)

  return (
    <div>
      {todo.concat([{ done: false, item: 'Item x', id: uuidv4() }]).map((t) => (
        <CheckListItem
          item={t}
          handleCheckedChange={handleCheckedChange}
          handleItemTextChange={handleItemTextChange}
        />
      ))}
      {completed && (
        <div>
          <span>Completed</span>
          {completed.map((t) => (
            <CheckListItem
              item={t}
              handleCheckedChange={handleCheckedChange}
              handleItemTextChange={handleItemTextChange}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CheckList
