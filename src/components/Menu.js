import React from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';

export default class Menu extends React.Component {
  render() {
    return(
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Home</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Galería</NavItem>
            <NavItem eventKey={2} href="#">Contacto</NavItem>
            <NavItem eventKey={3} href="#">Acerca de</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Admin</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}