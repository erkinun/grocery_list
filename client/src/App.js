import { useEffect, useState } from 'react'
import './App.css'
import GroceryList from './components/GroceryList'

function App() {
  const [grocery, setGrocery] = useState(null)

  // TODO init a session id and store it in local storage
  useEffect(() => {
    console.log('initial fetching of data')
    const fetchData = async () => {
      const data = await fetch('/api/grocery', {
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
  }, [])

  useEffect(() => {
    // todo find a better fix for this
    console.log({ grocery, msg: 'calling PUT!' })
    grocery &&
      fetch('/api/grocery', {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(grocery),
      })
  }, [grocery])

  return (
    <div className='App'>
      <header className='App-header'>
        <GroceryList onChange={(updated) => updated && setGrocery(updated)} />
      </header>
    </div>
  )
}

export default App
