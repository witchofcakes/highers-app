import React from "react";
import Btn_More from "./button_more";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}))(Tooltip);


export default class Cand_Row_Vac extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: '',
        }
        this.handleChange_status = this.handleChange_status.bind(this);
    }

    handleChange_status = (name) => event => {
        this.setState({ [name]: event.target.value,});
    };


    render() {

        return (
            <tr>
                <th scope="row">{this.props.number}</th>
                <td>
                    <p className="td-margin-name-width">
                        <a href="#" id="table-employer-link" className={this.props.active}>
                            {this.props.surname}
                        </a>
                    </p>
                    <p className="td-margin-name-width"><a href="#" id="table-employer-link" className={this.props.active}>{this.props.name}</a></p>
                </td>
                {/*<td id="candidate-row-td-ellipsis-vacancy">*/}
                {/*    <a href="#" id="table-employer-link">{this.props.vacancy}</a>*/}
                {/*</td>*/}
                <td id="candidate-row-td-ellipsis-education">
                    <p className="td-margin">{this.props.university}</p>
                    <p className="td-margin">{this.props.faculty}</p>
                    <p className="td-margin">{this.props.course} курс</p>
                </td>
                <td id="candidate-row-td-ellipsis">
                    <LightTooltip title="Англійська">
                        <p className="td-margin">Англ - {this.props.english}</p>
                    </LightTooltip>
                    <LightTooltip title="Китайська">
                        <p className="td-margin">{this.props.languages}</p>
                    </LightTooltip>
                </td>
                <td id="candidate-row-td">
                    <a href="#" id="table-employer-link">{this.props.contacts}</a>
                </td>
                <td>
                    <p className="td-margin-type-work">{this.props.salary} грн</p>
                    <p className="td-margin-type-work">{this.props.workType}</p>
                </td>
                <td id="candidate-row-td-ellipsis-status">
                    <FormControl>
                        <Select value={this.state.status}
                                onChange={this.handleChange_status('status')}
                                displayEmpty id="select-status"
                                IconComponent = {ExpandMoreRoundedIcon}
                        >
                            <MenuItem value="" id="all-cat-select">
                                <div className="new-status"></div>
                                Новий
                            </MenuItem>
                            <MenuItem value={1} id="all-cat-select">
                                <div className="test-status"></div>
                                Тест
                            </MenuItem>
                            <MenuItem value={2} id="all-cat-select">
                                <div className="interview-status"></div>
                                Співбесіда
                            </MenuItem>
                            <MenuItem value={3} id="all-cat-select">
                                <div className="accepted-status"></div>
                                Прийнятий
                            </MenuItem>
                            <MenuItem value={4} id="all-cat-select">
                                <div className="decline-status"></div>
                                Відмова
                            </MenuItem>
                        </Select>
                    </FormControl>
                </td>
                <td id="candidate-row-td-ellipsis-date">{this.props.date}</td>
            </tr>
        );
    }
}