import React, { useEffect } from "react";
import HTML5 from '../assets/images/PNG/html5.png';
import CSS3 from '../assets/images/PNG/css3.png';
import JSCRIPT from '../assets/images/PNG/js-logo.png';
import NODEJS from '../assets/images/PNG/nodejs.png';
import REACTLOGO from '../assets/images/PNG/reactjs.png';
import { motion, useAnimation } from "framer-motion";
import '../assets/styles/skills.css';


export default function Skills(){
   
   
    return (
    <div id="skills"  className="skills container mt-5 mb-5" >
          <motion.div 
          className="quote-container"
          initial={{x: "-100%"}}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          >
            <p className="quote-text">
                    “One language sets you in a corridor for life. 
                    Two languages open every door along the way.”
                </p>
                
                <p className="quote-author"> 
                        — Frank Smith
                </p>
          </motion.div>

          <motion.div 
          className="about-sales"
          initial={{x: "100%"}}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          >
                <p>
                Whether you're looking to attract prospect and potential clients or just show the world your masterpiece. With my skillset I can help you in creating your dream website.
                </p>
          </motion.div>

        <div className="skills-logo container mt-5">
            <div className="row">
                    <motion.div 
                    className="col"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: {delay: .2}}}
                    viewport={{ once: true }}
                    >
                        <img className="img-fluid" src={HTML5} alt="html5"/>
                    </motion.div>
                    <motion.div 
                    className="col"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: {delay: .4}}}
                    viewport={{ once: true }}
                    >
                        <img className="img-fluid" src={JSCRIPT} alt="javascript"/>
                    </motion.div>
                    <motion.div 
                    className="col"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: {delay: .6}}}
                    viewport={{ once: true }}
                    >
                        <img className="img-fluid" src={CSS3} alt="css3"/>
                    </motion.div>

             </div>
                
                <div  className="row mt-3 mx-auto">

                        <motion.div 
                        className="col-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: {delay: .8}}}
                        viewport={{ once: true }}
                        >
                            <img className="img-fluid" src={NODEJS} alt="nodejs"/>
                        </motion.div>
                        
                        <motion.div 
                        className="col-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: {delay: 1}}}
                        viewport={{ once: true }}
                        >
                            <img className="reactlogo img-fluid" src={REACTLOGO} alt="reactlogo"/>
                        </motion.div>
                </div>
            </div>
    </div>
    )
}