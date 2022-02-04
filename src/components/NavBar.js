import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";

//Icons
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import { IconContext } from "react-icons";

import "./Navbar.css"
import 'rsuite/dist/rsuite.min.css';

import { Navbar, Nav, Dropdown, Sidenav, Button } from 'rsuite';

function NavBar() {
    const [expanded, setExpanded] = useState(true);

    const toggleExpanded = () => setExpanded(!expanded);

    const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
        <Link ref={ref} to={href} {...rest}>
          {children}
        </Link>
      ));

    //rsuite sidenav testen
    //LOGIK UMDREHEN! HIER IST DIE SIDENAV OBERSTE KOMPONENTE UND DIE TOP BAR KIND -> SIDENAV LEGT SICH ÜBER DIE TOP BAR
    //IM GEGENSATZ DAZU ANGULAR-APP: TOP-BAR ALS HÖCHSTE KOMPONENTE; SIDENAV LIEGT DARUNTER

    return (
        <>
            <Navbar>
                <Nav>
                    <Nav.Item icon={<FaIcons.FaBars />} onClick={toggleExpanded} />
                </Nav>
                <Navbar.Brand>BA React Project</Navbar.Brand>
            </Navbar>


            <div style={{ width: 240 }}>
                <Sidenav expanded={expanded}>
                    <Sidenav.Body className="sidenav">
                        <Nav>
                            <Nav.Item as={NavLink} href="/" icon={<AiIcons.AiFillHome />}>
                                Home
                            </Nav.Item>
                            <Nav.Item as={NavLink} href="/spaceholder" icon={<MdIcons.MdHelp />}>
                                Spaceholder
                            </Nav.Item>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </div>
            
            <Outlet />



        </>
    )




    // return (
    //     <>
    //         <IconContext.Provider value={{ color: "#fff" }}>
    //             <div className="navbar">
    //                 <Link to="#" className="menu-bars">
    //                     <FaIcons.FaBars onClick={showSidebar} />
    //                 </Link>
    //                 <div className={sidebar ? "title centered" : "title"}>BA React Project</div>
    //             </div>
    //             <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
    //                 <ul className="nav-menu-items" onClick={showSidebar}>
    //                     <li className="navbar-toggle">
    //                         <Link to="#" className="menu-bars">
    //                             <AiIcons.AiOutlineClose />
    //                         </Link>
    //                     </li>
    //                     <li className="nav-text">
    //                         <Link to="/">
    //                             <AiIcons.AiFillHome />
    //                             <div className='text'>Home</div>
    //                         </Link>
    //                     </li>
    //                     <li className="nav-text">
    //                         <Link to="/spaceholder">
    //                             <AiIcons.AiFillHome />
    //                             <div className='text'>Spaceholder</div>
    //                         </Link>
    //                     </li>
    //                 </ul>
    //             </nav>

    //             <Outlet />
    //         </IconContext.Provider>
    //     </>
    // )


}

export default NavBar;
