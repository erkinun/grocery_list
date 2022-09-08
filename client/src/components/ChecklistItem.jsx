import EditableTitle from './EditableTitle'

import './ChecklistItem.css'

const CheckListItem = ({
  item: { id, done, item: title },
  handleCheckedChange,
  handleItemTextChange,
  signalDelete,
}) => {
  return (
    <div className='Checklist__item' key={id}>
      <span className='Checklist__item__checkbox'>
        <input
          type='checkbox'
          name='checklist-item'
          checked={(done && done !== '') || false}
          onChange={(e) => handleCheckedChange(id, e.target.checked, title)}
        />
      </span>
      {done ? (
        <s>
          <EditableTitle
            title={title}
            htmlFor={'checklist-item'}
            onChange={(title) => handleItemTextChange(id, title)}
          />
        </s>
      ) : (
        <EditableTitle
          title={title}
          htmlFor={'checklist-item'}
          onChange={(title) => handleItemTextChange(id, title)}
        />
      )}
      <span className='Checklist__item__delete' onClick={signalDelete}>
        X
      </span>
    </div>
  )
}

export default CheckListItem
