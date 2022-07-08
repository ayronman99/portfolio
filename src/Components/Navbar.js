import React, { useState } from "react";
import myLogo from "../assets/images/PNG/newEnm.png";
import '../assets/styles/navbar.css';

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
        <nav className={`navbar navbar-dark fixed-top navbar-expand-sm ${navbarBg && 'show-bg'}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className="img-fluid" src={myLogo} alt="Lee's brand logo"/>
              </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${clicked && ""}`} id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" href="#home" onClick={navClicked}>Home</a>
                <a className="nav-link" href="#skills" onClick={navClicked}>Skills</a>
                <a className="nav-link" href="#works" onClick={navClicked}>Works</a>
                <a className="nav-link" href="#contacts" onClick={navClicked}>Contact Me!</a>
              </div>
            </div>
          </div>
      </nav>
    )
}



/*
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

*/