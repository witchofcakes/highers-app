import React, { PureComponent } from 'react';
import Filter_Mobile from "./mobile/filter_mobile";
import logo from '../images/logo.png'

export default class NavBar_Mobile_Logo extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light navbar-mobile">
                <div className="full-filter">
                    <div className="row">
                        <a className="navbar-brand" href="/"><img src={logo} className="logo-main"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}
