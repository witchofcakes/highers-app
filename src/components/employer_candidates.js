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
import Cand_Row_Vac from "./cand_row_vac";

export default class Empl_Cand extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            display: true,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var sidebar = document.getElementById("leftCol-employer-wide");
        sidebar.classList.remove("not-active-menu");
        var content = document.getElementById("content-employer");
        content.setAttribute('style', 'margin-left: ' + '280px');
        var button = document.getElementById("menu-button");
        button.classList.remove("active-button");
        var table = document.getElementById("simplebar-candidate");
        table.setAttribute('style', 'width: ' + '922px' + '; height: ' + '480px');
        var fadeout_b = document.getElementById("fadeout-b");
        fadeout_b.setAttribute('style', 'display: ' + 'inline');
        var fadeout_t = document.getElementById("fadeout-t");
        fadeout_t.setAttribute('style', 'display: ' + 'inline');
        var fadeout_r = document.getElementById("fadeout-r");
        fadeout_r.setAttribute('style', 'display: ' + 'inline');
        var fadeout_l = document.getElementById("fadeout-l");
        fadeout_l.setAttribute('style', 'display: ' + 'inline');
        // var table1 = document.getElementById("simplebar-candidate");
        // table1.setAttribute('style', 'height: ' + '480px');
        // field.setAttribute("placeholder", "Пошук");
        // icon.setAttribute('style', 'display: ' + 'none');
        // icon_close.setAttribute('style', 'display: ' + 'inline');
    }

    render() {

        return (
            <div className="full">
                <div className="row">

                    <Wide_SideBar/>


                    <div className="col" id="content-employer">
                        <div className="row">
                            <button id="menu-button" className="button-menu" onClick={this.handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-menu">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="row row-all-vac-margin align-items-center">
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
                            </div>
                        </div>

                        <div className="row">
                            <div id="fadeout-b" className="bottom-fadeout-candidates"></div>
                            <div id="fadeout-t" className="top-fadeout-candidates"></div>
                            <div id="fadeout-l" className="left-fadeout-candidates"></div>
                            <div id="fadeout-r" className="right-fadeout-candidates"></div>
                        <SimpleBar autoHide={false} id="simplebar-candidate">
                            <table className="table table-borderless table-candidates">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Ім'я</th>
                                    <th scope="col">Вакансія</th>
                                    <th scope="col">Освіта</th>
                                    <th scope="col">Мови</th>
                                    <th scope="col">Контакти</th>
                                    <th scope="col">Зайнятість</th>
                                    <th scope="col">Статус</th>
                                    <th scope="col">Дата</th>
                                    {/*<th scope="col" className="align-center-table">Більше</th>*/}
                                </tr>
                                </thead>

                                <tbody>

                                    <Cand_Row_Vac number={"1"} surname={"Караульна"} name={"Валерія"} contacts={"(067) 856-45-78"} vacancy={"IT Risk and Assurance"} course={"3"} university={"КНУ"} faculty={"Політологія"} english={"B2"} workType={"Full-time"} salary={"8000+"} languages={"Ісп - А2"} status_color={"test-status"} status={"Тест"} date={"08 січ"}/>
                                    <Cand_Row_Vac number={"2"} surname={"Борисова"} name={"Юлія"} contacts={"(069) 183-99-26"} vacancy={"Менеджер із роботи з бізнес - клієнтами"} course={"5"} university={"КНТЕУ"} faculty={"Менеджмент"} english={"B1"} workType={"Part-time"} salary={"13000+"} languages={"Нім - В2"} status_color={"new-status"} status={"Новий"} date={"08 січ"}/>
                                    <Cand_Row_Vac number={"3"} surname={"Коваленко"} name={"Катя"} contacts={"(068) 415-34-23"} vacancy={"Content Maker & Manager Trainee"} course={"4"} university={"КНЕУ"} faculty={"Інженерії та природоохоронних систем"} english={"B2"} workType={"Full-time, Part-time"} salary={"5000+"} languages={"Кит - А1"} status_color={"interview-status"} status={"Співбесіда"} date={"08 січ"}/>
                                    <Cand_Row_Vac number={"4"} surname={"Караульна"} name={"Валерія"} contacts={"(067) 856-45-78"} vacancy={"IT Risk and Assurance"} course={"3"} university={"КНУ"} faculty={"Політологія"} english={"B2"} workType={"Full-time"} salary={"8000+"} languages={"Ісп - А2"} status_color={"test-status"} status={"Тест"} date={"08 січ"}/>
                                    <Cand_Row_Vac number={"5"} surname={"Борисова"} name={"Юлія"} contacts={"(069) 183-99-26"} vacancy={"Valuation, Modeling, Economics Intern"} course={"5"} university={"КНТЕУ"} faculty={"Менеджмент"} english={"B1"} workType={"Part-time"} salary={"13000+"} languages={"Нім - В2"} status_color={"new-status"} status={"Новий"} date={"08 січ"}/>
                                    <Cand_Row_Vac number={"6"} surname={"Коваленко-Караульна"} name={"Олександра"} contacts={"(068) 415-34-23"} vacancy={"Content Maker & Manager Trainee Content Maker"} course={"4"} university={"КНЕУ"} faculty={"Філологія"} english={"B2"} workType={"Part-time, Стажування, Віддалено"} salary={"5000+"} languages={"Кит - А1"} status_color={"accepted-status"} status={"Прийнятий"} date={"08 січ"}/>
                                    <Cand_Row_Vac number={"7"} surname={"Караульна"} name={"Валерія"} contacts={"(067) 856-45-78"} vacancy={"IT Risk and Assurance"} course={"3"} university={"КНУ"} faculty={"Політологія"} english={"B2"} workType={"Full-time"} salary={"8000+"} languages={"Ісп - А2"} status_color={"decline-status"} status={"Відмова"} date={"08 січ"}/>
                                    <Cand_Row_Vac number={"8"} surname={"Борисова"} name={"Юлія"} contacts={"(069) 183-99-26"} vacancy={"Менеджер із роботи з бізнес - клієнтами"} course={"5"} university={"КНТЕУ"} faculty={"Менеджмент"} english={"B1"} workType={"Part-time"} salary={"13000+"} languages={"Нім - В2"} status_color={"new-status"} status={"Новий"} date={"08 січ"}/>
                                    <Cand_Row_Vac number={"9"} surname={"Коваленко"} name={"Катя"} contacts={"(068) 415-34-23"} vacancy={"Content Maker & Manager Trainee"} course={"4"} university={"КНЕУ"} faculty={"Філологія"} english={"B2"} workType={"Full-time, Part-time"} salary={"5000+"} status_color={"interview-status"} status={"Співбесіда"} date={"08 січ"}/>
                                    <Cand_Row_Vac number={"10"} surname={"Караульна"} name={"Валерія"} contacts={"(067) 856-45-78"} vacancy={"IT Risk and Assurance"} course={"3"} university={"КНУ"} faculty={"Політологія"} english={"B2"} workType={"Full-time"} salary={"8000+"} languages={"Ісп - А2"} status_color={"test-status"} status={"Тест"} date={"08 січ"}/>
                                    <Cand_Row_Vac number={"11"} surname={"Борисова"} name={"Юлія"} contacts={"(069) 183-99-26"} vacancy={"Менеджер із роботи з бізнес - клієнтами"} course={"5"} university={"КНТЕУ"} faculty={"Менеджмент"} english={"B1"} workType={"Part-time"} salary={"13000+"} languages={"Нім - В2"} status_color={"accepted-status"} status={"Прийнятий"} date={"08 січ"}/>
                                    <Cand_Row_Vac number={"12"} surname={"Коваленко"} name={"Катя"} contacts={"(068) 415-34-23"} vacancy={"Content Maker & Manager Trainee"} course={"4"} university={"КНЕУ"} faculty={"Філологія"} english={"B2"} workType={"Full-time, Part-time"} salary={"5000+"} languages={"Кит - А1"} status_color={"interview-status"} status={"Співбесіда"} date={"08 січ"}/>


                                </tbody>

                            </table>
                        </SimpleBar>
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