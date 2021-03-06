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
import Select from "@material-ui/core/Select";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../images/avatar.jpeg";
import Upload_Profile from "./upload_profile";

export default class Empl_Candidate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            faculty: this.props.faculty,
            course: this.props.course,
            english: this.props.english,
            salary: this.props.salary,
            workType: this.props.workType,
            surname: this.props.surname,
            status: '',
            cv: true,
        }
        this.handleChange_status = this.handleChange_status.bind(this);
    }

    handleChange_status = (name) => event => {
        this.setState({ [name]: event.target.value,});
    };

    render() {

        return (
            <div>
                <div className="row">

                    <SideBar/>

                    <div className="full col" id="content-employer">
                        <div className="row row-resume">
                            <div className="col-9 resume-borders">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <div className="all-vac-text-candidate">Кріс Хемсворт</div>
                                            </div>
                                            <div className="col-6 ml-auto">
                                                <FormControl id="select-status-icon-candidate">
                                                    <Select value={this.state.status}
                                                            onChange={this.handleChange_status('status')}
                                                            displayEmpty id="select-status-candidate"
                                                            IconComponent = {ExpandMoreRoundedIcon}
                                                    >
                                                        <MenuItem value="" id="all-cat-select">
                                                            <div className="new-status-2"></div>
                                                            Новий
                                                        </MenuItem>
                                                        <MenuItem value={1} id="all-cat-select">
                                                            <div className="test-status-2"></div>
                                                            Тест
                                                        </MenuItem>
                                                        <MenuItem value={2} id="all-cat-select">
                                                            <div className="interview-status-2"></div>
                                                            Співбесіда
                                                        </MenuItem>
                                                        <MenuItem value={3} id="all-cat-select">
                                                            <div className="accepted-status-2"></div>
                                                            Прийнятий
                                                        </MenuItem>
                                                        <MenuItem value={4} id="all-cat-select">
                                                            <div className="decline-status-2"></div>
                                                            Відмова
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row row-margin-block">
                                            <div className="col-6">
                                                <p className="block-candidate-title">Профіль</p>
                                            </div>
                                        </div>
                                        <div className="row row-margin-candidate">
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate-name">Назва вакансії</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate">IT Risk and Assurance</p>
                                            </div>
                                        </div>
                                        <div className="row row-margin-candidate">
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate-name">Резюме</p>
                                            </div>
                                            <div className="col-6">
                                                {(() => {
                                                    if (this.state.cv==true){
                                                        return (
                                                            <button className="resume-button-candidate">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="feather-cv-2" viewBox="-53 1 511 511.99906">
                                                                    <path d="M 276.410156 3.957031 C 274.0625 1.484375 270.84375 0 267.507812 0 L 67.777344 0 C 30.921875 0 0.5 30.300781 0.5 67.152344 L 0.5 444.84375 C 0.5 481.699219 30.921875 512 67.777344 512 L 338.863281 512 C 375.71875 512 406.140625 481.699219 406.140625 444.84375 L 406.140625 144.941406 C 406.140625 141.726562 404.65625 138.636719 402.554688 136.285156 Z M 279.996094 43.65625 L 364.464844 132.328125 L 309.554688 132.328125 C 293.230469 132.328125 279.996094 119.21875 279.996094 102.894531 Z M 338.863281 487.265625 L 67.777344 487.265625 C 44.652344 487.265625 25.234375 468.097656 25.234375 444.84375 L 25.234375 67.152344 C 25.234375 44.027344 44.527344 24.734375 67.777344 24.734375 L 255.261719 24.734375 L 255.261719 102.894531 C 255.261719 132.945312 279.503906 157.0625 309.554688 157.0625 L 381.40625 157.0625 L 381.40625 444.84375 C 381.40625 468.097656 362.113281 487.265625 338.863281 487.265625 Z M 338.863281 487.265625 " />
                                                                    <path d="M 305.101562 401.933594 L 101.539062 401.933594 C 94.738281 401.933594 89.171875 407.496094 89.171875 414.300781 C 89.171875 421.101562 94.738281 426.667969 101.539062 426.667969 L 305.226562 426.667969 C 312.027344 426.667969 317.59375 421.101562 317.59375 414.300781 C 317.59375 407.496094 312.027344 401.933594 305.101562 401.933594 Z M 305.101562 401.933594 " />
                                                                    <path d="M 194.292969 357.535156 C 196.644531 360.007812 199.859375 361.492188 203.320312 361.492188 C 206.785156 361.492188 210 360.007812 212.347656 357.535156 L 284.820312 279.746094 C 289.519531 274.796875 289.148438 266.882812 284.203125 262.308594 C 279.253906 257.609375 271.339844 257.976562 266.765625 262.925781 L 215.6875 317.710938 L 215.6875 182.664062 C 215.6875 175.859375 210.121094 170.296875 203.320312 170.296875 C 196.519531 170.296875 190.953125 175.859375 190.953125 182.664062 L 190.953125 317.710938 L 140 262.925781 C 135.300781 257.980469 127.507812 257.609375 122.5625 262.308594 C 117.617188 267.007812 117.246094 274.800781 121.945312 279.746094 Z M 194.292969 357.535156 " />
                                                                </svg>
                                                            </button>
                                                        );
                                                    }
                                                    else{
                                                        return (
                                                            <div>
                                                            </div>
                                                        );
                                                    }
                                                })()}
                                            </div>
                                        </div>
                                        <div className="row row-margin-candidate">
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate-name">Контакти</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate">+38 (067) 365 86 59</p>
                                            </div>
                                        </div>
                                        <div className="row row-margin-candidate">
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate-name">Дата заповнення</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate">08 січня 2020</p>
                                            </div>
                                        </div>
                                        <div className="row row-margin-block">
                                            <div className="col-6">
                                                <p className="block-candidate-title">Освіта</p>
                                            </div>
                                        </div>
                                        <div className="row row-margin-candidate">
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate-name">Курс</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate">1</p>
                                            </div>
                                        </div>
                                        <div className="row row-margin-candidate">
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate-name">Університет</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate">КНУ</p>
                                            </div>
                                        </div>
                                        <div className="row row-margin-candidate">
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate-name">Факультет</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate">Філології</p>
                                            </div>
                                        </div>
                                        <div className="row row-margin-candidate">
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate-name">Спеціальність</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate">Інженерія програмного забезпечення</p>
                                            </div>
                                        </div>
                                        <div className="row row-margin-block">
                                            <div className="col-6">
                                                <p className="block-candidate-title">Мови</p>
                                            </div>
                                        </div>
                                        <div className="row row-margin-candidate">
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate-name">Рівень англійської мови</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate">В2 - вище середнього</p>
                                            </div>
                                        </div>
                                        <div className="row row-margin-candidate">
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate-name">Інші іноземні мови</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate"></p>
                                            </div>
                                        </div>
                                        <div className="row row-margin-block">
                                            <div className="col-6">
                                                <p className="block-candidate-title">Зайнятість</p>
                                            </div>
                                        </div>
                                        <div className="row row-margin-candidate">
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate-name">Бажана зарплатня</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate">5000+</p>
                                            </div>
                                        </div>
                                        <div className="row row-margin-candidate">
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate-name">Зайнятість</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="vacancy-title-candidate">Full-time, Part-time, Стажування</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}