import React from 'react';
import './index.css';
import Img from './Images/Card1.jpg'


function Card(props) {
    return (
        <>


                            <div className="col-md-4 col-10 ">
                                <div className="card">
                                    <img src={props.imgsrc} className="card-img-top" alt="img1" />
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-outline-danger">Know More</a>
                                    </div>
                                </div>
                            </div>


        </>
    );

}

export default Card;