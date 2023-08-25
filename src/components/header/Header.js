import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import './Header.css';
import woofers from '../../assets/images/header/wooferswording.png';

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Nav.Link href="/">
            <img
              alt="woofers"
              src={woofers}
              style={{
                width: '200px',
                padding: '0px 15px 0px 15px',
              }}
            />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: '100%' }}>
            <Nav.Link style={{ textAlign: 'right' }} href="/job">
              Job
            </Nav.Link>
            <Nav.Link style={{ textAlign: 'right' }} href="/about">
              About
            </Nav.Link>
            <Nav.Link style={{ textAlign: 'right' }} href="/service">
              Service
            </Nav.Link>
            <Nav.Link style={{ textAlign: 'right' }} href="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link style={{ textAlign: 'right' }} href="/terms">
              Terms
            </Nav.Link>
            <div style={{ textAlign: 'right' }}>
              <a href="tel:+447421479304">
                <i className="fa fa-phone" style={{ fontSize: '18px' }} />
              </a>

              <a href="https://www.facebook.com/WoofersBristol/">
                <i
                  className="fa fa-facebook-square"
                  style={{ fontSize: '18px' }}
                />
              </a>
            </div>
            <div style={{ textAlign: 'right' }}>
              <a href="mailto:noreply@woofersbristol.co.uk">
                <i className="fa fa-at" style={{ fontSize: '18px' }} />
              </a>

              <a href="https://www.instagram.com/woofersbristol/">
                <i className="fa fa-instagram" style={{ fontSize: '18px' }} />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
