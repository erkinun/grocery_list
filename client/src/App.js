import { useEffect, useState } from 'react'
import './App.css'
import GroceryList from './components/GroceryList'

function App() {
  // TODO fix this with an effect
  const [grocery, setGrocery] = useState({})

  useEffect(() => {
    console.log({ grocery })
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
        <GroceryList onChange={(updated) => setGrocery(updated)} />
      </header>
    </div>
  )
}

export default App
