import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";

//Icons
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

import "./Navbar.css"

function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <div className={sidebar ? "title centered" : "title"}>BA React Project</div>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to="/">
                                <AiIcons.AiFillHome />
                                <div className='text'>Home</div>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to="/spaceholder">
                                <AiIcons.AiFillHome />
                                <div className='text'>Spaceholder</div>
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
