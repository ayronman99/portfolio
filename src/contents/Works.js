import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/works.css';



export default function Works() {
    return (
        <div id="works" className="works">
            <h2>My Works:</h2>
            
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-3">
                        <div className="card m-auto">
                            <img src="https://t2.genius.com/unsafe/276x276/https%3A%2F%2Fimages.genius.com%2F9b98cc2c1f1d0be4ecc88ba0f8d80851.350x350x1.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card m-auto">
                            <img src="https://t2.genius.com/unsafe/276x276/https%3A%2F%2Fimages.genius.com%2F9b98cc2c1f1d0be4ecc88ba0f8d80851.350x350x1.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card m-auto">
                            <img src="https://t2.genius.com/unsafe/276x276/https%3A%2F%2Fimages.genius.com%2F9b98cc2c1f1d0be4ecc88ba0f8d80851.350x350x1.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="see-more d-flex justify-content-center flex-row align-items-center">
                <p className="me-3 mt-2"> 
                    See More  
               </p>

               <a href="#"> 
                <span className="chev-right-1">
                                <FontAwesomeIcon icon={faChevronCircleRight} />
                        </span>
               </a>
            </div>
        </div>

    )
}