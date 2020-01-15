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
import Cand_Row_Vac from "./cand_row_vac";
import {withStyles, makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import PerfectScrollbar from "react-perfect-scrollbar";
import Tooltip from '@material-ui/core/Tooltip';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";
import Empl_Vac_All from "./vac_short_employer";
import SideBar from "./sidebar";

const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}))(Tooltip);

function createData(number, name, vacancy, education, languages, contacts, type, cv, status, date) {
    return { number, name, vacancy, education, languages, contacts, type, cv, status, date };
}

const rows = [
    createData('1', "Валерія Караульна", "Менеджер", "КНУ", "Англ - В1", "(067) 220-08-73", "Фулл-тайм, 8000+", "нема", "Тест", "08 січ"),
];

const useStyles = makeStyles({
    table: {
        width: '130%',
        height: '500px !important'
    },
});

const TableCandidates = () => {
    const classes2 = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(9);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 9));
        setPage(0);
    };

    return (
        <Paper className="paper-mui-table">
            <TableContainer className="container-mui-table">
                <PerfectScrollbar>
                    <Table stickyHeader className={classes2.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">#</TableCell>
                                <TableCell align="left">Ім'я</TableCell>
                                {/*<TableCell align="left">Вакансія</TableCell>*/}
                                <TableCell align="left">Освіта</TableCell>
                                <TableCell align="left">Мови</TableCell>
                                <TableCell align="left">Контакти</TableCell>
                                <TableCell align="left">Зайнятість</TableCell>
                                <TableCell align="center">Резюме</TableCell>
                                <TableCell align="left">Статус</TableCell>
                                <TableCell align="left">Дата</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Cand_Row_Vac number={"1"} surname={"Караульна"} name={"Валерія"} contacts={"(067) 856-45-78"} vacancy={"IT Risk and Assurance"} course={"3"} university={"КНУ"} faculty={"Політологія"} english={"Англ - B2"} workType={"Full-time"} salary={"8000+"} languages={"Ісп - А2"} cv={"true"} date={"08 січ"}/>
                            <Cand_Row_Vac number={"2"} surname={"Борисова"} name={"Юлія"} contacts={"(069) 183-99-26"} vacancy={"Менеджер із роботи з бізнес - клієнтами"} course={"5"} university={"КНТЕУ"} faculty={"Менеджмент"} english={"Англ - B1"} workType={"Part-time"} salary={"13000+"} languages={"Нім - В2"} date={"08 січ"}/>
                            <Cand_Row_Vac number={"3"} surname={"Коваленко"} name={"Катя"} contacts={"(068) 415-34-23"} vacancy={"Content Maker & Manager Trainee"} course={"4"} university={"КНЕУ"} faculty={"Інженерії та природоохоронних систем"} english={"Англ - B2"} workType={"Full-time, Part-time, Стажування"} salary={"5000+"} languages={"Кит - А1"} date={"08 січ"}/>
                            <Cand_Row_Vac number={"4"} surname={"Караульна"} name={"Валерія"} contacts={"(067) 856-45-78"} vacancy={"IT Risk and Assurance"} course={"3"} university={"КНУ"} faculty={"Політологія"} english={"Англ - B2"} workType={"Full-time"} salary={"8000+"} languages={"Ісп - А2"} cv={"true"} date={"08 січ"}/>
                            <Cand_Row_Vac number={"5"} surname={"Борисова"} name={"Юлія"} contacts={"(069) 183-99-26"} vacancy={"Менеджер із роботи з бізнес - клієнтами"} course={"5"} university={"КНТЕУ"} faculty={"Менеджмент"} english={"Англ - B1"} workType={"Part-time"} salary={"13000+"} languages={"Нім - В2"} cv={"true"} date={"08 січ"}/>
                            <Cand_Row_Vac number={"6"} surname={"Коваленко"} name={"Катя"} contacts={"(068) 415-34-23"} vacancy={"Content Maker & Manager Trainee"} course={"4"} university={"КНЕУ"} faculty={"Інженерії та природоохоронних систем"} english={"Англ - B2"} workType={"Full-time, Part-time"} salary={"5000+"} languages={"Кит - А1"} date={"08 січ"}/>
                            <Cand_Row_Vac number={"7"} surname={"Караульна"} name={"Валерія"} contacts={"(067) 856-45-78"} vacancy={"IT Risk and Assurance"} course={"3"} university={"КНУ"} faculty={"Політологія"} english={"Англ - B2"} workType={"Full-time"} salary={"8000+"} languages={"Ісп - А2"} cv={"true"} date={"08 січ"}/>
                            <Cand_Row_Vac number={"8"} surname={"Борисова"} name={"Юлія"} contacts={"(069) 183-99-26"} vacancy={"Менеджер із роботи з бізнес - клієнтами"} course={"5"} university={"КНТЕУ"} faculty={"Менеджмент"} english={"Англ - B1"} workType={"Part-time"} salary={"13000+"} languages={"Нім - В2"} date={"08 січ"}/>
                            <Cand_Row_Vac number={"9"} surname={"Коваленко"} name={"Катя"} contacts={"(068) 415-34-23"} vacancy={"Content Maker & Manager Trainee"} course={"4"} university={"КНЕУ"} faculty={"Інженерії та природоохоронних систем"} english={"Англ - B2"} workType={"Full-time, Part-time"} salary={"5000+"} languages={"Кит - А1"} date={"08 січ"}/>
                            {/*{emptyRows > 0 && (*/}
                            {/*    <TableRow style={{ height: 76 * emptyRows }}>*/}
                            {/*        <TableCell colSpan={5} />*/}
                            {/*    </TableRow>*/}
                            {/*)}*/}
                        </TableBody>
                    </Table>
                </PerfectScrollbar>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={12}
                rowsPerPage={10}
                page={0}
                id="table-pagination"
                // onChangePage={handleChangePage}
                // onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default class Empl_Vac_One extends React.Component {

    render() {

        return (
            <div className="full">
                <div className="row">

                    <SideBar/>

                    <div className="col-3 no-gutters" id="leftCol-employer-vacancies">
                        <div className="vacancy-employer-sidebar">Всі вакансії</div>
                        <Empl_Vac_All title={"Content Maker & Manager Trainee"} location={"Київ"} type={"Full-time"}/>
                        <Empl_Vac_All title={"IT Risk and Assurance"} location={"Київ"} type={"Full-time"} active={"active-vacancy-employer"}/>
                    </div>


                    <div className="col" id="content-employer-vacancy">
                        <div className="row">
                            <div className="col-12">
                                <div className="row row-all-vac-margin align-items-center">
                                    <div className="all-vac-text-employer">IT Risk and Assurance</div>
                                    <div className="ml-auto">
                                        <a className="create-vac" href="#">
                                            <LightTooltip title="Редагувати вакансію">
                                                <button className="but-edit-employer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-edit-employer">
                                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                                    </svg>
                                                </button>
                                            </LightTooltip>
                                        </a>
                                        <a className="create-vac" href="#">
                                            <LightTooltip title="Видалити вакансію">
                                                <button className="but-delete-employer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-trash-employer">
                                                        <polyline points="3 6 5 6 21 6"></polyline>
                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    </svg>
                                                </button>
                                            </LightTooltip>
                                        </a>
                                        <a className="create-vac" href="/create-vacancy">
                                            <button className="create-vac-employer">Створити вакансію</button>
                                        </a>
                                    </div>
                                </div>
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
                                                <div className="vacancy-details-word">Деталі:</div>
                                                <div className="row details-row-margin">
                                                    <div className="col-4 ellipsis-col-details">
                                                        <p className="block-name-details">Зайнятість:</p>
                                                        <p className="block-details">Full-time</p>
                                                    </div>
                                                    <div className="col-4 ellipsis-col-details">
                                                        <p className="block-name-details">Локація:</p>
                                                        <p className="block-details">Київ</p>
                                                    </div>
                                                    <div className="col-4 ellipsis-col-details">
                                                        <p className="block-name-details">Зарплатня:</p>
                                                        <p className="block-details">15000 грн</p>
                                                    </div>
                                                </div>
                                                <div className="row details-row-margin-second">
                                                    <div className="col-4 ellipsis-col-details">
                                                        <p className="block-name-details">Статус:</p>
                                                        <p className="block-details">Активна</p>
                                                    </div>
                                                    <div className="col-4 ellipsis-col-details">
                                                        <p className="block-name-details">Кандидати:</p>
                                                        <p className="block-details">34</p>
                                                    </div>
                                                    <div className="col-4 ellipsis-col-details">
                                                        <p className="block-name-details">Дата відкриття:</p>
                                                        <p className="block-details">08 січ</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row tags-labels">
                                                    <div className="col-8">Освіта</div>
                                                </div>
                                                <Chip label="4+ курс" className="chip-info"/>
                                                <Chip label="Фінанси" className="chip-info"/>
                                                <Chip label="Економіка" className="chip-info"/>
                                                <div className="row tags-labels">
                                                    <div className="col-8">Навички</div>
                                                </div>
                                                <Chip label="MS Office" className="chip-info"/>
                                                <Chip label="Бухоблік" className="chip-info"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row vacancy-info-categories-first">
                                                    <div className="col-8">
                                                        Кого ми шукаємо:
                                                    </div>
                                                </div>
                                                <p className="vacancy-text-align">З початку 2020 року влада Нідерландів відмовилася від назви «Голландія» ― її перестали використовувати як символ країни та на офіційному логотипі.
                                                    На новому логотипі замість слова «Голландія» зображені помаранчеві букви NL та написана назва країни англійською мовою — «Netherlands».
                                                    Влада Нідерландів вважає, що слово «Голландія» у іноземців часто асоціюється з тими розвагами, яких вони б хотіли уникати: легальними рекреаційними наркотиками та кварталом червоних ліхтарів.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row vacancy-info-categories">
                                                    <div className="col-8">
                                                        Графік роботи:
                                                    </div>
                                                    {/*<div className="col-4 ml-auto">*/}
                                                    {/*    <LightTooltip title="Видалити блок">*/}
                                                    {/*        <button className="but-edit-employer">*/}
                                                    {/*            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-trash-employer">*/}
                                                    {/*                <polyline points="3 6 5 6 21 6"></polyline>*/}
                                                    {/*                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>*/}
                                                    {/*            </svg>*/}
                                                    {/*        </button>*/}
                                                    {/*    </LightTooltip>*/}
                                                    {/*    <LightTooltip title="Редагувати блок">*/}
                                                    {/*        <button className="but-edit-employer">*/}
                                                    {/*            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-edit-employer">*/}
                                                    {/*                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>*/}
                                                    {/*            </svg>*/}
                                                    {/*        </button>*/}
                                                    {/*    </LightTooltip>*/}
                                                    {/*</div>*/}
                                                </div>
                                                <p className="vacancy-text">Full-time, з можливістю іноді відвідувати пари. Також з оплачуваною відпусткою на період сесії.</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row vacancy-info-categories">
                                                    <div className="col-8">
                                                        Вимоги:
                                                    </div>
                                                </div>
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
                                                <div className="row vacancy-info-categories">
                                                    <div className="col-8">
                                                        Буде плюсом:
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li className="vacancy-text">Від 3 до 5 років досвіду в розробці розроблених на замовлення ІТ-рішень.</li>
                                                    <li className="vacancy-text">Поєднання освіти та досвіду, що дають рівноцінні знання.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row vacancy-info-categories">
                                                    <div className="col-8">
                                                        Задачі:
                                                    </div>
                                                </div>
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
                                                <div className="row vacancy-info-categories">
                                                <div className="col-8">
                                                    Ми пропонуємо:
                                                </div>
                                                </div>
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
                                            <iframe id="iframe-map" width="230" height="260" frameBorder="0" className="google-map" scrolling="no"
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
                                        {/*<div id="fadeout-b" className="bottom-fadeout-candidates"></div>*/}
                                        {/*<div id="fadeout-t" className="top-fadeout-candidates"></div>*/}
                                        {/*<div id="fadeout-l" className="left-fadeout-candidates"></div>*/}
                                        {/*<div id="fadeout-r" className="right-fadeout-candidates"></div>*/}
                                        <TableCandidates/>
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