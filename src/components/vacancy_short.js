import React from 'react';

export default class Vacancy_Short extends React.Component {
    render() {
        return (
            <div className="container" id="border-bottom-container">
                <div className="row align-items-center vac-title-short">
                    <div className="col-2 no-gutters">
                        <div className={this.props.image}/>
                    </div>
                    <div className="col-10 no-gutters">
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
                    </div>
                </div>
            </div>
        );
    }
}
