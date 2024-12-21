import React from 'react';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

function Navbar({ toggleSidebar }) {
  return (
    <header className="h-[3.5rem] flex items-center justify-between gap-3 px-4 sm:px-6 border-b-cyan-600 border-b-2 shadow-md fixed top-0 left-0 right-0 z-[1000] bg-white w-full">
      {/* Hamburger Icon for Mobile */}
      <button
        className="text-3xl text-cyan-600 lg:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Logo */}
      <div className="h-[3rem] flex items-center justify-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-[3rem] rounded-full border-2 cursor-pointer"
          />
        </Link>

        {/* App Name */}
        <Link to="/">
          <h1 className="text-3xl font-bold font-mono text-cyan-600 cursor-pointer">
            MemoRise
          </h1>
        </Link>
      </div>


    </header>
  );
}

export default Navbar;
