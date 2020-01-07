import React, { PureComponent } from 'react';
import NavBar from './navbar.js';
import cv from '../images/cv.svg';
import quality from '../images/quality.svg';
import service from '../images/service.svg';
import Testimonials from "./testimonials";
import Partners from "./partners";
import Footer from "./footer";
import search from '../images/search.svg'
import arrow from '../images/arrow.svg'

class Landing extends React.Component {


    render() {
        return (
            <div>
                <div className="homepage-hero-module">
                    <div className="video-container">
                        <div className="filter"></div>
                        <video playsinline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" class="fillWidth">
                            <source src="https://assets.mixkit.co/videos/1800/1800-720.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="container h-100">
                        <div className="d-flex h-100 text-center align-items-center">
                            <div className="w-100 text-white">
                                <p className="display-3">Ми знаходимо роботу для студентів</p>
                                {/*<p className="lead mb-0">With HTML5 Video and Bootstrap 4</p>*/}
                                <div className="input-group land-input mb-3">
                                    <button className="banner-vacancies">Всі вакансії</button>
                                    <input type="text" className="form-control landing-form" placeholder="Введіть ключові слова. Наприклад: юрист, бухгалтер"
                                           aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary" type="button">
                                                <img src={search} className="search-but"/>
                                            </button>
                                        </div>

                                </div>
                                <div className="input-group-full-search mb-3">
                                    <a className="full-search" href="#">Розширений пошук</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container advantages-cont">
                    <div className="row testi-cent-h2">
                        <div className="col-8 container-h2-advantages">
                            <p className="h2-text-adv">Break out of the inbox</p>
                            <p className="h5-text-adv">Working in channels gives everyone of your team a
                                shared view of progress and purpose.
                            </p>
                            <p className="all-vac-blue">
                                All vacancies <img src={arrow} className="arrow-blue"/>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <img src={cv} className="cv_svg"/>
                            <p className="adv-text-big">Conversations <span className="underline">organized</span></p>
                            <p className="adv-text-small">Instead of a single
                                overstuffed inbox, conversations in Slack happen in dedicated spaces called
                                channels.</p>
                        </div>
                        <div className="col-sm">
                            <img src={quality} className="quality_svg"/>
                            <p className="adv-text-big">Get <span className="underline">looped in</span>, not out</p>
                            <p className="adv-text-small">Slack makes it simple to follow conversations or find
                                important information in an easily searchable.</p>
                        </div>
                        <div className="col-sm">
                            <img src={service} className="service_svg"/>
                            <p className="adv-text-big">Give <span className="underline">focus</span> a chance</p>
                            <p className="adv-text-small">Unlike email, Slack lets you choose which conversations
                                are most important — and which can wait.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid testimonials-cont">
                    <div className="row testi-cent-h2">
                        <div className="col-8 container-h2">
                            <p className="h2-text">Trusted the world over</p>
                            <p className="h5-text">Teams of every size, shape and kind have already made Slack the place where their work happens.</p>
                            <p className="all-vac-blue-2">
                                All vacancies <img src={arrow} className="arrow-blue"/>
                            </p>
                        </div>
                    </div>
                    <div className="row testi-cent">
                        <div className="col-10">
                            <Testimonials/>
                        </div>
                    </div>
                </div>
                <div className="container partners-cont">
                    <div className="row testi-cent-h2">
                        <div className="col-8 container-h2-partners">
                            <p className="h2-text">Partners of Slack</p>
                            <p className="h5-text-partners">Working in channels gives everyone on your team a
                                shared view of progress and purpose.
                            </p>
                            <p className="all-vac-blue-3">
                                All vacancies <img src={arrow} className="arrow-blue"/>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Partners/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid phrase-cont">
                    <div className="row phrase-cent-h2">
                        <div className="col-8 container-h2-phrase">
                            <p className="h2-text-phrase">Choose a better way to work</p>
                            <button className="phrase-button">Всі вакансії</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>


        );
    }
}

export default Landing;