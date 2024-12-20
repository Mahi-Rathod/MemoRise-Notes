import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    const cssForLink = ({ isActive }) => 
        `${isActive ? 'bg-cyan-600 text-white' : ''} flex items-center gap-3 w-full h-[3rem] px-2 font-bold font-mono text-lg rounded-r-full hover:bg-cyan-500 hover:text-white`;

    return (
        <aside className="w-[23%] h-screen flex flex-col gap-2 p-3 shadow-lg">
            <NavLink to="/" className={cssForLink}>
                <span className="material-symbols-outlined">home</span>
                <span>Home</span>
            </NavLink>

            <NavLink to="/archived-notes" className={cssForLink}>
                <span className="material-symbols-outlined">archive</span>
                <span>Archive</span>
            </NavLink>

            <NavLink to="/important-notes" className={cssForLink}>
                <span className="material-symbols-outlined">label_important</span>
                <span>Important</span>
            </NavLink>

            <NavLink to="/bin" className={cssForLink}>
                <span className="material-symbols-outlined">delete</span>
                <span>Bin</span>
            </NavLink>
        </aside>
    );
}

export default Sidebar;
