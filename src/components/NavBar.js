import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";

//Icons
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import { IconContext } from "react-icons";

import "./Navbar.css"
import 'rsuite/dist/rsuite.min.css';

import { Navbar, Nav, Sidenav, Sidebar, Container, Content } from 'rsuite';
import { Icon } from '@rsuite/icons';

function NavBar() {
    const [expanded, setExpanded] = useState(true);

    const toggleExpanded = () => setExpanded(!expanded);

    const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
        <Link ref={ref} to={href} {...rest}>
            {children}
        </Link>
    ));

    //rsuite icon nutzen!

    return (
        <>
            <Navbar>
                <Nav>
                    <Nav.Item icon={<Icon icon="dashboard" />} onClick={toggleExpanded} />
                </Nav>
                <Navbar.Brand>BA React Project</Navbar.Brand>
            </Navbar>

            <Container>
                <Sidebar width={expanded ? 200 : 45} collapsible>
                    <Sidenav className='sidenav' expanded={expanded} width={expanded ? 200 : 45}>
                        <Sidenav.Body>
                            <Nav>
                                <Nav.Item as={NavLink} href="/" icon={<Icon icon="dashboard" />}>
                                    Home
                                </Nav.Item>
                                <Nav.Item as={NavLink} href="/spaceholder" icon={<Icon icon="dashboard" />}>
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
