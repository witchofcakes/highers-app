import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import testi_1 from '../images/testimonials_1.jpg'
import quote from '../images/quote.svg'
import { Carousel } from 'react-responsive-carousel';

export default class Testimonials extends React.Component {
    render() {
        return (
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                className="presentation-mode"
            >
                <div className="container-fluid my-slide primary">
                    <div className="row">
                        <div className="col-4 img-cont">
                            {/*<img src={testi_1} className="testi_1"/>*/}
                        </div>
                        <div className="col-8 text-cont">
                            <div className="quote-cont">
                                <img src={quote} className="quote"/>
                            </div>
                            <p className="card-parag">I signed up to have ads to promote my real estate business. I wanted to be different,
                                be of value to attract people. Promo provided fun & unique videos to do that.
                                Thank you for the affordable choice!
                            </p>
                            <p className="name-parag">Lisa Madokoro</p>
                            <p className="job-parag">Culture specialist, Spotify</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid my-slide secondary">
                    <div className="row">
                        <div className="col-4 img-cont">
                            {/*<img src={testi_1} className="testi_1"/>*/}
                        </div>
                        <div className="col-8 text-cont">
                            <div className="quote-cont">
                                <img src={quote} className="quote"/>
                            </div>
                            <p className="card-parag">I signed up to have ads to promote my real estate business. I wanted to be different,
                                be of value to attract people. Promo provided fun & unique videos to do that.
                                Thank you for the affordable choice!
                            </p>
                            <p className="name-parag">Lisa Madokoro</p>
                            <p className="job-parag">Culture specialist, Spotify</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid my-slide content">
                    <div className="row">
                        <div className="col-4 img-cont">
                            {/*<img src={testi_1} className="testi_1"/>*/}
                        </div>
                        <div className="col-8 text-cont">
                            <div className="quote-cont">
                                <img src={quote} className="quote"/>
                            </div>
                            <p className="card-parag">I signed up to have ads to promote my real estate business. I wanted to be different,
                                be of value to attract people. Promo provided fun & unique videos to do that.
                                Thank you for the affordable choice!
                            </p>
                            <p className="name-parag">Lisa Madokoro</p>
                            <p className="job-parag">Culture specialist, Spotify</p>
                        </div>
                    </div>
                </div>
            </Carousel>
        );
    }
}