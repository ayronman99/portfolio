import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faMobilePhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/contacts.css';

export default function Contacts(){


    const betaClick = (e) =>{
        e.preventDefault();
        alert("Submitted! But not really this is still in beta :D.")
    }
    return(
        <div>
            <div id="contacts" className="contacts-section mt-3 vh-100">
                  <h3> Let's work together! </h3>
                  <div className="intro-contacts mb-3">
                    
                  <img className="img-mario" src="https://play-lh.googleusercontent.com/5LIMaa7WTNy34bzdFhBETa2MRj7mFJZWb8gCn_uyxQkUvFx_uOFCeQjcK16c6WpBA3E" alt="it's me Mario!"/>
                </div>
                <div className="details-contacts">
                    <p>y
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span> testmail@gmail.com</span>
                    </p>
                    
                </div>
               <div className="social-media container">
                <div className="social-holder row row-cols-sm-2 row-cols-md-4">
                     <div className="col">
                            <a className="linkedIn" href="https://www.linkedin.com/in/lee-lacay-5564b51a4/" target="_blank">
                             <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                        <div className="col">
                            <a className="gitHub" href="https://www.github.com/" target="_blank">
                                <FontAwesomeIcon icon={faGithub} />
                                </a>
                        </div>
                        <div className="col">
                        <a className="twitter" href="https://www.twitter.com/" target="_blank">
                             <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                        <div className="col">
                            <a className="facebook" href="https://www.facebook.com/" target="_blank">
                             <FontAwesomeIcon icon={faFacebook} />
                            </a> 
                        </div>
                </div>
                    
               </div>

          </div>
        </div>
    )
}