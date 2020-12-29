import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Home.css";
// import logo from "";
class  Header extends Component  {
  render() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <li>
      <NavLink to="home">H i b a</NavLink>
      </li>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#skills">skills</Nav.Link>
      <Nav.Link href="#experiens">experiens</Nav.Link>
      <Nav.Link href="#contact">contact</Nav.Link>
    </Nav>
    <Nav>
     
 
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}
}
export default Header;