import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MusicPlayer from './components/MusicPlayer'

const App = () => {
  return (
    <div className='w-screen bg-black text-white min-h-screen py-4 px-10'>
      <Navbar />

      <Home />
      <br />
      <MusicPlayer />
    </div>
  )
}

export default App