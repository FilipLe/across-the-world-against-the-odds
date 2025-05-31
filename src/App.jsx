import { useState, useEffect } from 'react'
import './App.css'
import BookEN from './components/BookEN'
import BookPL from './components/bookPL'
import Navbar from './components/navbar'

function App() {
  const [selectedBook, setSelectedBook] = useState('PL');

  return (
    <>
      <Navbar setSelectedBook = {setSelectedBook}/>
      {selectedBook === 'PL' ? <BookPL/> : <BookEN/>}
    </>
  )
}

export default App
