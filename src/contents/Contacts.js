import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faMobilePhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/contacts.css';

export default function Contacts(){


    const betaClick = (e) =>{
        e.preventDefault();
        alert("Submitted! But not really this is still in beta :D.")
    }
    return(
        <div>
            <div id="contacts" className="contacts-section mt-5">
                <div className="intro-contacts">
                    <h3> Let's work together! </h3>
                    <FontAwesomeIcon icon={faUserCircle} size="9x"/>
                </div>
                <div className="details-contacts">
                    <p>
                        <FontAwesomeIcon icon={faMobilePhone} />
                        <span> 	&#40;+63&#41;test-number</span>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span> testmail@gmail.com</span>
                    </p>
                    
                </div>
                <div className="form-contacts w-75 m-auto">
                        <form onSubmit={betaClick}>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter your e-mail here."/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="forName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="forName" placeholder="Enter your name here." />
                            </div>
                            <div className="form-floating mb-3">
                                    <textarea className="form-control" placeholder="Leave your message" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                                    <label htmlFor="floatingTextarea2">What's on your mind?</label>
                            </div>
                           
                           
                            <button type="submit" className="btn btn-primary mb-3">Submit</button>
                            
                         </form>
                </div>

          </div>
        </div>
    )
}