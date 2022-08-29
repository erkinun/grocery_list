import EditableTitle from './EditableTitle'
import CheckList from './Checklist'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import './GroceryList.css'

dayjs.extend(relativeTime)

const GroceryList = ({ grocery, onChange }) => {
  const handleTitle = (title) => title && onChange({ ...grocery, title })
  const handleThings = (things) =>
    things && things.length > 0 && onChange({ ...grocery, things })

  return (
    <div className='GroceryList'>
      <div className='GroceryList__title'>
        <EditableTitle title={grocery?.title} onChange={handleTitle} />
      </div>

      <CheckList
        className='GroceryList__checklist'
        things={grocery?.things}
        onChange={handleThings}
      />
      <div className='GroceryList__edited'>
        Edited: {grocery && dayjs(grocery.lastEdited).fromNow()}
      </div>
    </div>
  )
}

export default GroceryList
