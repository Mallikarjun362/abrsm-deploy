import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hello from './krupa_code/Hello.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Hello/>
    </main>
  )
}

export default App
