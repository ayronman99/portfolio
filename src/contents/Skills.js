import React from "react";
import HTML5 from '../assets/images/PNG/html5.png';
import CSS3 from '../assets/images/PNG/css3.png';
import JSCRIPT from '../assets/images/PNG/js-logo.png';
import NODEJS from '../assets/images/PNG/nodejs.png';
import REACTLOGO from '../assets/images/PNG/reactjs.png';
import '../assets/styles/skills.css';


export default function Skills(){
    return (
    <div id="skills"  className="skills container vh-100">
          <div className="quote-container">
            <p className="quote-text">
                    “One language sets you in a corridor for life. 
                    Two languages open every door along the way.”
                </p>
                
                <p className="quote-author"> 
                        — Frank Smith
                </p>
          </div>

          <div className="about-sales">
                <p>
                Whether you're looking to attract prospect and potential clients or just show the world your masterpiece. With my skillset I can help you in creating your dream website.
                </p>
          </div>

        <div className="skills-logo container mt-5">
            <div className="row">
                <div className="col">
                <img className="img-fluid" src={HTML5} alt="html5"/>
                </div>
                <div className="col">
                <img className="img-fluid" src={JSCRIPT} alt="javascript"/>
                </div>
                <div className="col">
                <img className="img-fluid" src={CSS3} alt="css3"/>
                </div>
                
                <div className="row mt-3 mx-auto">
                    <div className="col-6">
                    <img className="img-fluid" src={NODEJS} alt="nodejs"/>
                    </div>
                    <div className="col-6">
                    <img className="reactlogo img-fluid" src={REACTLOGO} alt="reactlogo"/>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="container mt-4">
            
        </div> */}

    </div>
    )
}