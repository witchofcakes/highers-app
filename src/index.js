import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './javascript/App';
import './stylesheets/landing.css';
import './stylesheets/all_vac.css';
import './stylesheets/vacancy.css';
import './javascript/navbar.js';
import './javascript/cover.js';
import './stylesheets/employer_vacancies.css';
import './stylesheets/employer_candidate.css';
import './stylesheets/login_employer.css';
import '../node_modules/dropzone/dist/min/dropzone.min.css';
import './stylesheets/employer_profile.css';
import './stylesheets/create_vacancy.css';
import './stylesheets/contacts.css';
import './stylesheets/vacancy_employer.css';
// import 'bootstrap/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
