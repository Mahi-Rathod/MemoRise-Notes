import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar.jsx';
import Sidebar from '../components/sidebar/Sidebar.jsx';
import Footer from '../components/footer/Footer.jsx';

function Layout() {
  return (
    <>
        <Navbar />
        <div className='flex justify-between w-full'>
            <Sidebar />
            <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default Layout