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
import SimpleBar from 'simplebar-react';
import Cand_Row from "./candidate_row";

export default class Empl_Cand extends React.Component {

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
                                    <div className="all-vac-text-employer">Всі кандидати</div>
                                    <div className="ml-auto">
                                        <form className="search-form-employer" autoComplete="off">
                                            <div className="feather-search-div">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-search">
                                                    <circle cx="11" cy="11" r="8"></circle>
                                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                </svg>
                                            </div>
                                            <input className="search-employer" placeholder="Пошук кандидатів" type="text"/>
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

                        <div className="row scrollme">
                            <table className="table table-borderless table-responsive table-employers">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Прізвище</th>
                                    <th scope="col">Ім'я</th>
                                    <th scope="col">Контакти</th>
                                    <th scope="col">Вакансія</th>
                                    <th scope="col">Курс</th>
                                    <th scope="col">Університет</th>
                                    <th scope="col">Факультет</th>
                                    <th scope="col">Англійська</th>
                                    <th scope="col">Вид зайнятості</th>
                                    <th scope="col">Бажаний рівень зп</th>
                                    <th scope="col">Іноземні мови</th>
                                    <th scope="col">Статус</th>
                                    <th scope="col">Дата</th>
                                    <th scope="col" className="align-center-table">Більше</th>
                                </tr>
                                </thead>

                                <tbody>
                                    <Cand_Row number={"1"} surname={"Караульна"} name={"Валерія"} contacts={"(067) 856-45-78"} vacancy={"IT Risk and Assurance"} course={"3"} university={"КНУ"} faculty={"Політологія"} english={"B2"} workType={"Full-time"} salary={"8000+"} languages={"Іспанська - А2"} status={"Тест"} date={"08.01.2020"}/>
                                    <Cand_Row number={"2"} surname={"Борисова"} name={"Юлія"} contacts={"(069) 183-99-26"} vacancy={"Менеджер із роботи з бізнес - клієнтами"} course={"5"} university={"КНТЕУ"} faculty={"Менеджмент"} english={"B1"} workType={"Part-time"} salary={"13000+"} languages={"Німецька - В2"} status={"Новий"} date={"08.01.2020"}/>
                                    <Cand_Row number={"3"} surname={"Коваленко"} name={"Катя"} contacts={"(068) 415-34-23"} vacancy={"Content Maker & Manager Trainee"} course={"4"} university={"КНЕУ"} faculty={"Філологія"} english={"B2"} workType={"Full-time, Part-time"} salary={"5000+"} languages={"Китайська - А1"} status={"Співбесіда"} date={"08.01.2020"}/>
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