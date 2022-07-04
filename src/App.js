import Navbar from './contents/Navbar';
import HomePage from './contents/HomePage';
import Skills from './contents/Skills'; 
import Works from './contents/Works';
import Contacts from './contents/Contacts';
import { motion } from 'framer-motion';
import './App.css';


function App() {
  return (
    <motion.div className="main-cont"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: .25 }}
    // transition={{ duration: 1 }}
    // transition={{ duration: 0.5 }}[0, 0.25, 0.5, 0.75, 1]
    >   
       <Navbar />
      <HomePage />
      <div>
            <Skills />
            <Works />
            <Contacts />
      </div>
   
   </motion.div>
  );
}

export default App;
