import { useEffect, useState } from 'react'
import EditableTitle from './EditableTitle'
import './GroceryList.css'

const GroceryList = ({ groceryData, onChange }) => {
  const [groceryList, setGroceryList] = useState(groceryData)

  console.log(groceryList)

  const handleTitle = (title) => setGroceryList({ ...groceryList, title })

  useEffect(() => {
    console.log('grocery List has changed, calling the mothership')
    onChange(groceryList)
  }, [groceryList, onChange])

  return (
    <div className='GroceryList'>
      <EditableTitle title={groceryList?.title} onChange={handleTitle} />
      <div>Some checkboxes will be here</div>
      <div>Close button</div>
    </div>
  )
}

export default GroceryList
