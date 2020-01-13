import React from "react";

export default class Empl_Vac_All extends React.Component {
    render() {
        return (

            <div className="one-vacancy-employer">
                {/*<p className="vacancy-info-employer">*/}
                {/*    03 січня*/}
                {/*</p>*/}
                <p className="vacancy-title-employer">
                    <a className="vacancy-title-a-employer" id={this.props.active} href="/vacancy">
                        {this.props.title}
                    </a>
                </p>
                <p className="vacancy-title-employer">
                    <p className="vacancy-type-employer">
                        {this.props.type}
                        <span className="vacancy-dot">•</span>
                        {this.props.location}
                    </p>
                </p>
            </div>

        );
    }
}