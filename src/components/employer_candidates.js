import React from "react";
import Cand_Row from "./candidate_row";
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core";
import TablePagination from '@material-ui/core/TablePagination';
import SideBar from "./sidebar";
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

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
                                    <TableCell align="left">Вакансія</TableCell>
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
                                <Cand_Row number={"1"} surname={"Караульна"} name={"Валерія"} contacts={"(067) 856-45-78"} vacancy={"IT Risk and Assurance"} course={"3"} university={"КНУ"} faculty={"Політологія"} specialization={"Зовнішня політологія"} english={"Англ - B2"} workType={"Full-time"} salary={"8000+"} languages={"Ісп - А2"} cv={"true"} date={"08 січ"}/>
                                <Cand_Row number={"2"} surname={"Борисова"} name={"Юлія"} contacts={"(069) 183-99-26"} vacancy={"Менеджер із роботи з бізнес - клієнтами"} course={"5"} university={"КНТЕУ"} faculty={"Менеджмент"} specialization={"Менеджмент підприємства"} english={"Англ - B1"} workType={"Part-time"} salary={"13000+"} languages={"Нім - В2"} date={"08 січ"}/>
                                <Cand_Row number={"3"} surname={"Коваленко"} name={"Катя"} contacts={"(068) 415-34-23"} vacancy={"Content Maker & Manager Trainee"} course={"4"} university={"КНЕУ"} faculty={"Інженерії та природоохоронних систем"} specialization={"Екологія"} english={"Англ - B2"} workType={"Full-time, Part-time, Стажування"} salary={"5000+"} languages={"Кит - А1"} date={"08 січ"}/>
                                <Cand_Row number={"4"} surname={"Караульна"} name={"Валерія"} contacts={"(067) 856-45-78"} vacancy={"IT Risk and Assurance"} course={"3"} university={"КНУ"} faculty={"Політологія"} specialization={"Зовнішня політологія"} english={"Англ - B2"} workType={"Full-time"} salary={"8000+"} languages={"Ісп - А2"} cv={"true"} date={"08 січ"}/>
                                <Cand_Row number={"5"} surname={"Борисова"} name={"Юлія"} contacts={"(069) 183-99-26"} vacancy={"Менеджер із роботи з бізнес - клієнтами"} course={"5"} university={"КНТЕУ"} faculty={"Менеджмент"} specialization={"Менеджмент підприємства"} english={"Англ - B1"} workType={"Part-time"} salary={"13000+"} languages={"Нім - В2"} cv={"true"} date={"08 січ"}/>
                                <Cand_Row number={"6"} surname={"Коваленко"} name={"Катя"} contacts={"(068) 415-34-23"} vacancy={"Content Maker & Manager Trainee"} course={"4"} university={"КНЕУ"} faculty={"Інженерії та природоохоронних систем"} specialization={"Екологія"} english={"Англ - B2"} workType={"Full-time, Part-time"} salary={"5000+"} languages={"Кит - А1"} date={"08 січ"}/>
                                <Cand_Row number={"7"} surname={"Караульна"} name={"Валерія"} contacts={"(067) 856-45-78"} vacancy={"IT Risk and Assurance"} course={"3"} university={"КНУ"} faculty={"Політологія"} specialization={"Зовнішня політологія"} english={"Англ - B2"} workType={"Full-time"} salary={"8000+"} languages={"Ісп - А2"} cv={"true"} date={"08 січ"}/>
                                <Cand_Row number={"8"} surname={"Борисова"} name={"Юлія"} contacts={"(069) 183-99-26"} vacancy={"Менеджер із роботи з бізнес - клієнтами"} course={"5"} university={"КНТЕУ"} faculty={"Менеджмент"} specialization={"Менеджмент підприємства"} english={"Англ - B1"} workType={"Part-time"} salary={"13000+"} languages={"Нім - В2"} date={"08 січ"}/>
                                <Cand_Row number={"9"} surname={"Коваленко"} name={"Катя"} contacts={"(068) 415-34-23"} vacancy={"Content Maker & Manager Trainee"} course={"4"} university={"КНЕУ"} faculty={"Інженерії та природоохоронних систем"} specialization={"Екологія"} english={"Англ - B2"} workType={"Full-time, Part-time"} salary={"5000+"} languages={"Кит - А1"} date={"08 січ"}/>
                                {/*{emptyRows > 0 && (*/}
                                {/*    <TableRow style={{ height: 76 * emptyRows }}>*/}
                                {/*        <TableCell colSpan={5} />*/}
                                {/*    </TableRow>*/}
                                {/*)}*/}
                            </TableBody>
                        </Table>
                    </PerfectScrollbar>
                </TableContainer>
                {/*<TablePagination*/}
                {/*    rowsPerPageOptions={[10, 25, 100]}*/}
                {/*    component="div"*/}
                {/*    count={12}*/}
                {/*    rowsPerPage={10}*/}
                {/*    page={0}*/}
                {/*    id="table-pagination"*/}
                {/*    labelRowsPerPage="Рядків на сторінці"*/}
                {/*    nextIconButtonText="Наступна сторінка"*/}
                {/*    backIconButtonText="Попередня сторінка"*/}
                {/*    // onChangePage={handleChangePage}*/}
                {/*    // onChangeRowsPerPage={handleChangeRowsPerPage}*/}
                {/*/>*/}
                <TablePagination
                    rowsPerPageOptions={[]}
                    component="div"
                    count={12}
                    rowsPerPage={10}
                    page={0}
                    id="table-pagination-mobile"
                    labelRowsPerPage="Рядків на сторінці"
                    nextIconButtonText="Наступна сторінка"
                    backIconButtonText="Попередня сторінка"
                />
            </Paper>
    )
}

export default class Empl_Cand extends React.Component {

    render() {

        return (
            <div>
                {/*<div className="row row-desktop">*/}

                {/*    <SideBar/>*/}

                {/*    <div className="full col" id="content-employer">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-12">*/}
                {/*                <div className="row row-all-vac-margin align-items-center">*/}
                {/*                    <div className="all-vac-text-employer">Всі кандидати</div>*/}
                {/*                    <div className="ml-auto">*/}
                {/*                        <form className="search-form-employer" autoComplete="off">*/}
                {/*                            <div className="feather-search-div">*/}
                {/*                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-search">*/}
                {/*                                    <circle cx="11" cy="11" r="8"></circle>*/}
                {/*                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>*/}
                {/*                                </svg>*/}
                {/*                            </div>*/}
                {/*                            <input className="search-employer" placeholder="Пошук кандидатів" type="text"/>*/}
                {/*                        </form>*/}

                {/*                        <a target="_blank" className="create-vac" href="/create-vacancy">*/}
                {/*                            <button className="create-vac-employer">Створити вакансію</button>*/}
                {/*                        </a>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="row">*/}
                {/*            <div id="fadeout-b" className="bottom-fadeout-candidates"></div>*/}
                {/*            <div id="fadeout-t" className="top-fadeout-candidates"></div>*/}
                {/*            <div id="fadeout-l" className="left-fadeout-candidates"></div>*/}
                {/*            <div id="fadeout-r" className="right-fadeout-candidates"></div>*/}
                {/*            <TableCandidates/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="row row-mobile">
                    <div className="full col">
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
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <TableCandidates/>
                        </div>
                    </div>
                </div>
                <Fab size="medium" color="secondary" aria-label="add" className="add-btn-employer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-plus-mobile">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </Fab>
            </div>

        );
    }
}