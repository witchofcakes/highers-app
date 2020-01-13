import React from "react";
import logo from "../images/logo-mountain.png";
import Avatar from '@material-ui/core/Avatar';
import avatar from '../images/avatar.jpeg'
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'

export default class SideBar extends React.Component {

    render() {

        return (
            <div className="col-3 wide-sidebar no-gutters" id="leftCol-employer-sidebar">
                <div className="row align-items-center">
                    <div className="col-12 no-gutters logo-employer">
                        <a className="navbar-brand" href="/"><img src={logo} className="logo-mount-sidebar"/></a>
                    </div>
                </div>

                <div className="employer-menu-text">
                    <NavLink activeClassName="employer-left-active" className="all-vac-employer-sidebar" to='/employer-vacancies'>
                        <p className="p-navlinks">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-file-text-sidebar"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                            Вакансії
                        </p>
                    </NavLink>
                    <NavLink activeClassName="employer-left-active" className="candidates-employer-sidebar" to='/employer-candidates'>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" id="employer-left-active" viewBox="0 0 24 24" className="feather-user-sidebar"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            Кандидати
                        </p>
                    </NavLink>
                    {/*<NavLink activeClassName="employer-left-active" className="channels-employer" to='/employer-channels'>*/}
                    {/*    <p>*/}
                    {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>*/}
                    {/*        Канали*/}
                    {/*    </p>*/}
                    {/*</NavLink>*/}
                    {/*<NavLink activeClassName="employer-left-active" className="pricing-employer" to='/employer-pricing'>*/}
                    {/*    <p>*/}
                    {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>*/}
                    {/*        Тариф*/}
                    {/*    </p>*/}
                    {/*</NavLink>*/}
                </div>

                <div className="avatar-employer">
                    <div className="row">
                        <Avatar src={avatar} className="avatar-picture" />
                        <div className="col">
                            <p className="avatar-name">
                                <a href="#" className="avatar-name">
                                    Тетяна
                                </a>
                            </p>
                            <p className="avatar-job">Ernst & Young</p>
                        </div>
                    </div>
                </div>
            </div>






        );
    }
}