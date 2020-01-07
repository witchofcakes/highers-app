import React, { Component } from 'react';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import Landing from '../components/landing_page.js';
import NavBar from "../components/navbar.js";
import AllVac from '../components/vacancies.js';
import Test from "../components/tester";

const Main = () => (
    <div>
        <NavBar/>
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/all-vacancies" component={AllVac} />
    </Switch>
    </div>
)

export default Main;