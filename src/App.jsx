import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookEN from './components/BookEN'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BookEN/>
    </>
  )
}

export default App
