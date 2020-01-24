import React, { PureComponent } from 'react';
import Filter_Mobile from "./mobile/filter_mobile";
import logo from '../images/logo.png'

export default class NavBar_Mobile_Back extends React.Component {

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light navbar-mobile">
                <div className="full-filter-mobile">
                    <div className="row">
                        <button onClick={() => { document.location.href = "/vacancy"; }} className="button-filter-menu">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-chevron-left-menu">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <div className="navbar-nav ml-auto">
                        <a className="navbar-brand" href="/"><img src={logo} className="logo-main"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        </div>


                    </div>
                </div>
            </nav>
        );
    }
}
