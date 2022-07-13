import React, { useState, useEffect } from "react";
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

  useEffect(()=> {
    window.addEventListener("scroll", changeBackground);
  })

 

    return(
       <nav id="navbar-spy" className={`navbar navbar-dark fixed-top navbar-expand-sm ${navbarBg &&'show-bg'}`}>
      <div className="container-fluid">
          <a className="navbar-brand" href="#home">
              <img className="img-fluid" src={myLogo} alt="Lee's brand logo"/>
            </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <div className={`navbar-collapse collapse  ${clicked && ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav nav-pills me-auto mb-2 mb-lg-0">
            
              <li className="nav-item">
                <a className="nav-link" href="#home" onClick={navClicked}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills" onClick={navClicked}>Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#works" onClick={navClicked}>Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacts" onClick={navClicked}>Contacts</a>
              </li>
           
          </ul>
        </div>
      </div>
    </nav>

    
    )
}
/**
 * <nav id="navbar-to-spy" className={`navbar fixed-top navbar-expand-sm ${navbarBg &&'show-bg'}`} >
          <div className="container-fluid border border-danger">
            <a className="navbar-brand" href="#">
              <img className="img-fluid" src={myLogo} alt="Lee's brand logo"/>
              </a>
            <button className="navbar-toggler" 
             type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
              </span>
            </button>
            <div className={`border d-flex justify-content-center navbar-collapse collapse  ${clicked && ""}`} id="navbarNavAltMarkup">

              <div className="navbar-nav">
                <a className="nav-link mx-5" href="#home" onClick={navClicked}>Home</a>
                <a className="nav-link mx-5" href="#skills" onClick={navClicked}>Skills</a>
                <a className="nav-link mx-5" href="#works" onClick={navClicked}>Works</a>
                <a className="nav-link mx-5" href="#contacts" onClick={navClicked}>Contact Me!</a>
              </div>
              
            </div>
          </di
 */


/*
 

*/