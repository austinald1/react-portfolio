import React from "react";

import { Container, Navbar, Nav } from 'react-bootstrap';

function Header(){
    return (
        <Navbar expand="md" bg="primary" id="navbar" sticky="top" className="shadow-sm">
            {/* <Container> */}
            <Nav className="me-auto" >
                <Nav.Link className="linkText" href="/" to="/">Home</Nav.Link>
                <Nav.Link className="linkText" href="/about-me" to="/about-me">About Me</Nav.Link>
                <Nav.Link className="linkText" href="/portfolio" to="/portfolio">Portfolio</Nav.Link>
                <Nav.Link className="linkText" href="/contact" to="/contact">Contact</Nav.Link>
                <Nav.Link className="linkText" href="/resume" to="/resume">Resume</Nav.Link>
            </Nav>
            {/* </Container> */}

        </Navbar>
    )
}

export default Header;