import React from "react";
import Btn_More from "./button_more";
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';

export default class Cand_Row extends React.Component {

    render() {

        return (
            <tr>
                <th className={this.props.active} scope="row">{this.props.number}</th>
                <td id="candidate-row-td-ellipsis">
                    <a href="#" id="table-employer-link" className={this.props.active}>{this.props.surname}</a>
                </td>
                <td id="candidate-row-td-ellipsis" className={this.props.active}>{this.props.name}</td>
                <td id="candidate-row-td">
                    <a href="#" id="table-employer-link" className={this.props.active}>{this.props.contacts}</a>
                </td>
                <td id="candidate-row-td-ellipsis" className={this.props.active}>{this.props.vacancy}</td>
                <td id="candidate-row-td-ellipsis" className={this.props.active}>{this.props.course}</td>
                <td id="candidate-row-td-ellipsis" className={this.props.active}>{this.props.university}</td>
                <td id="candidate-row-td-ellipsis" className={this.props.active}>{this.props.faculty}</td>
                <td id="candidate-row-td-ellipsis" className={this.props.active}>{this.props.english}</td>
                <td id="candidate-row-td" className={this.props.active}>{this.props.workType}</td>
                <td id="candidate-row-td-ellipsis" className={this.props.active}>{this.props.salary}</td>
                <td id="candidate-row-td" className={this.props.active}>{this.props.languages}</td>
                <td id="candidate-row-td-ellipsis" className={this.props.active}>
                    <div className={this.props.status_color}></div>
                    {this.props.status}
                </td>
                <td id="candidate-row-td-ellipsis" className={this.props.active}>{this.props.date}</td>
                <td id="candidate-row-td" className="align-center-table">
                    <Btn_More/>
                </td>
            </tr>
        );
    }
}