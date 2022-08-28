import { useState } from 'react'
import './EditableTitle.css'

// TODO only delete when no title and onBlur, bc i might write new stuff
const EditableTitle = ({ title, onChange }) => {
  const [hidden, setHidden] = useState(true)

  const handleTitle = (title) => {
    onChange(title)
    if (!title) {
      setHidden(true)
    }
  }

  return (
    <div className='EditableTitle'>
      {hidden && (
        <label onClick={() => setHidden(false)} htmlFor='groceryTitle'>
          {title || 'Title'}
        </label>
      )}

      {!hidden && (
        <input
          value={title || ''}
          onChange={(e) => handleTitle(e.target.value)}
          onBlur={() => setHidden(true)}
          id='groceryTitle'
        />
      )}
    </div>
  )
}

export default EditableTitle
