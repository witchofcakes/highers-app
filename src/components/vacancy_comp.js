import React from 'react';
import arrow from "../images/arrow.svg";

export default class Vacancy_Comp extends React.Component {
    render() {
        return (
            <div className="vacancy-comp container" id="border-bottom-container">
                <div className="row align-items-center vac-title-short">
                    <div className="col-12 no-gutters">
                        <p className="vacancy-info-company-short">
                            03 січня, Київ
                        </p>
                        <p className="vacancy-title-short">
                            <a className="vacancy-title-a-short" href="/vacancy">{this.props.title}</a>
                        </p>
                        <p className="vacancy-info-company-short-bl">
                            {this.props.company}
                            <span className="vacancy-dot">•</span>
                            {this.props.type}
                        </p>
                        <div className="vac-company-div-apply">
                            <a target="_blank" href="/all-vacancies" className="apply-company-blue">
                                Apply now<img src={arrow} className="arrow-blue-comp-apply"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
