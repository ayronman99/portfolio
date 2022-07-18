import React, { useState, useEffect, useRef } from "react";
import myLogo from "../assets/images/PNG/newEnm.png";
import '../assets/styles/navbar.css';

export default function NavbarTop({
  homeRef, aboutRef, worksRef, contactsRef}){

  const [clicked, isClicked] = useState(false);
  const [navbarBg, setNavbarBG] = useState(false);


  const navClicked = () => {
    isClicked(!clicked)
  }

  const changeBackground = () => {
    if(window.scrollY >= 150){
      setNavbarBG(true)
    } else {
      setNavbarBG(false)
    }
  }


  const homeSpyScroll = `nav-link ${homeRef && "active"}`;
  const aboutSpyScroll = `nav-link ${aboutRef && "active"}`;
  const worksSpyScroll = `nav-link ${worksRef && "active"}`;
  const contactsSpyScroll = `nav-link ${contactsRef && "active"}`;
  
  useEffect(()=> {
    window.addEventListener("scroll", changeBackground);
   
  })

    return(
      
       <nav id="navbar-spy" className={`navbar fixed-top navbar-expand-sm ${navbarBg && 'show-bg navbar-dark'}`}>
      <div className="container-fluid">
          <a className="navbar-brand" href="#home">
              <img className="img-fluid" src={myLogo} alt="Lee's brand logo"/>
            </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className={`${navbarBg && 'navbar-toggler-icon'}`}>
          </span>
        </button>
        <div className={`navbar-collapse collapse justify-content-end ${clicked && ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav nav-pills">
            
              <li className="nav-item">
                <a className={homeSpyScroll} href="#home" onClick={navClicked}>Home</a>
              </li>
              <li className="nav-item">
                <a  className={aboutSpyScroll} href="#about" onClick={navClicked}>About</a>
              </li>
              <li className="nav-item">
                <a className={worksSpyScroll} href="#works" onClick={navClicked}>Works</a>
              </li>
              <li className="nav-item">
                <a className={contactsSpyScroll} href="#contacts" onClick={navClicked}>Contact Me!</a>
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