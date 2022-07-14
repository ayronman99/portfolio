import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Skills from './Components/Skills'; 
import Works from './Components/Works';
import Contacts from './Components/Contacts';
import { motion } from 'framer-motion';
import './App.css';


function App() {

  
  const [homeRef, setHomeRef] = useState(false);
  const [skillRef, setSkillRef] = useState(false);
  const [worksRef, setWorksRef] = useState(false);
  const [contactsRef, setContactsRef] = useState(false);
  
  const homeRefHandler = refStatus => {
    setHomeRef(refStatus);
  }
  const skillRefHandler = refStatus => {
    setSkillRef(refStatus);
  }
  const worksRefHandler = refStatus => {
    setWorksRef(refStatus);
  }
  const contactsRefHandler = refStatus => {
    setContactsRef(refStatus);
  }

  return (
    <div className="main-cont">   

       
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .25 }}
          >
            <Navbar 
              homeRef={homeRef}
              skillRef={skillRef}
              worksRef={worksRef}
              contactsRef={contactsRef}

            />

            <HomePage homeRefHandler={homeRefHandler}/>
              
          </motion.div>

          <Skills skillRefHandler={skillRefHandler}/>
          
          <Works worksRefHandler={worksRefHandler}/>

          <Contacts contactsRefHandler={contactsRefHandler}/>

     <div className='footer sticky-bottom'>
        Copyright&copy; 2022 <b>Lee</b> 
     </div>
   </div>
  );
}

export default App;
