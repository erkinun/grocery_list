import EditableTitle from './EditableTitle'

// TODO snapshot testing
const CheckListItem = ({
  item: { id, done, item: title },
  handleCheckedChange,
  handleItemTextChange,
}) => {
  return (
    <div className='item' key={id}>
      <span>
        <input
          type='checkbox'
          checked={done || false}
          onChange={(e) => handleCheckedChange(id, e.target.checked, title)}
        />
      </span>
      <EditableTitle
        title={title}
        onChange={(title) => handleItemTextChange(id, title)}
      />
    </div>
  )
}

export default CheckListItem
