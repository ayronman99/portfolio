import React, { useEffect } from "react";
import HTML5 from '../assets/images/PNG/html5.png';
import CSS3 from '../assets/images/PNG/css3.png';
import JSCRIPT from '../assets/images/PNG/js-logo.png';
import NODEJS from '../assets/images/PNG/nodejs.png';
import REACTLOGO from '../assets/images/PNG/react-logo.png';
import MONGODB from '../assets/images/PNG/mongodb-logo.png';
import BOOTSTRAP from '../assets/images/SVG/bootstrap-logo.svg';
import SASS from '../assets/images/PNG/sass-logo.png';
import SkillsHolder from "./subComponents/SkillsHolder";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import '../assets/styles/about.css';


export default function About({aboutRefHandler}){
   
    const { ref, inView } = useInView({threshold: 0.55});

    const aboutInternalRefHandler = () => {
        aboutRefHandler(inView);
    }

    useEffect(()=> {
        aboutInternalRefHandler()
    })

    

    return (
    <div ref={ref} id="about"  className="about container-fluid row row-cols-1 row-cols-sm-2">
        <div className="col">
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
                    Hi there again! A little about me introduction. I am a self-taught web dev, I have a degree in Computer Techonology. I studied mostly hardware stuff and little in the software area but I am really passionate about software. </p>

                    <p>That’s why I decided to pursue a career path and study it on my own. I really love writing code and seeing it’s sweet result. Though, it’s not always smooth sailing. The bitter-sweet ride in this area of expertise is what really allures me!</p>

                    <p>
                    Whether you're looking to attract prospect and potential clients or just show the world your masterpiece. With my skillset I can help you in creating your dream website.
                    </p>
            </motion.div>
        </div >
          
        <div className="col">
            <div className="skills-logo container mt-3">
                <p className="tech-skills">Tech Stacks:</p>
                <div className="row">
                        <SkillsHolder
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: {delay: .2}}}
                            viewport={{ once: true }}
                            srcImg={NODEJS}
                            altTxt={'nodejs-logo'}
                            imgClxNm={"img-thumbnail"}
                        />

                        <SkillsHolder
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: {delay: .23}}}
                            viewport={{ once: true }}
                            srcImg={REACTLOGO}
                            altTxt={'react-logo'}
                            imgClxNm={"reactlogo img-fluid"}
                        />

                        <SkillsHolder
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: {delay: .3}}}
                            viewport={{ once: true }}
                            srcImg={JSCRIPT}
                            altTxt={'javascript-logo'}
                            imgClxNm={"img-fluid"}
                        />

                        
                </div>


                    <div className="row mb-2">
                        <div className="col-4">
                            </div>

                            <SkillsHolder
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, transition: {delay: .4}}}
                                viewport={{ once: true }}
                                srcImg={MONGODB}
                                altTxt={'mongodb-logo'}
                                imgClxNm={"img-thumbnail"}
                            />
                        <div className="col-4">
                            </div>
                    </div>
                    
                    <div className="row">

                            <SkillsHolder
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, transition: {delay: .45}}}
                                viewport={{ once: true, amount: 0.8  }}
                                srcImg={BOOTSTRAP}
                                altTxt={'bootstrap-logo'}
                                imgClxNm={"img-fluid"}
                            />

                            <SkillsHolder
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, transition: {delay: .32}}}
                                viewport={{ once: true, amount: 0.8  }}
                                srcImg={SASS}
                                altTxt={'sass-logo'}
                                imgClxNm={"img-fluid"}
                            />

                            <SkillsHolder
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, transition: {delay: .36}}}
                                viewport={{ once: true, amount: 0.8  }}
                                srcImg={CSS3}
                                altTxt={'css3-logo'}
                                imgClxNm={"img-fluid"}
                            />
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-4">
                        </div>
                        <SkillsHolder
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, transition: {delay: .15}}}
                                viewport={{ once: true, amount: 0.8  }}
                                srcImg={HTML5}
                                altTxt={'html5-logo'}
                                imgClxNm={"img-fluid"}
                            />
                            <div className="col-4">
                        </div>
                    </div>
            </div>
        </div>
       
    </div>
    )
}