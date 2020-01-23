import React from 'react';
import Filter from "../filter";
import Pagination_Comp from "../pagination";
import Footer from "../footer";
import Scroll from "../scroll_top";
import Vacancy from "../vacancy_long";
import Bottom_Bar_User from "./bottom_bar";
import Vacancy_Mob from "./vacancy_mobile";

export default class AllVac_Mobile extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            showVacancy: false,
        }

    }

    render() {

        return (
            <div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 categories-cont">
                            {/*<Categories/>*/}
                        </div>
                    </div>
                </div>


                <div className="full">
                    <div class="row">
                        <div className="col-lg-12 vacancy-cont vacancy-desktop">
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

                        <div className="col-lg-12 no-gutters vacancy-cont vacancy-mobile">

                            <Vacancy_Mob title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"} image={"box-image-2"}/>
                            <Vacancy_Mob title={"Менеджер із роботи з бізнес - клієнтами"} company={"ProCredit Bank"} type={"Full-time"} salary={"8000 грн"} image={"box-image-3"}/>
                            <Vacancy_Mob title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Part-time"} salary={"15000 грн"} image={"box-image"}/>
                            <Vacancy_Mob title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"} image={"box-image-2"}/>
                            <Vacancy_Mob title={"Менеджер із роботи з бізнес - клієнтами"} company={"ProCredit Bank"} type={"Full-time"} salary={"8000 грн"} image={"box-image-3"}/>
                            <Vacancy_Mob title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Part-time"} salary={"15000 грн"} image={"box-image"}/>
                            <Vacancy_Mob title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"} image={"box-image-2"}/>
                            <Vacancy_Mob title={"Менеджер із роботи з бізнес - клієнтами"} company={"ProCredit Bank"} type={"Full-time"} salary={"8000 грн"} image={"box-image-3"}/>
                            <Vacancy_Mob title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Part-time"} salary={"15000 грн"} image={"box-image"}/>
                            <Vacancy_Mob title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"} image={"box-image-2"}/>
                            <Vacancy_Mob title={"Менеджер із роботи з бізнес - клієнтами"} company={"ProCredit Bank"} type={"Full-time"} salary={"8000 грн"} image={"box-image-3"}/>

                            <div className="row align-items-center pagination-row">
                                <Pagination_Comp/>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="footer-vac">
                    <Footer/>
                </div>

                <Bottom_Bar_User/>

            </div>
        );
    }
}