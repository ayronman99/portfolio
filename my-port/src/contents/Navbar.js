import React from "react";
import {Nav, Navbar, Container, NavDropdown} from "react-bootstrap";
import myLogo from "../assets/images/SVG/newEnm.svg";
import '../assets/styles/navbar.css'

export default function NavbarTop(){
    return(
        <Navbar className="navbar" fixed="top" expand="lg">
        <Container className="d-flex flex-row">
          <Navbar.Brand className="w-25" href="#home">
              <img className="brand-logo img-fluid w-75" src={myLogo} alt="lee-logo"/>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Skills</Nav.Link>
              <Nav.Link href="#link">Works</Nav.Link>
              <Nav.Link href="#link">Contact Me!</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
  </Navbar>
    )
}



/*
<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
*/