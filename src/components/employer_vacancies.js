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
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import PerfectScrollbar from "react-perfect-scrollbar";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Cand_Row from "./candidate_row";
import {makeStyles} from "@material-ui/core";



function createData(number, name, vacancy, education, languages, contacts, type, cv, status, date) {
    return { number, name, vacancy, education, languages, contacts, type, cv, status, date };
}

const rows = [
    // createData('1', "Валерія Караульна", "Менеджер", "КНУ", "Англ - В1", "(067) 220-08-73", "Фулл-тайм, 8000+", "нема", "Тест", "08 січ"),
];

const useStyles = makeStyles({
    table: {
        width: '130%',
        height: '500px !important'
    },
});

const TableVacancies = () => {
    const classes = useStyles();
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
                    <Table stickyHeader className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">#</TableCell>
                                <TableCell align="left">Назва</TableCell>
                                <TableCell align="left">Приорітет</TableCell>
                                <TableCell align="left">Локація</TableCell>
                                <TableCell align="center">Кандидати</TableCell>
                                <TableCell align="left">Зайнятість</TableCell>
                                <TableCell align="left">Освіта</TableCell>
                                <TableCell align="left">Мови</TableCell>
                                <TableCell align="left">Статус</TableCell>
                                <TableCell align="left">Дата</TableCell>
                                <TableCell align="center">Більше</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Vac_Row number={"1"} title={"IT Risk and Assurance"} location={"Київ"} applicants={"3"} course={"3"} faculty={"Фінансисти"} english={"Англ - B2"} workType={"Full-time"} salary={"8000+"} languages={"Ісп - А2"} date={"08 січ"}/>
                            <Vac_Row number={"2"} title={"Менеджер із роботи з бізнес - клієнтами"} location={"Київ"} applicants={"45"} course={"5"} faculty={"Економісти"} english={"Англ - B1"} workType={"Part-time"} salary={"13000+"} languages={"Нім - В2"} date={"08 січ"}/>
                            <Vac_Row number={"3"} title={"Content Maker & Manager Trainee"} location={"Київ"} applicants={"17"} course={"4"} faculty={"Маркетологи"} english={"Англ - B2"} workType={"Full-time, Part-time"} salary={"5000+"} languages={"Кит - А1"} date={"08 січ"}/>
                            <Vac_Row number={"4"} title={"IT Risk and Assurance"} location={"Київ"} applicants={"3"} course={"3"} faculty={"Фінансисти"} english={"Англ - B2"} workType={"Full-time"} salary={"8000+"} languages={"Ісп - А2"} date={"08 січ"}/>
                            <Vac_Row number={"5"} title={"Менеджер із роботи з бізнес - клієнтами"} location={"Київ"} applicants={"45"} course={"5"} faculty={"Економісти"} english={"Англ - B1"} workType={"Part-time"} salary={"13000+"} languages={"Нім - В2"} date={"08 січ"}/>
                            <Vac_Row number={"6"} title={"Content Maker & Manager Trainee"} location={"Київ"} applicants={"17"} course={"4"} faculty={"Маркетологи"} english={"Англ - B2"} workType={"Full-time, Part-time"} salary={"5000+"} languages={"Кит - А1"} date={"08 січ"}/>
                            <Vac_Row number={"7"} title={"IT Risk and Assurance"} location={"Київ"} applicants={"3"} course={"3"} faculty={"Фінансисти"} english={"Англ - B2"} workType={"Full-time"} salary={"8000+"} languages={"Ісп - А2"} date={"08 січ"}/>
                            <Vac_Row number={"8"} title={"Менеджер із роботи з бізнес - клієнтами"} location={"Київ"} applicants={"45"} course={"5"} faculty={"Економісти"} english={"Англ - B1"} workType={"Part-time"} salary={"13000+"} languages={"Нім - В2"} date={"08 січ"}/>
                            <Vac_Row number={"9"} title={"Content Maker & Manager Trainee"} location={"Київ"} applicants={"17"} course={"4"} faculty={"Маркетологи"} english={"Англ - B2"} workType={"Full-time, Part-time"} salary={"5000+"} languages={"Кит - А1"} date={"08 січ"}/>
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

export default class Empl_Vac extends React.Component {

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
        content.setAttribute('style', 'margin-left: ' + '290px');
        var button = document.getElementById("menu-button");
        button.classList.remove("active-button");
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
                                    <div className="all-vac-text-employer">Всі вакансії</div>
                                    <div className="ml-auto">
                                        <form className="search-form-employer" autoComplete="off">
                                            <div className="feather-search-div">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-search">
                                                    <circle cx="11" cy="11" r="8"></circle>
                                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                </svg>
                                            </div>
                                            <input className="search-employer" placeholder="Пошук вакансій" type="text"/>
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
                            <TableVacancies/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}