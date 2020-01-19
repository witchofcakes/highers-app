import React from "react";
import ReactDOM from "react-dom";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ExpandMoreRoundedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import MenuItem from "@material-ui/core/MenuItem";

function Level_Select() {
    const [state, setState] = React.useState({
        level: ''
    });

    const handleChange_level = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (

        <FormControl id="course-select-level-form">
            <Select value={state.level}
                    onChange={handleChange_level('level')}
                    displayEmpty id="course-select-level"
                    IconComponent = {ExpandMoreRoundedIcon}
            >
                <MenuItem value="" disabled id="all-cat-select">
                    <p className="course-placeholder">Рівень мови</p>
                </MenuItem>
                <MenuItem value={1} id="all-cat-select">A1 - базовий</MenuItem>
                <MenuItem value={2} id="all-cat-select">A2 - початковий</MenuItem>
                <MenuItem value={3} id="all-cat-select">B1 - середній</MenuItem>
                <MenuItem value={4} id="all-cat-select">B2 - вище середнього</MenuItem>
                <MenuItem value={5} id="all-cat-select">C1 - високий</MenuItem>
                <MenuItem value={6} id="all-cat-select">C2 - носій мови</MenuItem>
            </Select>
        </FormControl>
    );
}

export default class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            shareholders: [{ name: "" }]
        };
    }

    handleNameChange = evt => {
        this.setState({ name: evt.target.value });
    };

    handleShareholderNameChange = idx => evt => {
        const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
            if (idx !== sidx) return shareholder;
            return { ...shareholder, name: evt.target.value };
        });

        this.setState({ shareholders: newShareholders });
    };

    handleAddShareholder = () => {
        this.setState({
            shareholders: this.state.shareholders.concat([{ name: "" }])
        });
    };

    handleRemoveShareholder = idx => () => {
        this.setState({
            shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
        });
    };

    render() {
        return (
            <form>
                {this.state.shareholders.map((shareholder, idx) => (
                    <div className="shareholder">
                        <input
                            type="text"
                            placeholder="Мови"
                            onChange={this.handleShareholderNameChange(idx)}
                        />
                        <Level_Select/>
                        <button
                            type="button"
                            onClick={this.handleRemoveShareholder(idx)}
                            className="small"
                        >
                            -
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={this.handleAddShareholder}
                    className="small"
                >
                    Add Shareholder
                </button>
            </form>
        );
    }
}

