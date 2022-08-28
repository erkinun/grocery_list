import { useState } from 'react'
import './EditableTitle.css'

const EditableTitle = ({ title, onChange }) => {
  const [hidden, setHidden] = useState(true)

  const handleTitle = (title) => {
    onChange(title)
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
        />
      )}
    </div>
  )
}

export default EditableTitle
