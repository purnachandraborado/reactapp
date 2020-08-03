import React from 'react';
import img3 from '../images/3.jpg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="section-1">
                <div className="banner">
                    <div className="banner-content text-capitalize">
                        <h1 className="text-white">Inovate and explore</h1>
                        <center>
                            <button className="btn btn-outline-primary text-white text-capitalize">expolre</button>
                        </center>
                    </div>
                </div>
            </div>


            <div className="section-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div class="card" style={{ width: '18rem' }}>
                                <img src={img3} class="card-img-top" alt="people" />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-4 col-sm-12">
                            <div class="card" style={{ width: '18rem' }}>
                                <img src={img3} class="card-img-top" alt="people" />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 col-lg-4 col-sm-12">
                            <div class="card" style={{ width: '18rem' }}>
                                <img src={img3} class="card-img-top" alt="people" />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
