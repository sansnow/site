import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <div className='w-screen bg-black text-white min-h-screen py-4 px-10'>

      <Navbar />
      <h1 className='text-2xl my-4'>* About</h1>
      <br />

      <h2 className='text-xl font-extrabold my-1'>* who am i ?</h2>
      <p>so you wanna know about me ?, i am a silly little human being who one day accidently got his hands on a keyboard and then played alot of games on it , so then thought huh, playing games is easy ,then making games should be easy too, so yea that's how i became a fulltime gamer and an occassional programmer.</p>

      <br />

      <h2 className='my-3'>* what's this site about ?</h2>
      <p>
        so i made this site for basically sharing my thoughts and stuff online and having a digital space on the internet which is free from slop. as i love undertale, i made this site's ui themed or styled to the game's ui.
      </p>


      <div className='flex justify-around' >
        <img className='w-80' src="https://i.pinimg.com/1200x/97/70/87/9770876dda19241d2e271218086ce069.jpg" alt="" />
        <img className='w-90' src="https://i.pinimg.com/736x/02/52/d2/0252d22848d3bd204e419f019a9f5a10.jpg" alt="" />
        <img className='w-90' src="https://i.pinimg.com/originals/39/37/1e/39371e966c6688c65037a0cd6219edef.gif" alt="" />
        <img className='w-90' src="https://i.pinimg.com/736x/a0/01/a3/a001a3cd6aaacd7b963e292dcf039762.jpg" alt="" />
      </div>



      <Footer />
    </div>
  )
}

export default About