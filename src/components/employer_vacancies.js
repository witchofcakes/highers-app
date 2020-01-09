import React from "react";
import logo from "../images/logo.png";
import logo_mount from "../images/logo-mountain.png";
import Avatar from '@material-ui/core/Avatar';
import avatar from '../images/avatar.jpeg'
import Wide_SideBar from "./wide_sidebar";
import Narrow_SideBar from "./narrow_sidebar";
import search_bl from "../images/search-black.svg";
import close_icon from "../images/close-icon.svg";
import Btn_More from "./button_more";
import Vac_Row from "./vacancy_row";
import Pagination_Comp from "./pagination";
import Footer_Vac from "./footer_vacancy";
import Footer_Empl from "./footer_employer";

export default class Empl_Vac extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            display: true,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            display: !this.state.display
        });
    }

    render() {

        return (
            <div className="full">
                <div className="row">
                    {(() => {
                        if (this.state.display){
                            return (
                                <Wide_SideBar/>
                            );
                        }
                        else {
                            return (
                                <Narrow_SideBar/>
                            );
                        }
                    })()}

                    <div className="col-9" id="content-employer">
                        {/*<button className="button-menu" onClick={this.handleClick}>*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-menu">*/}
                        {/*        <line x1="3" y1="12" x2="21" y2="12"></line>*/}
                        {/*        <line x1="3" y1="6" x2="21" y2="6"></line>*/}
                        {/*        <line x1="3" y1="18" x2="21" y2="18"></line>*/}
                        {/*    </svg>*/}
                        {/*</button>*/}
                        <div className="row">
                            <div className="col-12">
                                <div className="row align-items-center">
                                    <div className="all-vac-text-employer">Всі вакансії</div>
                                    <div className="ml-auto">
                                        <form className="search-form-employer" autoComplete="off">
                                            <div className="feather-search-div">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-search">
                                                    <circle cx="11" cy="11" r="8"></circle>
                                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                </svg>
                                            </div>
                                            <input className="search-employer" placeholder="Пошук" type="text"/>
                                        </form>

                                        <a target="_blank" className="create-vac" href="#">
                                            <button className="create-vac-employer">Створити вакансію</button>
                                        </a>
                                    </div>
                                </div>
                                {/*<div className="row">*/}
                                {/*    <div className="filter-button-employer">*/}
                                {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        <div className="row">
                            <table className="table table-borderless table-employers">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Назва</th>
                                    <th scope="col">Локація</th>
                                    <th scope="col">Кандидати</th>
                                    <th scope="col">Статус</th>
                                    <th scope="col">Дата</th>
                                    <th scope="col" className="align-center-table">Більше</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <Vac_Row number={"1"} title={"IT Risk and Assurance"} location={"Київ"} applicants={"12"} status={"Активна"} date={"08.01.2020"}/>
                                    <Vac_Row number={"2"} title={"Менеджер із роботи з бізнес - клієнтами"} location={"Київ"} applicants={"3"} status={"Активна"} date={"08.01.2020"}/>
                                    <Vac_Row number={"3"} title={"Content Maker & Manager Trainee"} location={"Київ"} applicants={"345"} status={"Активна"} date={"08.01.2020"}/>
                                    <Vac_Row number={"4"} title={"IT Risk and Assurance"} location={"Київ"} applicants={"12"} status={"Активна"} date={"08.01.2020"}/>
                                    <Vac_Row number={"5"} title={"Менеджер із роботи з бізнес - клієнтами"} location={"Київ"} applicants={"3"} status={"Активна"} date={"08.01.2020"}/>
                                    <Vac_Row number={"6"} title={"Content Maker & Manager Trainee"} location={"Київ"} applicants={"345"} status={"Активна"} date={"08.01.2020"}/>
                                    <Vac_Row number={"7"} title={"IT Risk and Assurance"} location={"Київ"} applicants={"12"} status={"Активна"} date={"08.01.2020"}/>
                                    <Vac_Row number={"8"} title={"Менеджер із роботи з бізнес - клієнтами"} location={"Київ"} applicants={"3"} status={"Активна"} date={"08.01.2020"}/>
                                    <Vac_Row number={"9"} title={"Content Maker & Manager Trainee"} location={"Київ"} applicants={"345"} status={"Не активна"} date={"08.01.2020"} active={"not-active"} active_link={"not-active-link"}/>
                                    <Vac_Row number={"10"} title={"IT Risk and Assurance"} location={"Київ"} applicants={"12"} status={"Не активна"} date={"08.01.2020"} active={"not-active"} active_link={"not-active-link"}/>
                                    <Vac_Row number={"11"} title={"Менеджер із роботи з бізнес - клієнтами"} location={"Київ"} applicants={"3"} status={"Не активна"} date={"08.01.2020"} active={"not-active"} active_link={"not-active-link"}/>
                                    <Vac_Row number={"12"} title={"Content Maker & Manager Trainee"} location={"Київ"} applicants={"345"} status={"Не активна"} date={"08.01.2020"} active={"not-active"} active_link={"not-active-link"}/>
                                </tbody>
                            </table>
                        </div>

                        <div className="row align-items-center pagination-row">
                            <Pagination_Comp/>
                        </div>

                        {/*<div className="row">*/}
                        {/*    <div className="col-12 border-div">*/}

                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="row">*/}
                        {/*    <div className="col-12 no-gutters">*/}
                        {/*        <Footer_Empl/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>

        );
    }
}