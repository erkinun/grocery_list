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
        <label
          className='EditableTitle__label'
          onClick={() => setHidden(false)}
          htmlFor='groceryTitle'
        >
          {title || 'Title'}
        </label>
      )}

      {!hidden && (
        <input
          className='EditableTitle__input'
          value={title || ''}
          onChange={(e) => handleTitle(e.target.value)}
          onBlur={() => setHidden(true)}
        />
      )}
    </div>
  )
}

export default EditableTitle
