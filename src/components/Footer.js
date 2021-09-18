import React from "react";

import { Container, Navbar, Nav, NavItem } from 'react-bootstrap';

function Footer(){
    return (
        <Navbar expand="md" bg="primary" id="navbar" sticky="top" className="shadow-sm">
        <hr></hr>
        {/* <Container> */}
            <Nav className="me-auto" >
                <NavItem>Copyright (C) Austin</NavItem>
            </Nav>
        {/* </Container> */}
        </Navbar>
    );
}

export default Footer;