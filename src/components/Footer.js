import React from "react";

import { Container, Navbar, Nav, NavItem } from 'react-bootstrap';

function Footer(){
    return (
        <Container className="footerContainer">
           <div> Copyright (C) Austin</div>
           <div>
                <a target="_blank" href="https://github.com/austinald1">
                    <i className="fab fa-github">GITHUB</i>
                </a>
            </div>
        </Container>
    );
}

export default Footer;