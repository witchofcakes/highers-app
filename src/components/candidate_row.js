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
                    <p className="td-margin-name-width">
                        <a href="#" id="table-employer-link" className={this.props.active}>
                            {this.props.surname}
                        </a>
                    </p>
                    <p className="td-margin-name-width"><a href="#" id="table-employer-link" className={this.props.active}>{this.props.name}</a></p>
                </td>
                <td id="candidate-row-td-ellipsis" className={this.props.active}>{this.props.vacancy}</td>
                {/*<td id="candidate-row-td-ellipsis" className={this.props.active}>{this.props.name}</td>*/}
                <td id="candidate-row-td-ellipsis" className={this.props.active}>
                    <p className="td-margin">{this.props.university}</p>
                    <p className="td-margin">{this.props.faculty}</p>
                    <p className="td-margin">{this.props.course} курс</p>
                </td>
                <td id="candidate-row-td-ellipsis" className={this.props.active}>
                    <p className="td-margin">{this.props.languages}</p>
                    <p className="td-margin">Англ - {this.props.english}</p>
                </td>
                <td id="candidate-row-td">
                    <a href="#" id="table-employer-link" className={this.props.active}>{this.props.contacts}</a>
                </td>
                {/*<td id="candidate-row-td-ellipsis" className={this.props.active}>{this.props.university}</td>*/}
                {/*<td id="candidate-row-td-ellipsis" className={this.props.active}>{this.props.faculty}</td>*/}
                <td className={this.props.active}>
                    <p className="td-margin-type-work">{this.props.salary} грн</p>
                    <p className="td-margin-type-work">{this.props.workType}</p>
                </td>
                {/*<td id="candidate-row-td-ellipsis" className={this.props.active}>{this.props.salary}</td>*/}
                {/*<td id="candidate-row-td" className={this.props.active}>{this.props.languages}</td>*/}
                <td id="candidate-row-td-ellipsis-status" className={this.props.active}>
                    <div className={this.props.status_color}></div>
                    {this.props.status}
                </td>
                <td id="candidate-row-td-ellipsis-date" className={this.props.active}>{this.props.date}</td>
                {/*<td id="candidate-row-td" className="align-center-table">*/}
                {/*    <Btn_More/>*/}
                {/*</td>*/}
            </tr>
        );
    }
}