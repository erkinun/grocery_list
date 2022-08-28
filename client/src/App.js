import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import './App.css'
import GroceryList from './components/GroceryList'

// TODO handle styling
// TODO handle tests
// TODO handle deletion button
// TODO handle last edited
// TODO handle editable text styling
function App() {
  const [grocery, setGrocery] = useState(null)
  const [id, setId] = useState(localStorage.getItem('id'))

  useEffect(() => {
    if (!id) {
      const freshId = uuidv4()
      localStorage.setItem('id', freshId)
      setId(freshId)
    } else {
      setId(id)
    }
  }, [id])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/grocery/${id}`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      })
      const response = await data.json()
      console.log({ response })
      setGrocery(response)
    }

    fetchData()
  }, [id])

  useEffect(() => {
    // todo find a better fix for this, how to stop the initial and stupid effect calls
    grocery &&
      fetch(`/api/grocery/${id}`, {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({ ...grocery, lastEdited: Date.now() }),
      })
  }, [grocery, id])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Grocery List App</h1>
      </header>
      <GroceryList
        onChange={(updated) => updated && setGrocery(updated)}
        grocery={grocery}
      />
    </div>
  )
}

export default App
