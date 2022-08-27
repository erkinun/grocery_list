import EditableTitle from './EditableTitle'
import './GroceryList.css'

const GroceryList = ({ grocery, onChange }) => {
  const handleTitle = (title) => title && onChange({ ...grocery, title })

  return (
    <div className='GroceryList'>
      <EditableTitle title={grocery?.title} onChange={handleTitle} />
      <div>Some checkboxes will be here</div>
      <div>Close button</div>
    </div>
  )
}

export default GroceryList
