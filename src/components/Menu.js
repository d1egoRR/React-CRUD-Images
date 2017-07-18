import React from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';

export default class Menu extends React.Component {
  render() {
    return(
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Home</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/gallery">Galería</NavItem>
            <NavItem eventKey={2} href="/contact">Contacto</NavItem>
            <NavItem eventKey={3} href="/about">Acerca de</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/admin">Admin</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}