import EditableTitle from './EditableTitle'
import './GroceryList.css'

const GroceryList = () => {
  return (
    <div className='GroceryList'>
      <EditableTitle />
      <div>Some checkboxes will be here</div>
      <div>Close button</div>
    </div>
  )
}

export default GroceryList
