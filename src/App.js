import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import About from './Components/About'; 
import Works from './Components/Works';
import Contacts from './Components/Contacts';
import { motion } from 'framer-motion';
import './App.css';


function App() {

  
  const [homeRef, setHomeRef] = useState(false);
  const [aboutRef, setAboutRef] = useState(false);
  const [worksRef, setWorksRef] = useState(false);
  const [contactsRef, setContactsRef] = useState(false);
  
  const homeRefHandler = refStatus => {
    setHomeRef(refStatus);
  }
  const aboutRefHandler = refStatus => {
    setAboutRef(refStatus);
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
              aboutRef={aboutRef}
              worksRef={worksRef}
              contactsRef={contactsRef}

            />

            <HomePage homeRefHandler={homeRefHandler}/>
              
          </motion.div>

          <About aboutRefHandler={aboutRefHandler}/>
          
          <Works worksRefHandler={worksRefHandler}/>

          <Contacts contactsRefHandler={contactsRefHandler}/>

     <div className='footer sticky-bottom mt-3'>
        Copyright&copy; <b>Lee</b> 2023  
     </div>
   </div>
  );
}

export default App;
