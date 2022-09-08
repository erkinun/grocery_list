import { v4 as uuidv4 } from 'uuid'
import CheckListItem from './ChecklistItem'

const CheckList = ({ things = [], onChange }) => {
  const handleDelete = (id) => {
    onChange(things.filter((t) => t.id !== id))
  }

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
      onChange([...things, { done: checked, item, id }])
    }
  }

  const handleItemTextChange = (id, val) => {
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
      // things.push()
      onChange([...things, { done: false, item: val, id }])
    }
  }

  const completed = things.filter((t) => t.done)
  const todo = things.filter((t) => !t.done)

  return (
    <div>
      <div key='todo' className='Checklist__todo'>
        <span className='Checklist__section'>To buy</span>
        {todo
          .concat([
            { newItem: true, done: false, item: 'Add new item', id: uuidv4() },
          ])
          .map((t) => (
            <CheckListItem
              key={t.id}
              item={t}
              handleCheckedChange={handleCheckedChange}
              handleItemTextChange={handleItemTextChange}
              signalDelete={() => handleDelete(t.id)}
            />
          ))}
      </div>

      {completed && (
        <div key='completed' className='Checklist__completed'>
          <span className='Checklist__section'>Completed</span>
          {completed.map((t) => (
            <CheckListItem
              key={t.id}
              item={t}
              handleCheckedChange={handleCheckedChange}
              handleItemTextChange={handleItemTextChange}
              signalDelete={() => handleDelete(t.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CheckList
