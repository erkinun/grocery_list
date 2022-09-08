import { useRef, useState } from 'react'
import './EditableTitle.css'

const EditableTitle = ({ title, onChange, htmlFor = 'groceryTitle' }) => {
  const [hidden, setHidden] = useState(true)
  const inputRef = useRef(null)

  const handleBlur = () => {
    console.log({ inputRef })
    onChange(inputRef.current.value)
    setHidden(true)
  }

  return (
    <div className='EditableTitle'>
      {hidden && (
        <label
          className='EditableTitle__label'
          onClick={() => setHidden(false)}
          htmlFor={htmlFor}
        >
          {title || 'Title'}
        </label>
      )}

      {!hidden && (
        <input
          className='EditableTitle__input'
          ref={inputRef}
          defaultValue={title || ''}
          onBlur={() => handleBlur()}
          onMouseLeave={() => handleBlur()}
        />
      )}
    </div>
  )
}

export default EditableTitle
