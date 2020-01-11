import React from "react";
import Wide_SideBar from "./wide_sidebar";
import Vac_Row from "./vacancy_row";
import Pagination_Comp from "./pagination";
import logo from "../images/logo.png";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../images/avatar.jpeg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Chip from "@material-ui/core/Chip";
import Vacancy_Comp from "./vacancy_comp";
import Cand_Row from "./candidate_row";
import SimpleBar from "simplebar-react";

export default class Empl_Vac_One extends React.Component {

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
        var sidebar_vacancy = document.getElementById("leftCol-employer-vacancies");
        sidebar_vacancy.setAttribute('style', 'margin-left: ' + '230px');
        var content = document.getElementById("content-employer-vacancy");
        content.setAttribute('style', 'margin-left: ' + '500px');
        var button = document.getElementById("menu-button");
        button.classList.remove("active-button");
    }

    render() {

        return (
            <div className="full">
                <div className="row">

                    <Wide_SideBar/>

                    <div className="col-3 no-gutters" id="leftCol-employer-vacancies">
                        {/*    <div className="one-vacancy-employer">*/}
                        {/*        /!*<p className="vacancy-info-employer">*!/*/}
                        {/*        /!*    03 січня*!/*/}
                        {/*        /!*</p>*!/*/}
                        {/*        <p className="vacancy-title-employer">*/}
                        {/*            <a className="vacancy-title-a-employer" id={this.props.active} href="/vacancy">*/}
                        {/*                Content Maker & Manager Trainee*/}
                        {/*            </a>*/}
                        {/*        </p>*/}
                        {/*        <p className="vacancy-title-employer">*/}
                        {/*            <p className="vacancy-type-employer">*/}
                        {/*                Full-time*/}
                        {/*                <span className="vacancy-dot">•</span>*/}
                        {/*                Київ*/}
                        {/*            </p>*/}
                        {/*        </p>*/}
                        {/*    </div>*/}

                        {/*<div className="one-vacancy-employer">*/}
                        {/*    /!*<p className="vacancy-info-employer">*!/*/}
                        {/*    /!*    03 січня*!/*/}
                        {/*    /!*</p>*!/*/}
                        {/*    <p className="vacancy-title-employer">*/}
                        {/*        <a className="vacancy-title-a-employer" id={this.props.active} href="/vacancy">*/}
                        {/*            Менеджер із роботи з бізнес - клієнтами*/}
                        {/*        </a>*/}
                        {/*    </p>*/}
                        {/*    <p className="vacancy-title-employer">*/}
                        {/*        <p className="vacancy-type-employer">*/}
                        {/*            Full-time*/}
                        {/*            <span className="vacancy-dot">•</span>*/}
                        {/*            Київ*/}
                        {/*        </p>*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                    </div>


                    <div className="col" id="content-employer-vacancy">
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
                                    <div className="all-vac-text-employer">IT Risk and Assurance</div>
                                    <div className="ml-auto">
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

                        <Tabs>
                            <TabList>
                                <Tab>Опис вакансії</Tab>
                                <Tab>Про компанію</Tab>
                                <Tab>Кандидати</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="row row-vacancy-info">
                                    <div className="col-8 no-gutters">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="tags-labels">Освіта</div>
                                                <Chip label="4+ курс" className="chip-info"/>
                                                <Chip label="Фінанси" className="chip-info"/>
                                                <Chip label="Економіка" className="chip-info"/>
                                                <div className="tags-labels">Навички</div>
                                                <Chip label="MS Office" className="chip-info"/>
                                                <Chip label="Бухоблік" className="chip-info"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="vacancy-info-categories-first">Кого ми шукаємо:</div>
                                                <p className="vacancy-text-align">З початку 2020 року влада Нідерландів відмовилася від назви «Голландія» ― її перестали використовувати як символ країни та на офіційному логотипі.

                                                    На новому логотипі замість слова «Голландія» зображені помаранчеві букви NL та написана назва країни англійською мовою — «Netherlands».

                                                    Влада Нідерландів вважає, що слово «Голландія» у іноземців часто асоціюється з тими розвагами, яких вони б хотіли уникати: легальними рекреаційними наркотиками та кварталом червоних ліхтарів.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="vacancy-info-categories">Графік роботи:</div>
                                                <p className="vacancy-text">Full-time, з можливістю іноді відвідувати пари. Також з оплачуваною відпусткою на період сесії.</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="vacancy-info-categories">Вимоги:</div>
                                                <ul>
                                                    <li className="vacancy-text">Ступінь бакалавра в галузі ІТ або суміжній галузі.</li>
                                                    <li className="vacancy-text">Відмінне розуміння балансу обсягу, строку та вартості.</li>
                                                    <li className="vacancy-text">Успіх у роботі з широким спектром зацікавлених сторін із суперечливими потребами та вимогами до виконання стратегії спільних послуг / розвитку.</li>
                                                    <li className="vacancy-text">Переважний досвід інтеграції в технології SAP.</li>
                                                    <li className="vacancy-text">Досвід управління ескалаціями, вирішення конфліктів та керування організаційним процесом.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="vacancy-info-categories">Буде плюсом:</div>
                                                <ul>
                                                    <li className="vacancy-text">Від 3 до 5 років досвіду в розробці розроблених на замовлення ІТ-рішень.</li>
                                                    <li className="vacancy-text">Поєднання освіти та досвіду, що дають рівноцінні знання.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="vacancy-info-categories">Задачі:</div>
                                                <ul>
                                                    <li className="vacancy-text">Розробка та інтеграція нових функцій та функціональності з метою оптимізації бізнес-процесів та можливостей Salesforce.com.</li>
                                                    <li className="vacancy-text">Співпрацювати з адміністраторами Salesforce.com, бізнес-зацікавленими сторонами та іншими членами команди.</li>
                                                    <li className="vacancy-text">Зрозуміти дорожню карту додатка Salesforce та активно вмикайте план розширених можливостей бізнесу.</li>
                                                    <li className="vacancy-text">Переконатись, що програми збігаються зі специфікаціями дизайну та дотримуються ділової практики кодування.</li>
                                                    <li className="vacancy-text">Продемонструвати здібності за допомогою робочих процесів, макетів сторінок, тренувань, інформаційних панелей, створення та дезактивації користувачів, завантаження даних та всіх інших функцій Salesforce.com.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="vacancy-info-categories">Ми пропонуємо:</div>
                                                <ul>
                                                    <li className="vacancy-text">Офіс в стилі лофт</li>
                                                    <li className="vacancy-text">Повністю виплачені пільги на здоров'я</li>
                                                    <li className="vacancy-text">Медичне страхування</li>
                                                    <li className="vacancy-text">Баланс роботи та життя</li>
                                                    <li className="vacancy-text">Сплачена сімейна відпустка</li>
                                                    <li className="vacancy-text">Дивовижний потенціал зростання</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 column-location no-gutters">
                                        <div className="loc-div">
                                            <div className="location-map">Локація:</div>
                                            <p className="vacancy-text-address">м. Київ, вул. Жилянська, 48</p>
                                            <iframe width="250" height="260" frameBorder="0" className="google-map" scrolling="no"
                                                    marginHeight="0" marginWidth="0"
                                                    src="https://www.google.com/maps/embed/v1/place?q=%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%96%D0%B8%D0%BB%D1%8F%D0%BD%D1%81%D1%8C%D0%BA%D0%B0%2C%2048%2C%2050%D0%B0%2C%20%D0%9A%D0%B8%D1%97%D0%B2&key=AIzaSyDC2eQOHheWPhWWxe8nYSbJS15QwLHkqiY"
                                                    allowFullScreen>
                                            </iframe>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="row row-vacancy-info">
                                    <div className="col-8 no-gutters">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="vacancy-info-categories-company">Про компанію:</div>
                                                <p className="vacancy-text">Mason Frank International is a boutique global recruitment agency with a specific focus on permanent and contract Salesforce.com jobs.
                                                    As a leading global advertiser of Salesforce.com jobs we have established ourselves as the supplier of choice to hundreds of Salesforce.com Partners and End Users.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="vacancy-info-categories">Переваги компанії:</div>
                                                <p className="vacancy-text">Full-time, з можливістю іноді відвідувати пари. Також з оплачуваною відпусткою на період сесії.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 no-gutters">
                                        <div className="vacancy-info-categories-company-vac">Вакансії компанії:</div>
                                        <Vacancy_Comp title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"}/>
                                        <Vacancy_Comp title={"Менеджер із роботи з бізнес - клієнтами"} company={"Deloitte"} type={"Full-time"} salary={"15000 грн"}/>
                                        <Vacancy_Comp title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Full-time"} salary={"8000 грн"}/>
                                        <Vacancy_Comp title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Full-time"} salary={"8000 грн"}/>
                                        <div className="vac-company-div">
                                            <a target="_blank" href="/all-vacancies" className="all-vac-company-blue">
                                                <button className="all-vac-company-but">
                                                    <a className="all-vac-company-blue">
                                                        Всі вакансії компанії
                                                    </a>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="row row-vacancy-info">
                                    <div className="col-12 no-gutters">
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

                                                <Cand_Row number={"1"} surname={"Караульна"} name={"Валерія"} contacts={"(067) 856-45-78"} vacancy={"IT Risk and Assurance"} course={"3"} university={"КНУ"} faculty={"Політологія"} english={"B2"} workType={"Full-time"} salary={"8000+"} languages={"Ісп - А2"} status_color={"test-status"} status={"Тест"} date={"08 січ"}/>
                                                <Cand_Row number={"2"} surname={"Борисова"} name={"Юлія"} contacts={"(069) 183-99-26"} vacancy={"Менеджер із роботи з бізнес - клієнтами"} course={"5"} university={"КНТЕУ"} faculty={"Менеджмент"} english={"B1"} workType={"Part-time"} salary={"13000+"} languages={"Нім - В2"} status_color={"new-status"} status={"Новий"} date={"08 січ"}/>
                                                <Cand_Row number={"3"} surname={"Коваленко"} name={"Катя"} contacts={"(068) 415-34-23"} vacancy={"Content Maker & Manager Trainee"} course={"4"} university={"КНЕУ"} faculty={"Інженерії та природоохоронних систем"} english={"B2"} workType={"Full-time, Part-time"} salary={"5000+"} languages={"Кит - А1"} status_color={"interview-status"} status={"Співбесіда"} date={"08 січ"}/>
                                                <Cand_Row number={"4"} surname={"Караульна"} name={"Валерія"} contacts={"(067) 856-45-78"} vacancy={"IT Risk and Assurance"} course={"3"} university={"КНУ"} faculty={"Політологія"} english={"B2"} workType={"Full-time"} salary={"8000+"} languages={"Ісп - А2"} status_color={"test-status"} status={"Тест"} date={"08 січ"}/>
                                                <Cand_Row number={"5"} surname={"Борисова"} name={"Юлія"} contacts={"(069) 183-99-26"} vacancy={"Valuation, Modeling, Economics Intern"} course={"5"} university={"КНТЕУ"} faculty={"Менеджмент"} english={"B1"} workType={"Part-time"} salary={"13000+"} languages={"Нім - В2"} status_color={"new-status"} status={"Новий"} date={"08 січ"}/>
                                                <Cand_Row number={"6"} surname={"Коваленко-Караульна"} name={"Олександра"} contacts={"(068) 415-34-23"} vacancy={"Content Maker & Manager Trainee Content Maker"} course={"4"} university={"КНЕУ"} faculty={"Філологія"} english={"B2"} workType={"Part-time, Стажування, Віддалено"} salary={"5000+"} languages={"Кит - А1"} status_color={"accepted-status"} status={"Прийнятий"} date={"08 січ"}/>
                                                <Cand_Row number={"7"} surname={"Караульна"} name={"Валерія"} contacts={"(067) 856-45-78"} vacancy={"IT Risk and Assurance"} course={"3"} university={"КНУ"} faculty={"Політологія"} english={"B2"} workType={"Full-time"} salary={"8000+"} languages={"Ісп - А2"} status_color={"decline-status"} status={"Відмова"} date={"08 січ"}/>
                                                <Cand_Row number={"8"} surname={"Борисова"} name={"Юлія"} contacts={"(069) 183-99-26"} vacancy={"Менеджер із роботи з бізнес - клієнтами"} course={"5"} university={"КНТЕУ"} faculty={"Менеджмент"} english={"B1"} workType={"Part-time"} salary={"13000+"} languages={"Нім - В2"} status_color={"new-status"} status={"Новий"} date={"08 січ"}/>
                                                <Cand_Row number={"9"} surname={"Коваленко"} name={"Катя"} contacts={"(068) 415-34-23"} vacancy={"Content Maker & Manager Trainee"} course={"4"} university={"КНЕУ"} faculty={"Філологія"} english={"B2"} workType={"Full-time, Part-time"} salary={"5000+"} status_color={"interview-status"} status={"Співбесіда"} date={"08 січ"}/>
                                                <Cand_Row number={"10"} surname={"Караульна"} name={"Валерія"} contacts={"(067) 856-45-78"} vacancy={"IT Risk and Assurance"} course={"3"} university={"КНУ"} faculty={"Політологія"} english={"B2"} workType={"Full-time"} salary={"8000+"} languages={"Ісп - А2"} status_color={"test-status"} status={"Тест"} date={"08 січ"}/>
                                                <Cand_Row number={"11"} surname={"Борисова"} name={"Юлія"} contacts={"(069) 183-99-26"} vacancy={"Менеджер із роботи з бізнес - клієнтами"} course={"5"} university={"КНТЕУ"} faculty={"Менеджмент"} english={"B1"} workType={"Part-time"} salary={"13000+"} languages={"Нім - В2"} status_color={"accepted-status"} status={"Прийнятий"} date={"08 січ"}/>
                                                <Cand_Row number={"12"} surname={"Коваленко"} name={"Катя"} contacts={"(068) 415-34-23"} vacancy={"Content Maker & Manager Trainee"} course={"4"} university={"КНЕУ"} faculty={"Філологія"} english={"B2"} workType={"Full-time, Part-time"} salary={"5000+"} languages={"Кит - А1"} status_color={"interview-status"} status={"Співбесіда"} date={"08 січ"}/>


                                                </tbody>

                                            </table>
                                        </SimpleBar>

                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>

                    </div>
                </div>

            </div>

        );
    }
}