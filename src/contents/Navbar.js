import React, { useState } from "react";
import {Nav, Navbar, Container, Image} from "react-bootstrap";
import myLogo from "../assets/images/PNG/newEnm.png";
import BurgerLogo from "../assets/images/PNG/burger-logo.png";
import '../assets/styles/navbar.css'

export default function NavbarTop(){

  const [clicked, isClicked] = useState(false);
  const [navbarBg, setNavbarBG] = useState(false);

  const navClicked = () => {
    isClicked(!clicked)
  }

  const changeBackground = () => {
    // console.log(window.scrollY )
    if(window.scrollY >= 150){
      setNavbarBG(true)
    } else {
      setNavbarBG(false)
    }
  }

  window.addEventListener("scroll", changeBackground);

    return(
        <Navbar collapseOnSelect className={`${clicked && 'show-bg'} ${navbarBg && 'active'}`} fixed="top" expand="sm">
        <Container>

              <Navbar.Brand className="w-25 h-25"  href="#home">
                   <Image className="brand-logo img-fluid w-75" src={myLogo} alt="lee-logo" />
              </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={navClicked}/>
        
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#works">Works</Nav.Link>
              <Nav.Link href="#contacts">Contact Me!</Nav.Link>
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