import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar({ isSidebarOpen, toggleSidebar }) {
  const cssForLink = ({ isActive }) =>
    `${isActive ? 'bg-cyan-600 text-white' : ''} flex items-center gap-3 w-full h-[3rem] px-2 font-bold font-mono text-lg rounded-r-full hover:bg-cyan-500 hover:text-white`;

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed z-[1000] bg-white w-[70%] lg:w-[23%] h-screen flex flex-col gap-2 p-3 shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 lg:translate-x-0`}
      >
        <NavLink to="/" className={cssForLink} onClick={toggleSidebar}>
          <span className="material-symbols-outlined">home</span>
          <span>Home</span>
        </NavLink>

        <NavLink to="/archived-notes" className={cssForLink} onClick={toggleSidebar}>
          <span className="material-symbols-outlined">archive</span>
          <span>Archive</span>
        </NavLink>

        <NavLink to="/important-notes" className={cssForLink} onClick={toggleSidebar}>
          <span className="material-symbols-outlined">label_important</span>
          <span>Important</span>
        </NavLink>

        <NavLink to="/bin" className={cssForLink} onClick={toggleSidebar}>
          <span className="material-symbols-outlined">delete</span>
          <span>Bin</span>
        </NavLink>
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[900] lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
