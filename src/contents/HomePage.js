import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import unDrawProud from '../assets/images/SVG/undrawproud.svg';

import "../assets/styles/homepage.css";

export default function HomePage(){

    return(
        <div id="home" className="home-page vh-100 text-bg-primary d-flex justify-content-center flex-column">
                <div className="top-greeting d-flex align-items-center flex-column">
                    <img className="center-logo" src={unDrawProud} alt="test" />
                    <section className="intro-text  d-flex align-items-center flex-column">
                        <h2>
                        Hi, my name is Lee!
                        </h2>
                        <p>
                        I am a web developer with a background in Computer Technology. I am immensely fond technology and innovative ideas. Know more about my skills below to know how I can help! 
                        </p>
                        {/* <p>
                        
                        </p> */}
                </section>
                </div>

                <div className="explore w-100 mb-3">
                    <h3>Explore more</h3>
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