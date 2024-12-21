import React from 'react'
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="h-[3.5rem] flex p-6 items-center gap-3 border-b-cyan-600 border-b-2 shadow-md fixed top-0 left-0 right-0 z-[1000] bg-white">
      <div className='h-[3rem]'>
        <Link to="/">
          <img src={logo} alt="" className='h-full rounded-full border-2 cursor-pointer' />
        </Link>
      </div>

      <Link to='/'>
        <h1 className='text-3xl font-bold font-mono text-cyan-600 cursor-pointer'>MemoRise</h1>
      </Link>
    </header>
  )
}

export default Navbar;