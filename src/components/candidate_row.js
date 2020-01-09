import React from "react";
import Btn_More from "./button_more";
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';

export default class Cand_Row extends React.Component {

    render() {

        return (
            <tr>
                <th className={this.props.active} scope="row">{this.props.number}</th>
                <td>
                    <a href="#" id="table-employer-link" className={this.props.active}>{this.props.surname}</a>
                </td>
                <td className={this.props.active}>{this.props.name}</td>
                <td>
                    <a href="#" id="table-employer-link" className={this.props.active}>{this.props.contacts}</a>
                </td>
                <td className={this.props.active}>{this.props.vacancy}</td>
                <td className={this.props.active}>{this.props.course}</td>
                <td className={this.props.active}>{this.props.university}</td>
                <td className={this.props.active}>{this.props.faculty}</td>
                <td className={this.props.active}>{this.props.english}</td>
                <td className={this.props.active}>{this.props.workType}</td>
                <td className={this.props.active}>{this.props.salary}</td>
                <td className={this.props.active}>{this.props.languages}</td>
                <td className={this.props.active}>{this.props.status}</td>
                <td className={this.props.active}>{this.props.date}</td>
                <td className="align-center-table">
                    <Btn_More/>
                </td>
            </tr>
        );
    }
}