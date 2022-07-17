import React, {useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import unDrawProud from '../assets/images/SVG/undrawproud.svg';
import "../assets/styles/homepage.css";

export default function HomePage({ homeRefHandler }){

    const {ref, inView} = useInView({ threshold: 0.8 });

    const homeInternalRefHandler = () => {
        homeRefHandler(inView)
    }
    
    useEffect(()=> {
        homeInternalRefHandler()
    })

    return(
        <div ref={ref} id="home" className="home-page vh-100 d-flex justify-content-center flex-column">
                <div className="top-greeting d-flex align-items-center flex-column mb-5">
            
                    <motion.img className="center-logo" src={unDrawProud} alt="undraw logo intro" 
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        transition={{delay: 0.5}}
                    />
                  
                        <div className="intro-text  d-flex align-items-center flex-column">
                                    <motion.h2
                                        initial={{x: "-100%"}}
                                        animate={{x: 0}}
                                        transition={{delay: 0.5}}
                                    >
                                        Hi, my name is Lee!
                                    </motion.h2>
                                
                                <motion.p
                                    initial={{x: "100%"}}
                                    animate={{x: 0}}
                                    transition={{delay: 0.5}}
                                    >
                                        I am your web developer! And I am immensely fond technology and innovative ideas. Know more about my skills below to know how I can help! 
                                    </motion.p>
                    </div>
                </div>

                <motion.div 
                    className="explore w-100 mb-3"
                    initial={{y: 400}}
                    animate={{y: 0}}
                    transition={{delay: 0.5}}
                >

                    <h3>Explore more</h3>
                    <div className="chevrons-down"> 
                      <a href="#about">
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