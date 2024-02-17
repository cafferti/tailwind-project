import { useState } from 'react'
import Navbar from './components/Navbar'
import Land from './components/land'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Land/>
      <Analytics/>
      <Newsletter/>
    </div>
  )
}

export default App
