
import React, {Component} from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap'

class NavbarContainer extends Component {
  render() {
    return (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Profile</MenuItem>
            <MenuItem eventKey={3.2}> Favorites</MenuItem>
            <MenuItem eventKey={3.3}>Sign In</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Sign Out</MenuItem>
          </NavDropdown>
        </Nav>
        </Navbar>
    )
  }
}

export default NavbarContainer;
