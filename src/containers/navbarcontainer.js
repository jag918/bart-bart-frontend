
import React, {Component} from 'react';
import '../navbar.css'
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class NavbarContainer extends Component {
  render() {
    return (
        <Navbar>
          <Nav>
          <NavItem eventKey={2} href="/sign">
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem eventKey={1}>
            <Link to="/animals">Animal List</Link>
          </NavItem>
          <NavItem eventKey={1}>
            <Link to="/user">Profile</Link>
          </NavItem>
          <NavItem eventKey={2} href="/sign">
            <Link to="/sign">Sign in</Link>
          </NavItem>
        </Nav>
        </Navbar>
    )
  }
}

export default NavbarContainer;



// <Navbar>
//   <Navbar.Header>
//     <Navbar.Brand>
//       <Link to="/">Home</Link>
//     </Navbar.Brand>
//   </Navbar.Header>
//   <Nav>
//     <NavItem eventKey={1}>
//       <Link to="/animals">Animal List</Link>
//     </NavItem>
//   <NavItem eventKey={2} href="/sign">
//     <Link to="/sign">Sign in</Link>
//   </NavItem>
//   <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//     <MenuItem eventKey={3.1}><Link to="/user">Profile</Link></MenuItem>
//     <MenuItem eventKey={3.2} href="/favorite" > Favorites</MenuItem>
//     <MenuItem eventKey={3.3}>Sign In</MenuItem>
//     <MenuItem divider />
//     <MenuItem eventKey={3.4}>Sign Out</MenuItem>
//   </NavDropdown>
// </Nav>
// </Navbar>
