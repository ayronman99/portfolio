import Navbar from './contents/Navbar';
import HomePage from './contents/HomePage';
import Skills from './contents/Skills'; 
import Works from './contents/Works';
import Contacts from './contents/Contacts';
import './App.css';


function App() {
  return (
    <div className="main-cont">   
       <Navbar />
      <HomePage />
      <div>
            <Skills />
            <Works />
            <Contacts />
      </div>
   
   </div>
  );
}

export default App;
