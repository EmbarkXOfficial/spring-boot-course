import { useState } from 'react'
import './App.css'
import { FaBeer } from 'react-icons/fa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      className='flex items-center justify-center h-screen bg-gray-800 text-white
       text-2xl font-bold'>
        Welcome <FaBeer />
    </div>
  )
}

export default App
