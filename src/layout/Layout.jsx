import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar.jsx';
import Sidebar from '../components/sidebar/Sidebar.jsx';
import Footer from '../components/footer/Footer.jsx';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Main Layout */}
      <div className="relative flex w-full mt-14">
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? 'lg:w-[250px] w-full fixed z-50' : 'lg:w-[75px] w-0'} `}
        />

        {/* Content Area */}
        <div
          className={`transition-all duration-300 lg:absolute right-0 w-full lg:w-[76%] p-5 flex flex-col gap-5 min-h-screen ${
            isSidebarOpen
              ? 'lg:ml-[250px] ml-0' // Push content to the right when sidebar is open
              : 'ml-0 lg:ml-[75px]' // Adjust content when sidebar is closed
          }`}
        >
          <div className="flex-grow">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
