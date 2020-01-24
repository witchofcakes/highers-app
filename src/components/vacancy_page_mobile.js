import React from 'react';
import Vacancy_Short from "./vacancy_short";
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import SimpleBar from 'simplebar-react';
import Chip from '@material-ui/core/Chip';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'simplebar/dist/simplebar.min.css';
import Footer_Vac from "./footer_vacancy";
import Vacancy_Comp from "./vacancy_comp";
import Vacancy_Short_Mob from "./mobile/vacancy_short_mob";
import NavBar_Mobile_Back from "./navbar_mobile_back";
import Vacancy_Comp_Mobile from "./vacancy_comp_mobile";

export default class Vac_Mobile extends React.Component {

    render() {
        return (
            <div className="full-map short-vac mobile-description">
                <div className="row">
                    <NavBar_Mobile_Back/>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 title-column-short-mobile">
                                <div className="row">
                                    <div className="col-12 vacancy-info-mobile">
                                        Опубліковано 03 січня
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="image-container-mobile">
                                        <div className="box-image-short-vac-mobile"/>
                                    </div>
                                    <div className="col-9">
                                        <div className="title-vacancy">
                                            Content Maker & Manager Trainee
                                        </div>
                                        <div className="vacancy-info">
                                            Deloitte
                                            <span className="vacancy-dot">•</span>
                                            Full / Part-time
                                            <span className="vacancy-dot">•</span>
                                            15000 грн
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="row">*/}
                        <Tabs>
                            <TabList>
                                <Tab>Опис вакансії</Tab>
                                <Tab>Про компанію</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="row row-vacancy-info">
                                    <div className="col-12 no-gutters">
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
                                        <div className="row row-map-margin column-location no-gutters">
                                            <div className="col-12 loc-div-mobile">
                                                <div className="location-map-mobile">Локація:</div>
                                                <p className="vacancy-text-address-mobile">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                         className="feather-map-pin-mobile">
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    м. Київ, м. Олімпійська
                                                </p>
                                            </div>
                                            <div className="col-12 map-container">
                                                <iframe frameBorder="0" className="google-map-mobile" scrolling="no"
                                                        marginHeight="0" marginWidth="0"
                                                        src="https://www.google.com/maps/embed/v1/place?q=%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%96%D0%B8%D0%BB%D1%8F%D0%BD%D1%81%D1%8C%D0%BA%D0%B0%2C%2048%2C%2050%D0%B0%2C%20%D0%9A%D0%B8%D1%97%D0%B2&key=AIzaSyDC2eQOHheWPhWWxe8nYSbJS15QwLHkqiY"
                                                        allowFullScreen>
                                                </iframe>
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
                                                <div className="vacancy-info-categories">Від компанії:</div>
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
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="row row-vacancy-info">
                                    <div className="col-12 no-gutters">
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

                                    <div className="row">
                                    <div className="col-12">
                                        <div className="vacancy-info-categories-company-vac-mobile">Вакансії компанії:</div>
                                        <Vacancy_Comp_Mobile title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"}/>
                                        <Vacancy_Comp_Mobile title={"Менеджер із роботи з бізнес - клієнтами"} company={"Deloitte"} type={"Full-time"} salary={"15000 грн"}/>
                                        <Vacancy_Comp_Mobile title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Full-time"} salary={"8000 грн"}/>
                                        <Vacancy_Comp_Mobile title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Full-time"} salary={"8000 грн"}/>
                                        <div className="vac-company-div">
                                            <a target="_blank" href="/all-vacancies" className="all-vac-company-blue">
                                                <button className="all-vac-company-but-mobile">
                                                    <a className="all-vac-company-blue">
                                                        Всі вакансії компанії
                                                    </a>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                        {/*</div>*/}

                        <div className="row row-but-apply-bot-mobile">
                            <div className="col-12 col-apply-bot no-gutters">
                                <p className="p-apply-bot"><button className="but-apply-bottom-mobile">Apply now</button></p>
                            </div>
                        </div>

                        <div className="row">
                            <p className="similar-vac-mobile">Схожі вакансії</p>
                            <Vacancy_Short_Mob title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Full / Part-time"} salary={"15000 грн"} image={"box-image"}/>
                            <Vacancy_Short_Mob title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"} image={"box-image-2"}/>
                            <Vacancy_Short_Mob title={"Менеджер із роботи з бізнес - клієнтами"} company={"ProCredit Bank"} type={"Full-time"} salary={"8000 грн"} image={"box-image-3"}/>
                            <Vacancy_Short_Mob title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Part-time"} salary={"15000 грн"} image={"box-image"} active={"active-vacancy"}/>
                            <Vacancy_Short_Mob title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"} image={"box-image-2"}/>
                            <Vacancy_Short_Mob title={"Менеджер із роботи з бізнес - клієнтами"} company={"ProCredit Bank"} type={"Full-time"} salary={"8000 грн"} image={"box-image-3"}/>
                            <Vacancy_Short_Mob title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Part-time"} salary={"15000 грн"} image={"box-image"}/>
                            <Vacancy_Short_Mob title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"} image={"box-image-2"}/>
                            <Vacancy_Short_Mob title={"Менеджер із роботи з бізнес - клієнтами"} company={"ProCredit Bank"} type={"Full-time"} salary={"8000 грн"} image={"box-image-3"}/>
                            <Vacancy_Short_Mob title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Part-time"} salary={"15000 грн"} image={"box-image"}/>
                            <Vacancy_Short_Mob title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"} image={"box-image-2"}/>
                            <Vacancy_Short_Mob title={"Менеджер із роботи з бізнес - клієнтами"} company={"ProCredit Bank"} type={"Full-time"} salary={"8000 грн"} image={"box-image-3"}/>
                            <button className="load-more-but-mobile">Показати ще 15 вакансій</button>
                        </div>

                        <div className="row">
                            <div className="col-12 no-gutters">
                                <Footer_Vac/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 button-apply-now-div">
                                <a href="/apply-page"><button className="button-apply-now">
                                    Apply now
                                </button></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}