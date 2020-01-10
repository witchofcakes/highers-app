import React from "react";
import Btn_More from "./button_more";
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';

export default class Vac_Row extends React.Component {

    render() {

        return (
            <tr>
                <th className={this.props.active} scope="row">{this.props.number}</th>
                <td id="vacancy-row-td">
                    <a href="#" id="table-employer-link" className={this.props.active}>{this.props.title}</a>
                </td>
                <td id="vacancy-row-td" className={this.props.active}>{this.props.location}</td>
                <td id="vacancy-row-td">
                    <a href="#" id="table-employer-link" className={this.props.active}>{this.props.applicants}</a>
                </td>
                <td id="vacancy-row-td" className={this.props.active}>{this.props.status}</td>
                {/*<Badge color="secondary" variant="dot" className="badge-status">*/}
                {/*    <td id={this.props.active2} className={this.props.active}>{this.props.status}</td>*/}
                {/*</Badge>*/}
                <td id="vacancy-row-td" className={this.props.active}>{this.props.date}</td>
                <td id="vacancy-row-td" className="align-center-table">
                    <Btn_More/>
                </td>
            </tr>
        );
    }
}