import React from "react";

import { Container, Row, Col } from 'react-bootstrap';

function Footer(){
    return (
        <Container className="footerContainer">
            <Row> Copyright (C) Austin</Row>
            <Row className="footerLink mt-1">
                <a target="_blank" className="rp-margin-1" href="https://github.com/austinald1" rel="noreferrer">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a target="_blank" className="rp-margin-1" href="https://www.linkedin.com/in/austin-alderete-1a52a620b/" rel="noreferrer">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
            </Row>
        </Container>
    );
}

export default Footer;