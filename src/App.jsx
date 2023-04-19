import { useState } from 'react'

import './App.css'
import Login from './pages/Login'
import Professeur from './pages/Professeur'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Login />
    <Professeur />
  )
}

export default App
