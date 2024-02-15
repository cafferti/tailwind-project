import { useState } from 'react'
import Navbar from './components/Navbar'
import Land from './components/land'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Land/>
    </div>
  )
}

export default App
