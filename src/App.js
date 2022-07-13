import React, { useEffect, useRef } from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Skills from './Components/Skills'; 
import Works from './Components/Works';
import Contacts from './Components/Contacts';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import './App.css';


function App() {

  
  return (
    <div className="main-cont">   

        <Navbar />
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .25 }}
          >
                

              <HomePage />
              
          </motion.div>

          <Skills/>
          
          <Works />

          <Contacts />

     <div className='footer'>
        Copyright&copy; 2022 <b>Lee</b> 
     </div>
   </div>
  );
}

export default App;
