import React from 'react';
import search from '../images/search-gray.svg';
import search_bl from '../images/search-black.svg';
import Filter from "./filter";
import Pagination_Comp from "./pagination";
import Footer from "./footer";
import Scroll from "./scroll_top";
import Vac from "./vac_info";
import Vacancy from "./vacancy_long";
import Filter_Top from "./filter_top";
import arrow from "../images/left-arrow-2.svg";
import Search_Top from "./search_filter_top";

class AllVac extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            showVacancy: false,
        }

    }

    render() {

        return (
            <div>
            <div class="container container-search">
                <div class="row">
                    <div class="col-12">
                        <div className="input-group vac-input mb-3">
                            <div className="input-group-image-vac">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                     className="feather-search-vacancies">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                            <input type="text" className="form-control vac-form" placeholder="Введіть ключові слова. Наприклад: юрист, бухгалтер"
                                   aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn-search-vac" type="button">
                                    <div>Знайти</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 categories-cont">
                            {/*<Categories/>*/}
                        </div>
                    </div>
                </div>


                <div className="full">
                <div class="row">
                    <div className="col-lg-3 container-filter">
                        {/*<div className="position-fixed colll">*/}
                            <Filter/>
                            <Scroll/>
                        {/*</div>*/}
                    </div>
                    <div className="col-lg-9 vacancy-cont">
                        {/*///////////////////////////////Vacancies/////////////////////////////////////////////*/}
                        <div className="row align-items-center vacancy-2">
                            <div className="box-image"/>
                            <div className="col-5 vacancy-title">
                                <p className="vacancy-title">
                                    <a className="vacancy-title-a" href="/vacancy">
                                        Content Maker & Manager Trainee
                                    </a>
                                </p>
                                <p className="vacancy-info">
                                    Deloitte
                                    <span className="vacancy-dot-long">•</span>
                                    1 day ago
                                </p>
                            </div>
                            <div className="col-2 vacancy-type">
                                <p className="vacancy-type">Full-time</p>
                                <p className="vacancy-location">Kyiv, Ukraine</p>
                            </div>
                            <div className="col-2 vacancy-salary">
                                <p className="vacancy-salary">15000 грн</p>
                            </div>
                            <div className="col vacancy-salary">
                                <p className="vacancy-salary">$500</p>
                            </div>
                        </div>

                        <Vacancy title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"} image={"box-image-2"}/>
                        <Vacancy title={"Менеджер із роботи з бізнес - клієнтами"} company={"ProCredit Bank"} type={"Full-time"} salary={"8000 грн"} image={"box-image-3"}/>
                        <Vacancy title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Part-time"} salary={"15000 грн"} image={"box-image"}/>
                        <Vacancy title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"} image={"box-image-2"}/>
                        <Vacancy title={"Менеджер із роботи з бізнес - клієнтами"} company={"ProCredit Bank"} type={"Full-time"} salary={"8000 грн"} image={"box-image-3"}/>
                        <Vacancy title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Part-time"} salary={"15000 грн"} image={"box-image"}/>
                        <Vacancy title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"} image={"box-image-2"}/>
                        <Vacancy title={"Менеджер із роботи з бізнес - клієнтами"} company={"ProCredit Bank"} type={"Full-time"} salary={"8000 грн"} image={"box-image-3"}/>
                        <Vacancy title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Part-time"} salary={"15000 грн"} image={"box-image"}/>
                        <Vacancy title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"} image={"box-image-2"}/>
                        <Vacancy title={"Менеджер із роботи з бізнес - клієнтами"} company={"ProCredit Bank"} type={"Full-time"} salary={"8000 грн"} image={"box-image-3"}/>

                        <div className="row align-items-center pagination-row">
                            <Pagination_Comp/>
                        </div>

                    </div>
                </div>
                </div>

                <div className="footer-vac">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default AllVac;