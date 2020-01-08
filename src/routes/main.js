import React, { Component } from 'react';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import Landing from '../components/landing_page.js';
import NavBar from "../components/navbar.js";
import AllVac from '../components/vacancies.js';
import Test from "../components/tester";
import Vac_Page from "../components/vacancy_one";
import Empl_Vac from "../components/employer_vacancies";

const Main = () => (
    <div>
        {/*<NavBar/>*/}
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/all-vacancies" component={AllVac} />
            <Route path="/vacancy" component={Vac_Page} />
            <Route path="/employer-vacancies" component={Empl_Vac} />
        </Switch>
    </div>
)

export default Main;