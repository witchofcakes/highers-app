import React from "react";
import logo from "../images/logo.png";
import logo_mount from "../images/logo-mountain.png";
import Avatar from '@material-ui/core/Avatar';
import avatar from '../images/avatar.jpeg'
import Wide_SideBar from "./wide_sidebar";
import Narrow_SideBar from "./narrow_sidebar";
import search_bl from "../images/search-black.svg";
import close_icon from "../images/close-icon.svg";

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
                                        <form className="search-form-employer" placeholder="Пошук" autoComplete="off">
                                            <input className="search-employer" type="text"/>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-search">
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                            </svg>
                                        </form>
                                        <a target="_blank" className="create-vac" href="#">
                                            <button className="create-vac-employer">Створити вакансію</button>
                                        </a>
                                    </div>
                                </div>
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>IT Risk and Assurance</td>
                                    <td>Київ</td>
                                    <td>12</td>
                                    <td>В процесі</td>
                                    <td>08.01.2020</td>
                                    <td className="align-center-table">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Менеджер із роботи з бізнес - клієнтами</td>
                                    <td>Київ</td>
                                    <td>3</td>
                                    <td>В процесі</td>
                                    <td>08.01.2020</td>
                                    <td className="align-center-table">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Content Maker & Manager Trainee</td>
                                    <td>Київ</td>
                                    <td>345</td>
                                    <td>В процесі</td>
                                    <td>08.01.2020</td>
                                    <td className="align-center-table">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}