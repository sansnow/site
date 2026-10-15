import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Blogs = () => {
    return (
        <div className='w-screen bg-black text-white min-h-screen py-4 px-10'>

            <Navbar />

            <div className='border-4 p-2 my-5'>
                <h1>*  <Link to="/blog/template"> Template blog </Link></h1>
            </div>
            <Outlet />
        </div>
    )
}

export default Blogs