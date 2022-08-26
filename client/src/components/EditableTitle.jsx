import { useState } from 'react'
import './EditableTitle.css'

const EditableTitle = () => {
  const [hidden, setHidden] = useState(true)

  const handleTitle = (title) => {
    if (title) {
      // call on change etc
    } else {
      setHidden(true)
    }
  }

  return (
    <div className='EditableTitle'>
      {hidden && (
        <label onClick={() => setHidden(false)} htmlFor='groceryTitle'>
          Title
        </label>
      )}
      {!hidden && (
        <input
          onChange={(e) => handleTitle(e.target.value)}
          id='groceryTitle'
        />
      )}
    </div>
  )
}

export default EditableTitle
