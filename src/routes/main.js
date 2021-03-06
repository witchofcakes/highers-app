import React, { Component } from 'react';
import { HashRouter, Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import Landing from '../components/landing_page.js';
import NavBar from "../components/navbar.js";
import AllVac from '../components/vacancies.js';
import Test from "../components/tester";
import Vac_Page from "../components/vacancy_one";
import Empl_Vac from "../components/employer_vacancies";
import Empl_Cand from "../components/employer_candidates";
import Empl_Vac_One from "../components/vacancy_employer";
import Create_Vac from "../components/create_vacancy";
import Contact_Us from "../components/contacts";
import Apply from "../components/apply";
import Empl_Candidate from "../components/employer_candidate";
import Login from "../components/login_employer";
import Empl_Profile from "../components/employer_profile";
import NavBar_Mobile from "../components/navbar_mobile";
import Apply_Page from "../components/apply_page";

const Main = () => (
    <HashRouter basename="/">
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/employer-vacancies" component={EmployerContainer}/>
                    <Route path="/employer-candidates" component={EmployerContainer} />
                    <Route path="/employer-vacancy" component={EmployerContainer} />
                    <Route path="/create-vacancy" component={EmployerContainer} />
                    <Route path="/candidate" component={EmployerContainer} />
                    <Route path="/login-employer" component={EmployerContainer} />
                    <Route path="/employer-profile" component={EmployerContainer} />
                    <Route path="/test" component={EmployerContainer} />
                    <Route component={DefaultContainer}/>
                </Switch>
            </BrowserRouter>
        </div>
    </HashRouter>
)

const EmployerContainer = () => (
        <Switch>
            <Route path="/employer-vacancies" component={Empl_Vac} />
            <Route path="/employer-candidates" component={Empl_Cand} />
            <Route path="/employer-vacancy" component={Empl_Vac_One} />
            <Route path="/employer-profile" component={Empl_Profile} />
            <Route path="/create-vacancy" component={Create_Vac} />
            <Route path="/candidate" component={Empl_Candidate} />
            <Route path="/login-employer" component={Login} />
            <Route path="/test" component={Test} />
        </Switch>

)


const DefaultContainer = () => (
        <div>
            <NavBar/>
            {/*<NavBar_Mobile/>*/}
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/all-vacancies" component={AllVac} />
                <Route path="/vacancy" component={Vac_Page} />
                <Route path="/contacts" component={Contact_Us} />
                <Route path="/apply" component={Apply} />
                <Route path="/apply-page" component={Apply_Page} />
            </Switch>
        </div>
)

export default Main;

