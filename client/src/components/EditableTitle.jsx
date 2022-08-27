import { useEffect, useState } from 'react'
import './EditableTitle.css'

const EditableTitle = ({ title, onChange }) => {
  const [hidden, setHidden] = useState(true)

  useEffect(() => setHidden(!title), [title])

  const handleTitle = (title) => {
    if (title) {
      onChange(title)
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
          value={title || ''}
          onChange={(e) => handleTitle(e.target.value)}
          id='groceryTitle'
        />
      )}
    </div>
  )
}

export default EditableTitle
