import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import '../assets/styles/contacts.css';

export default function Contacts(){

    

    return(
            <div id="contacts" className="contacts-section mt-5">
                  <motion.h3
                    initial={{x: '-100%'}}
                    whileInView={{ x: 0, transition: { type: "spring", damping: 4 } }}
                    viewport={{ once: true }}
                  > Let's work together! </motion.h3>

                  <div className="intro-contacts mb-3">
                    
                  <motion.img 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [1,2,1] }}
                    viewport={{ once: true, amount: 0.3 }}
                  className="img-mario" src="https://play-lh.googleusercontent.com/5LIMaa7WTNy34bzdFhBETa2MRj7mFJZWb8gCn_uyxQkUvFx_uOFCeQjcK16c6WpBA3E" alt="it's me Mario!"/>
                </div>
                <div className="details-contacts">
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span><a className="link-email" href="mailto:itechman32@gmail.com"> itechman32@gmail.com </a></span>
                    </p>
                    
                </div>
               <div className="social-media container">
                <div className="social-holder row row-cols-sm-2 row-cols-md-4">
                     <motion.div className="col"
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1, transition: {delay: .25}}}
                         viewport={{ once: true }}
                     >
                            <a className="linkedIn" href="https://www.linkedin.com/in/lee-lacay-5564b51a4/" target="_blank">
                             <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </motion.div>

                        <motion.div className="col"
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1, transition: {delay: .5}}}
                         viewport={{ once: true }}
                     >
                            <a className="gitHub" href="https://www.github.com/" target="_blank">
                                <FontAwesomeIcon icon={faGithub} />
                                </a>
                        </motion.div>

                        <motion.div className="col"
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1, transition: {delay: .75}}}
                         viewport={{ once: true }}
                     >
                           <a className="twitter" href="https://www.twitter.com/" target="_blank">
                             <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </motion.div>

                        <motion.div className="col"
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1, transition: {delay: 1}}}
                         viewport={{ once: true }}
                     >
                            <a className="facebook" href="https://www.facebook.com/" target="_blank">
                             <FontAwesomeIcon icon={faFacebook} />
                            </a> 
                        </motion.div>
                </div>
                    
               </div>

          </div>
    )
}