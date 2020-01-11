import React from "react";
import Btn_More from "./button_more";
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

export default class Vac_Row extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vacancy: '',
            status: '',
        }
        this.handleChange_status = this.handleChange_status.bind(this);
        this.handleChange_vacancy = this.handleChange_vacancy.bind(this);
        // this.changeNotActive = this.changeNotActive.bind(this);
        // this.changeActive = this.changeActive.bind(this);
    }

    handleChange_status = (status) => event => {
        this.setState({ [status]: event.target.value,});
    };

    handleChange_vacancy = (vacancy) => event => {
        this.setState({ [vacancy]: event.target.value,});
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
            <tr>
                <th className="class1" id="id-active" scope="row">{this.props.number}</th>
                <td id="vacancy-row-td">
                    <a href="#" className="class2" id="table-employer-link">{this.props.title}</a>
                </td>
                <td className="class3" id="vacancy-row-td">{this.props.location}</td>
                <td id="vacancy-row-td">
                    <a href="#" className="class4" id="table-employer-link">{this.props.applicants}</a>
                </td>
                <td id="vacancy-row-td" className="class5">
                    <FormControl>
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
                            <MenuItem value={1} id="all-cat-select" onClick={this.changeNotActive}>
                                {/*<button className="change-status-btn" onClick={this.changeNotActive}>*/}
                                    <div className="not-active-status"></div>
                                    Неактивна
                                {/*</button>*/}
                            </MenuItem>
                        </Select>
                    </FormControl>
                </td>
                <td className="class6" id="vacancy-row-td">{this.props.date}</td>
                <td id="vacancy-row-td" className="align-center-table">
                    <Btn_More/>
                </td>
            </tr>
        );
    }
}