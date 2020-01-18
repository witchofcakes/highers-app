import React from "react";
import logo from "../images/logo-mountain.png";
import Avatar from '@material-ui/core/Avatar';
import avatar from '../images/avatar.jpeg'
import {NavLink} from 'react-router-dom'
import {withStyles} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: 'white',
        color: '#212529',
        boxShadow: theme.shadows[1],
        fontSize: 11.5,
        letterSpacing: '0.4px'
    },
}))(Tooltip);

export default class SideBar extends React.Component {

    render() {

        return (
            <div className="wide-sidebar no-gutters" id="leftCol-employer-sidebar">
                <div className="row align-items-center">
                    <div className="col-12 sidebar-column">
                        <div><a className="navbar-brand-sidebar" href="/">
                            <img src={logo} className="logo-mount-sidebar"/>
                        </a></div>
                    </div>
                </div>

                <div className="row employer-menu-text-sidebar">
                    <div className="col-12 sidebar-column">
                        <NavLink activeClassName="employer-left-active" className="all-vac-employer-sidebar" to='/employer-vacancies'>
                            <p className="p-navlinks">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-file-text-sidebar"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                                <p>Вакансії</p>
                            </p>
                        </NavLink>
                    </div>
                </div>
                <div className="row employer-menu-text-sidebar-not-top">
                    <div className="col-12 sidebar-column">
                        <NavLink activeClassName="employer-left-active" className="candidates-employer-sidebar" to='/employer-candidates'>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" id="employer-left-active" viewBox="0 0 24 24" className="feather-user-sidebar"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                <p>Кандидати</p>
                            </p>
                        </NavLink>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 sidebar-column-back">
                        <LightTooltip title="Назад до сайту" placement="right">
                            <button className="back-to-site-btn">
                                <a className="back-to-site" href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        className="feather-arrow-left-sidebar">
                                        <line x1="19" y1="12" x2="5" y2="12"></line>
                                        <polyline points="12 19 5 12 12 5"></polyline>
                                    </svg>
                                </a>
                            </button>
                        </LightTooltip>
                    </div>
                </div>

                <div className="row avatar-employer-sidebar">
                    <div className="col-12 sidebar-column">
                        <div className="sidebar-column-avatar">
                            <LightTooltip title="Мій профіль" placement="right">
                                <button className="button-avatar">
                                    <a href="/employer-profile">
                                        <Avatar src={avatar} className="avatar-picture-sidebar" />
                                    </a>
                                </button>
                            </LightTooltip>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}