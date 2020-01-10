import React from "react";
import logo from "../images/logo.png";
import Avatar from '@material-ui/core/Avatar';
import avatar from '../images/avatar.jpeg'

export default class Wide_SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            display: true,
        }
        this.handleClick2 = this.handleClick2.bind(this);
    }

    handleClick2() {
        var sidebar = document.getElementById("leftCol-employer-wide");
        sidebar.classList.add("not-active-menu");
        var content = document.getElementById("content-employer");
        content.setAttribute('style', 'margin-left: ' + '88px');
        var button = document.getElementById("menu-button");
        button.classList.add("active-button");
        var table = document.getElementById("simplebar-candidate");
        table.setAttribute('style', 'width: ' + '1115px' + '; height: ' + '100%');
        var fadeout_b = document.getElementById("fadeout-b");
        fadeout_b.setAttribute('style', 'display: ' + 'none');
        var fadeout_t = document.getElementById("fadeout-t");
        fadeout_t.setAttribute('style', 'display: ' + 'none');
        var fadeout_r = document.getElementById("fadeout-r");
        fadeout_r.setAttribute('style', 'display: ' + 'none');
        var fadeout_l = document.getElementById("fadeout-l");
        fadeout_l.setAttribute('style', 'display: ' + 'none');
        // var fadeout_r = document.getElementById("leftCol-employer-wide");
        // fadeout_r.setAttribute('style', 'margin-left: ' + 'none');
        // var table1 = document.getElementById("simplebar-candidate");
        // table1.setAttribute('style', 'height: ' + '100%');
        // field.setAttribute("placeholder", "Пошук");
        // icon.setAttribute('style', 'display: ' + 'none');
        // icon_close.setAttribute('style', 'display: ' + 'inline');
    }

    render() {

        return (
            <div className="col-3 wide-sidebar no-gutters" id="leftCol-employer-wide">
                <div className="row align-items-center">
                    <div className="col-12 no-gutters logo-employer">
                        <a className="navbar-brand" href="/"><img src={logo} className="logo-employer"/></a>
                        <button className="menu-button-close" onClick={this.handleClick2}>
                            <svg className="menu-close-icon" viewBox="0 0 50 50">
                                <path d="M49,4H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,4,49,4z"></path>
                                <path d="M49,16H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,16,49,16z"></path>
                                <path d="M49,28H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,28,49,28z"></path>
                                <path d="M8.1,22.8c-0.3,0-0.5-0.1-0.7-0.3L0.7,15l6.7-7.8c0.4-0.4,1-0.5,1.4-0.1c0.4,0.4,0.5,1,0.1,1.4L3.3,15l5.5,6.2   c0.4,0.4,0.3,1-0.1,1.4C8.6,22.7,8.4,22.8,8.1,22.8z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="employer-menu-text">
                    <a href="/employer-vacancies" className="all-vac-employer">
                        <p className="all-vac-employer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather-file-text"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                            Вакансії
                        </p>
                    </a>
                    <a href="/employer-candidates" className="candidates-employer">
                        <p className="candidates-employer" id="employer-left-active">
                            <svg xmlns="http://www.w3.org/2000/svg"id="employer-left-active" viewBox="0 0 24 24" className="feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            Кандидати
                        </p>
                    </a>
                            <a href="/employer-vacancies" className="channels-employer">
                                <p className="channels-employer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                                    Канали
                                </p>
                            </a>
                            <a href="/employer-vacancies" className="pricing-employer">
                                <p className="pricing-employer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                    Тариф
                                </p>
                            </a>
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