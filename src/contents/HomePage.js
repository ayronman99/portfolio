import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import unDrawProud from '../assets/images/SVG/undrawproud.svg';

import "../assets/styles/homepage.css";

export default function HomePage(){

    return(
        <div id="home" className="home-page vh-100 text-bg-primary d-flex justify-content-center flex-column">
                <div className="top-greeting d-flex align-items-center flex-column">
                <motion.div
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{delay: 0.5}}
                >
                    <img className="center-logo" src={unDrawProud} alt="test" />
                  </motion.div>
                  
                    <section className="intro-text  d-flex align-items-center flex-column">
                            <motion.div
                                initial={{x: "-100vw"}}
                                animate={{x: 0}}
                                transition={{delay: 0.5}}
                            >
                                <h2>
                                    Hi, my name is Lee!
                                </h2>
                            </motion.div>
                            <motion.div
                                initial={{x: "100vw"}}
                                animate={{x: 0}}
                                transition={{delay: 0.5}}
                            >
                                <p>
                                    I am a web developer with a background in Computer Technology. I am immensely fond technology and innovative ideas. Know more about my skills below to know how I can help! 
                                </p>
                            </motion.div>
                </section>
                </div>

                <motion.div 
                    className="explore w-100 mb-3"
                    initial={{y: 400}}
                    animate={{y: 0}}
                    transition={{delay: 0.5}}
                >

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

                </motion.div>

        </div>
    )

}