import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import unDrawProud from '../assets/images/SVG/undrawproud.svg';

import "../assets/styles/homepage.css";

export default function HomePage(){

    return(
        <div className="home-page vh-100 text-bg-primary">
                <div className="top-greeting d-flex align-items-center flex-column">
                    <img className="center-logo" src={unDrawProud} alt="test" />
                    <section className="intro-text  d-flex align-items-center flex-column">
                        <h2>
                        Welcome to my Portfolio
                        </h2>
                        <p>
                        I am a web developer with a background in Computer Technology. I am immensely fond technology and innovative ideas. Know more about my skills below to know how I can help!
                        </p>
                </section>
                </div>

                <div className="explore">
                    <h3>Explore</h3>
                    <div className="chevrons-down"> 
                      <a href="#skills">
                         <span className="chev-1">
                            <FontAwesomeIcon icon={faChevronDown} />
                            </span>

                        <span className="chev-2">
                            <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                      </a>
                        
                    </div>

                </div>

        </div>
    )

}