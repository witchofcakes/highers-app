import React from "react";
import logo from '../images/logo-mountain-2.png'

export default class Login extends React.Component {

    render() {

        return (

            <div className="container-fluid container-fluid-login">
                <div className="row">
                    <div className="col-12">
                        <div className="row login-center">
                            <div className="login-container">
                                <div className="login-logo">
                                    <img src={logo} className="logo-mount-login" />
                                </div>
                                <p className="login-name-login">Логін</p>
                                <p>
                                    <input className="login-input" placeholder="Логін, надісланий на пошту"/>
                                </p>
                                <div className="password-div">
                                    <p className="login-name">Пароль</p>
                                    <p className="login-name-password">
                                        <a href="#" className="login-name-password">
                                            Забули пароль?
                                        </a>
                                    </p>
                                </div>
                                <p>
                                    <input className="login-input" placeholder="Пароль, надісланий на пошту"/>
                                </p>
                                <button className="button-login">
                                    Увійти
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}