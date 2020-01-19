import React, { PureComponent } from 'react';
// import menu2 from '../images/menu2.svg'
import logo from '../images/logo.png'

class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="full-filter">
                    <div className="row">
                <a className="navbar-brand" href="/"><img src={logo} className="logo-main"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Про нас</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contacts">Контакти</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/employer-vacancies">Для роботодавця</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/all-vacancies"><span className="underline">Вакансії</span></a>
                        </li>
                    </ul>
                </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;