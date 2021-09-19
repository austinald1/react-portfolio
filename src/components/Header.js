import React from "react";

import { Navbar, Nav } from 'react-bootstrap';

function Header(){
    return (
        <header>
            <div class="banner">
                <h2>Austin Alderete</h2>
            </div>
            <Navbar expand="md" bg="" id="navbar" sticky="top" className="shadow-sm navigation">
                {/* <Container> */}
                <Nav className="me-auto" >
                    <Nav.Link className="linkText" href="/about-me" to="/about-me">About Me</Nav.Link>
                    <Nav.Link className="linkText" href="/portfolio" to="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link className="linkText" href="/contact" to="/contact">Contact</Nav.Link>
                    <Nav.Link className="linkText" href="/resume" to="/resume">Resume</Nav.Link>
                </Nav>
                {/* </Container> */}

            </Navbar>
        </header>
    )
}

export default Header;