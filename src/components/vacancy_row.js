import React from "react";
import Btn_More from "./button_more";
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {withStyles} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: 'white',
        color: '#212529',
        boxShadow: theme.shadows[1],
        fontSize: 11.5,
        letterSpacing: '0.4px'
    },
}))(Tooltip);

export default class Vac_Row extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vacancy: '',
            status: '',
            priority: '',
            applicants: this.props.applicants
        }
        this.handleChange_status = this.handleChange_status.bind(this);
        this.handleChange_vacancy = this.handleChange_vacancy.bind(this);
        this.handleChange_priority = this.handleChange_priority.bind(this);
        // this.changeNotActive = this.changeNotActive.bind(this);
        // this.changeActive = this.changeActive.bind(this);
    }

    handleChange_status = (status) => event => {
        this.setState({ [status]: event.target.value,});
    };

    handleChange_vacancy = (vacancy) => event => {
        this.setState({ [vacancy]: event.target.value,});
    };

    handleChange_priority = (priority) => event => {
        this.setState({ [priority]: event.target.value,});
    };

    // changeNotActive(){
    //     document.querySelectorAll('.class1, .class2, .class3, .class4, .class5, .class6')
    //         .forEach(el => el.classList.add('not-active'))
    // }
    //
    // changeActive(){
    //     document.querySelectorAll('.class1, .class2, .class3, .class4, .class5, .class6')
    //         .forEach(el => el.classList.remove('not-active'))
    // }


    render() {

        return (

                <TableRow key={this.props.number}>
                    <TableCell component="th" scope="row">
                        {this.props.number}
                    </TableCell>
                    <TableCell className="vac-row-title" align="left">
                        <a href="/employer-vacancy" className="cand-row-link">
                            <p className="td-margin">{this.props.title}</p>
                        </a>
                    </TableCell>
                    <TableCell align="left">
                        <FormControl id="select-status-icon">
                            <Select
                                value={this.state.priority}
                                onChange={this.handleChange_priority('priority')}
                                displayEmpty id="select-status-vacancy"
                                IconComponent = {ExpandMoreRoundedIcon}
                            >
                                <MenuItem value="" id="all-cat-select">
                                    <div className="high-priority"></div>
                                    Високий
                                </MenuItem>
                                <MenuItem value={1} id="all-cat-select">
                                    <div className="medium-priority"></div>
                                    Середній
                                </MenuItem>
                                <MenuItem value={2} id="all-cat-select">
                                    <div className="low-priority"></div>
                                    Низький
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell className="vac-row-location" align="left">
                        <p className="td-margin">{this.props.location}</p>
                    </TableCell>
                    <TableCell className="vac-row-applicants" align="center">
                        <a target="_blank" href="/employer-vacancy" className="cand-row-link">
                            <p className="td-margin">{this.props.applicants}</p>
                        </a>
                    </TableCell>
                    <TableCell className="vac-row-type" align="left">
                        <p className="td-margin">{this.props.salary} грн</p>
                        <p className="td-margin">{this.props.workType}</p>
                    </TableCell>
                    <TableCell className="vac-row-education" align="left">
                        <p className="td-margin">{this.props.faculty}</p>
                        <p className="td-margin">{this.props.course} курс</p>
                    </TableCell>
                    <TableCell className="vac-row-languages" align="left">
                        <LightTooltip title="Англійська">
                            <p className="td-margin">{this.props.english}</p>
                        </LightTooltip>
                        <LightTooltip title="Китайська">
                            <p className="td-margin">{this.props.languages}</p>
                        </LightTooltip>
                    </TableCell>
                    <TableCell align="left">
                        <FormControl id="select-status-icon">
                            <Select
                                value={this.state.status}
                                onChange={this.handleChange_status('status')}
                                displayEmpty id="select-status-vacancy"
                                IconComponent = {ExpandMoreRoundedIcon}
                            >
                                <MenuItem value="" id="all-cat-select">
                                    {/*<button className="change-status-btn" onClick={this.changeActive}>*/}
                                    <div className="active-status"></div>
                                        Активна
                                    {/*</button>*/}
                                </MenuItem>
                                <MenuItem value={1} id="all-cat-select">
                                    {/*<button className="change-status-btn" onClick={this.changeNotActive}>*/}
                                    <div className="not-active-status"></div>
                                    Неактивна
                                    {/*</button>*/}
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell className="vac-row-date" align="left">
                        <p className="td-margin">{this.props.date}</p>
                    </TableCell>
                    <TableCell className="vac-row-more" align="center">
                        <Btn_More/>
                    </TableCell>
                </TableRow>


        );
    }
}