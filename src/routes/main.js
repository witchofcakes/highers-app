import React, { Component } from 'react';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import Landing from '../components/landing_page.js';
import NavBar from "../components/navbar.js";
import AllVac from '../components/vacancies.js';
import Test from "../components/tester";
import Vac_Page from "../components/vacancy_one";
import Empl_Vac from "../components/employer_vacancies";
import Empl_Cand from "../components/employer_candidates";
import Empl_Vac_One from "../components/vacancy_employer";

const Main = () => (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/employer-vacancies" component={EmployerContainer}/>
                    <Route path="/employer-candidates" component={EmployerContainer} />
                    <Route path="/employer-vacancy" component={EmployerContainer} />
                    <Route component={DefaultContainer}/>
                </Switch>
            </BrowserRouter>
        </div>

)

const EmployerContainer = () => (
        <Switch>
            <Route path="/employer-vacancies" component={Empl_Vac} />
            <Route path="/employer-candidates" component={Empl_Cand} />
            <Route path="/employer-vacancy" component={Empl_Vac_One} />
        </Switch>

)


const DefaultContainer = () => (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/all-vacancies" component={AllVac} />
                <Route path="/vacancy" component={Vac_Page} />
            </Switch>
        </div>
)


export default Main;

