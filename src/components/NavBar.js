import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";

//Icons
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

import "./Navbar.css"

function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar); //toggles sidebar

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to="/">
                                <AiIcons.AiFillHome />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to="/spaceholder">
                                <AiIcons.AiFillHome />
                                <span>Spaceholder</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Outlet />
            </IconContext.Provider>
        </>
    )
}

export default NavBar;
