import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div className='w-screen bg-black text-white min-h-screen py-4 px-10'>
      <Navbar />

      <Home />
    </div>
  )
}

export default App