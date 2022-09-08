import { useEffect, useRef, useState } from 'react'
import './EditableTitle.css'

const EditableTitle = ({ title, onChange, htmlFor = 'groceryTitle' }) => {
  const [hidden, setHidden] = useState(true)
  const inputRef = useRef(null)

  const handleBlur = () => {
    onChange(inputRef.current.value)
    setHidden(true)
  }

  const handleKeyPress = (key) => {
    if (key === 'Enter') {
      handleBlur()
    }
  }

  useEffect(() => {
    if (!hidden) {
      inputRef.current.focus()
    }
  }, [hidden])

  return (
    <div className='EditableTitle'>
      {hidden && (
        <label
          className='EditableTitle__label'
          onClick={() => setHidden(false)}
          htmlFor={htmlFor}
        >
          {title || 'Click to type in'}
        </label>
      )}

      {!hidden && (
        <input
          className='EditableTitle__input'
          ref={inputRef}
          defaultValue={title || ''}
          onBlur={() => handleBlur()}
          onMouseLeave={() => handleBlur()}
          onKeyDown={(e) => handleKeyPress(e.key)}
        />
      )}
    </div>
  )
}

export default EditableTitle
