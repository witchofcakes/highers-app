import React from "react";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: 'white',
        color: '#212529',
        boxShadow: theme.shadows[1],
        fontSize: 11.5,
        letterSpacing: '0.4px'
    },
}))(Tooltip);


export default class Cand_Row extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            faculty: this.props.faculty,
            course: this.props.course,
            english: this.props.english,
            salary: this.props.salary,
            workType: this.props.workType,
            surname: this.props.surname,
            status: '',
        }
        this.handleChange_status = this.handleChange_status.bind(this);
    }

    handleChange_status = (name) => event => {
        this.setState({ [name]: event.target.value,});
    };


    render() {

        return (

            <TableRow key={this.props.number}>
                <TableCell component="th" scope="row">
                    {this.props.number}
                </TableCell>
                <TableCell className="cand-row-name" align="left">
                    <a target="_blank" href="#" className="cand-row-link">
                        <p className="td-margin">{this.props.surname}</p>
                        <p className="td-margin">{this.props.name}</p>
                    </a>
                </TableCell>
                <TableCell className="cand-row-vacancy" align="left">
                    <a target="_blank" href="/employer-vacancy" className="cand-row-link"><p className="td-margin">{this.props.vacancy}</p></a>
                </TableCell>
                <TableCell className="cand-row-education" align="left">
                    <p className="td-margin">{this.props.university}</p>
                    <p className="td-margin">{this.props.faculty}</p>
                    <p className="td-margin">{this.props.course} курс</p>
                </TableCell>
                <TableCell className="cand-row-languages" align="left">
                    <LightTooltip title="Англійська">
                        <p className="td-margin">{this.props.english}</p>
                    </LightTooltip>
                    <LightTooltip title="Китайська">
                        <p className="td-margin">{this.props.languages}</p>
                    </LightTooltip>
                </TableCell>
                <TableCell className="cand-row-contacts" align="left">
                    <p className="td-margin">{this.props.contacts}</p>
                </TableCell>
                <TableCell className="cand-row-type" align="left">
                    <p className="td-margin">{this.props.salary} грн</p>
                    <p className="td-margin">{this.props.workType}</p>
                </TableCell>
                <TableCell align="center">
                    {(() => {
                        if (this.props.cv=="true"){
                        return (
                        <button className="resume-button-employer"><p className="td-margin">
                            <svg xmlns="http://www.w3.org/2000/svg" className="feather-cv-2" viewBox="-53 1 511 511.99906">
                                <path d="M 276.410156 3.957031 C 274.0625 1.484375 270.84375 0 267.507812 0 L 67.777344 0 C 30.921875 0 0.5 30.300781 0.5 67.152344 L 0.5 444.84375 C 0.5 481.699219 30.921875 512 67.777344 512 L 338.863281 512 C 375.71875 512 406.140625 481.699219 406.140625 444.84375 L 406.140625 144.941406 C 406.140625 141.726562 404.65625 138.636719 402.554688 136.285156 Z M 279.996094 43.65625 L 364.464844 132.328125 L 309.554688 132.328125 C 293.230469 132.328125 279.996094 119.21875 279.996094 102.894531 Z M 338.863281 487.265625 L 67.777344 487.265625 C 44.652344 487.265625 25.234375 468.097656 25.234375 444.84375 L 25.234375 67.152344 C 25.234375 44.027344 44.527344 24.734375 67.777344 24.734375 L 255.261719 24.734375 L 255.261719 102.894531 C 255.261719 132.945312 279.503906 157.0625 309.554688 157.0625 L 381.40625 157.0625 L 381.40625 444.84375 C 381.40625 468.097656 362.113281 487.265625 338.863281 487.265625 Z M 338.863281 487.265625 " />
                                <path d="M 305.101562 401.933594 L 101.539062 401.933594 C 94.738281 401.933594 89.171875 407.496094 89.171875 414.300781 C 89.171875 421.101562 94.738281 426.667969 101.539062 426.667969 L 305.226562 426.667969 C 312.027344 426.667969 317.59375 421.101562 317.59375 414.300781 C 317.59375 407.496094 312.027344 401.933594 305.101562 401.933594 Z M 305.101562 401.933594 " />
                                <path d="M 194.292969 357.535156 C 196.644531 360.007812 199.859375 361.492188 203.320312 361.492188 C 206.785156 361.492188 210 360.007812 212.347656 357.535156 L 284.820312 279.746094 C 289.519531 274.796875 289.148438 266.882812 284.203125 262.308594 C 279.253906 257.609375 271.339844 257.976562 266.765625 262.925781 L 215.6875 317.710938 L 215.6875 182.664062 C 215.6875 175.859375 210.121094 170.296875 203.320312 170.296875 C 196.519531 170.296875 190.953125 175.859375 190.953125 182.664062 L 190.953125 317.710938 L 140 262.925781 C 135.300781 257.980469 127.507812 257.609375 122.5625 262.308594 C 117.617188 267.007812 117.246094 274.800781 121.945312 279.746094 Z M 194.292969 357.535156 " />
                            </svg>
                        </p></button>
                        );
                      }
                        else{
                        return (
                            <div>
                            </div>
                        );
                      }
                    })()}
                </TableCell>
                <TableCell align="left">
                    <FormControl id="select-status-icon">
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
                </TableCell>
                <TableCell className="cand-row-date" align="left">
                    <p className="td-margin">{this.props.date}</p>
                </TableCell>
            </TableRow>

        );
    }
}