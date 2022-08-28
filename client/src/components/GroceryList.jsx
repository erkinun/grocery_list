import EditableTitle from './EditableTitle'
import CheckList from './Checklist'
import './GroceryList.css'

const GroceryList = ({ grocery, onChange }) => {
  const handleTitle = (title) => title && onChange({ ...grocery, title })
  const handleThings = (things) =>
    things && things.length > 0 && onChange({ ...grocery, things })

  return (
    <div className='GroceryList'>
      <EditableTitle title={grocery?.title} onChange={handleTitle} />
      <CheckList things={grocery?.things} onChange={handleThings} />
      <div>Save button</div>
    </div>
  )
}

export default GroceryList
