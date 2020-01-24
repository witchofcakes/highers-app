import React, { PureComponent } from 'react';
import Filter_Mobile from "./mobile/filter_mobile";
import logo from '../images/logo.png'

export default class NavBar_Mobile extends React.Component {

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
                        <div className="navbar-nav ml-auto">
                            <button className="button-filter-menu" data-toggle="collapse" data-target="#filter-menu" aria-expanded="false"
                                    aria-controls="collapseExample">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="feather-sliders-menu">
                                    <line x1="4" y1="21" x2="4" y2="14"></line>
                                    <line x1="4" y1="10" x2="4" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12" y2="3"></line>
                                    <line x1="20" y1="21" x2="20" y2="16"></line>
                                    <line x1="20" y1="12" x2="20" y2="3"></line>
                                    <line x1="1" y1="14" x2="7" y2="14"></line>
                                    <line x1="9" y1="8" x2="15" y2="8"></line>
                                    <line x1="17" y1="16" x2="23" y2="16"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="collapse" id="filter-menu">
                        <Filter_Mobile/>
                    </div>
                </div>
            </nav>
        );
    }
}
