import React from 'react';

export default class Vacancy extends React.Component {
    render() {
        return (
            <div>
                <div className="row align-items-center vacancy-2">
                    <div className={this.props.image}/>
                    <div className="col-5 vacancy-title">
                        <p className="vacancy-title"><a className="vacancy-title-a" href="/vacancy">{this.props.title}</a>
                        </p>
                        <p className="vacancy-info">
                            {this.props.company}
                            <span className="vacancy-dot-long">•</span>
                            1 day ago
                        </p>
                    </div>
                    <div className="col-2 vacancy-type">
                        <p className="vacancy-type">{this.props.type}</p>
                        <p className="vacancy-location">Kyiv, Ukraine</p>
                    </div>
                    <div className="col-2 vacancy-salary">
                        <p className="vacancy-salary">{this.props.salary}</p>
                    </div>
                    <div className="col vacancy-salary">
                        <p className="vacancy-salary">$500</p>
                    </div>
                </div>
            </div>
        );
    }
}
