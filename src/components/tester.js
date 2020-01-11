import React from "react";
import Btn_More from "./button_more";
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

export default class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: '',
            activeState: true
        }
        this.handleChange_status = this.handleChange_status.bind(this);
        this.changeNotActive = this.changeNotActive.bind(this);
        this.changeActive = this.changeActive.bind(this);
    }

    handleChange_status = (name) => event => {
        this.setState({ [name]: event.target.value,});
    };

    changeNotActive(){
        document.querySelectorAll('.class1, .class2, .class3')
            .forEach(el => el.classList.add('not-active'))
    }

    changeActive(){
        document.querySelectorAll('.class1, .class2, .class3')
            .forEach(el => el.classList.remove('not-active'))
    }

    render() {

        return (
            <tr>
                <th className="class1" id="id-active" scope="row">8</th>
                <td className="class2" id="vacancy-row-td">
                    <a href="#" id="table-employer-link">hello</a>
                </td>
                <td className="class3" id="vacancy-row-td">this</td>
                <td id="vacancy-row-td-3">
                    <a href="#" id="table-employer-link">should</a>
                </td>
                <td id="vacancy-row-td">
                    <FormControl>
                        <Select value={this.state.status} onChange={this.handleChange_status('status')} displayEmpty id="select-status">
                            <MenuItem value="" id="all-cat-select">
                                <button onClick={this.changeActive}>
                                    <div className="active-status"></div>
                                    Активна
                                </button>
                            </MenuItem>
                            <MenuItem value={1} id="all-cat-select">
                                <button onClick={this.changeNotActive}>
                                    <div className="not-active-status"></div>
                                    Неактивна
                                </button>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </td>
                <td id="vacancy-row-td">be</td>
                <td id="vacancy-row-td" className="align-center-table">
                    <Btn_More/>
                </td>
            </tr>
        );
    }
}