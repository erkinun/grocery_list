import { useState } from 'react'
import './EditableTitle.css'

const EditableTitle = ({ title, onChange }) => {
  const [hidden, setHidden] = useState(true)

  const handleTitle = (title) => {
    if (title) {
      console.log({ title, msg: 'why not!' })
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
