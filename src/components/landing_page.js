import React, { PureComponent } from 'react';
import NavBar from './navbar.js';
import cv from '../images/cv.svg';
import quality from '../images/quality.svg';
import service from '../images/service.svg';
import Testimonials from "./testimonials";
import Partners from "./partners";
import Footer from "./footer";
import arrow from '../images/arrow.svg'

class Landing extends React.Component {


    render() {
        return (
            <div>
                <div className="homepage-hero-module">
                    <div className="video-container">
                        <div className="filter"></div>
                        <video playsinline="playsinline" poster="../images/jooble-logo.png" autoPlay="autoplay" muted="muted" loop="loop" class="fillWidth">
                            <source src="https://res.cloudinary.com/ddxpsbpyv/video/upload/v1578778059/video_eiapzm.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="container h-100">
                        <div className="d-flex h-100 text-center align-items-center">
                            <div className="w-100 text-white">
                                <p className="display-3">Ми знаходимо роботу для студентів</p>
                                <div className="input-group land-input mb-3">
                                    <a href="/all-vacancies" className="banner-vacancies-link">
                                        <button className="banner-vacancies">Всі вакансії</button>
                                    </a>
                                    <div className="input-group-image-vac">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                             className="feather-search-landing">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg>
                                    </div>
                                    <input type="text" className="form-control landing-form" placeholder="Введіть ключові слова. Наприклад: юрист(ка)"
                                           aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary" type="button">
                                                {/*<img src={search} className="search-but"/>*/}
                                                <div>Знайти</div>
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
                            <a href="/all-vacancies" className="all-vac-blue">
                                <p className="all-vac-blue">
                                    Всі вакансії <img src={arrow} className="arrow-blue"/>
                                </p>
                            </a>
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
                            <a href="/all-vacancies" className="all-vac-blue-2">
                                <p className="all-vac-blue-2">
                                    Всі вакансії <img src={arrow} className="arrow-blue"/>
                                </p>
                            </a>
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
                            <a href="/all-vacancies" className="all-vac-blue-3">
                                <p className="all-vac-blue-3">
                                    Всі вакансії <img src={arrow} className="arrow-blue"/>
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 partners-container-shadow">
                            <Partners/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid phrase-cont">
                    <div className="row phrase-cent-h2">
                        <div className="col-8 container-h2-phrase">
                            <p className="h2-text-phrase">Choose a better way to work</p>
                            <a href="/all-vacancies">
                                <button className="phrase-button">Всі вакансії</button>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>


        );
    }
}

export default Landing;