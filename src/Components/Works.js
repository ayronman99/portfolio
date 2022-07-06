import React, {useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import '../assets/styles/works.css';

const worksVariants = {
    offscreen: {
        y: 150
      },
      onscreen: {
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8
        }
      }
}


export default function Works() {
   
    return (
        <div id="works" className="works mt-5">
            <motion.h2
                initial={{opacity: 0, scale: 0}}
                whileInView={{opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 1 }}
            >
                My Works:
            </motion.h2>
            
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3">

                    <motion.div 
                        className="col mb-3"
                        variants={worksVariants}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <div className="card m-auto">
                            <img src="https://t2.genius.com/unsafe/276x276/https%3A%2F%2Fimages.genius.com%2F9b98cc2c1f1d0be4ecc88ba0f8d80851.350x350x1.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </motion.div>

                    
                    <motion.div 
                        className="col mb-3"
                        variants={worksVariants}initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <div className="card m-auto">
                            <img src="https://t2.genius.com/unsafe/276x276/https%3A%2F%2Fimages.genius.com%2F9b98cc2c1f1d0be4ecc88ba0f8d80851.350x350x1.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="col mb-3"
                        variants={worksVariants}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <div className="card m-auto">
                            <img src="https://t2.genius.com/unsafe/276x276/https%3A%2F%2Fimages.genius.com%2F9b98cc2c1f1d0be4ecc88ba0f8d80851.350x350x1.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            <div className="see-more d-flex justify-content-center flex-row align-items-center">
                <motion.p className="me-3 mt-2"
                    initial={{x: '-100%'}}
                    whileInView={{x: 0, transition: { type: "spring", damping: 5 }}}
                    viewport={{ once: true, amount: 0.7 }}
                > 
                    See More  
               </motion.p>

               <motion.a 
                 href="#"
                 initial={{x: '-100%'}}
                 whileInView={{x: 0, rotate: 360, transition: { type: "spring", damping: 3 }}}
                 viewport={{ once: true, amount: 0.7 }}
               > 
                <span className="chev-right-1">
                       <FontAwesomeIcon icon={faChevronCircleRight} />
                        </span>
               </motion.a>
            </div>
        </div>

    )
}