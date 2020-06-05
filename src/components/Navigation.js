import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import woofers from '../assets/images/navigation/wooferswording.png';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img 
                        alt="woofers"
                        src={woofers}
                        style={{
                            width: '200px',
                            padding: '0px 15px 0px 15px'
                        }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Link style={{textAlign: "right"}} href="#about">About</Nav.Link>
                        <Nav.Link style={{textAlign: "right"}} href="#service">Service</Nav.Link>
                        <Nav.Link style={{textAlign: "right"}} href="#gallery">Gallery</Nav.Link>
                        <Nav.Link style={{textAlign: "right"}} href="#terms">Terms</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        )

    }
}

export default Navigation;