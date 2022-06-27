import Navbar from './contents/Navbar';
import HomePage from './contents/HomePage';
import Skills from './contents/Skills'; 
import './App.css';


function App() {
  return (
    <div className="main-cont">   
       <Navbar />
      <HomePage />
      <div>
            <Skills />
          <div id="works" className="works-page vh-100 d-flex justify-content-center align-items-center text-bg-secondary">
                <h1> TO BE UPDATED </h1>
          </div>
          <div id="contacts" className="contacts-page vh-100 d-flex justify-content-center align-items-center text-bg-info">
                <h1> TO BE UPDATED </h1>
          </div>
      </div>
   
   </div>
  );
}

export default App;
