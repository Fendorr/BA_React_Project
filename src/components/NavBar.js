import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";

//Icons
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import { IconContext } from "react-icons";

import "./NavBar.css"
import 'rsuite/dist/rsuite.min.css';

import { Navbar, Nav, Sidenav, Sidebar, Container, Content } from 'rsuite';

function NavBar() {
    const [expanded, setExpanded] = useState(true);

    const toggleExpanded = () => setExpanded(!expanded);

    const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
        <Link ref={ref} to={href} {...rest}>
            {children}
        </Link>
    ));

    //TODO Navbar Header Element ersetzen durch custom component

    return (
        <>
            <Navbar>
                <Nav>
                    <Nav.Item icon={<FaIcons.FaBars />} onClick={toggleExpanded} />
                </Nav>
                <Navbar.Brand>BA React Project</Navbar.Brand>
            </Navbar>

            <Container>
                <Sidebar width={expanded ? 250 : 45} collapsible>
                    <Sidenav className='sidenav' expanded={expanded} width={expanded ? 250 : 45}>
                        <Sidenav.Body>
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
                </Sidebar>
                <Content>
                    <Outlet />
                </Content>
            </Container>
        </>
    )
}

export default NavBar;
