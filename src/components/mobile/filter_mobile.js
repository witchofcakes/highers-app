import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";

function SalaryFilter(){
    const [values, setValues] = React.useState({
        salary: '',
    });

    const handleChangeSalary = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <FormControl className="salary-filter-form-mobile" variant="outlined">
            <OutlinedInput
                className="salary-filter-input"
                value={values.salary}
                onChange={handleChangeSalary('salary')}
                startAdornment={<InputAdornment position="end">від</InputAdornment>}
                endAdornment={<InputAdornment position="end">грн</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                    'aria-label': 'salary',
                }}
                placeholder="2000"
                labelWidth={0}
            />
        </FormControl>
    );
}

export default function Filter_Mobile() {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        age: '',
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const handleChange_cat = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 no-gutters">
                    <p className="filter-text cat-filter">Категорія</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 no-gutters">
                    <div className="row">
                        <div className="col-12 pad-filter">
                            <FormControl id="course-select-course-form">
                                <Select value={state.age}
                                        IconComponent = {ExpandMoreRoundedIcon}
                                        onChange={handleChange_cat('age')}
                                        displayEmpty
                                        id="filter-category-material-ui">
                                    <MenuItem value="" id="all-cat-select">Всі категорії</MenuItem>
                                    <MenuItem value={1} id="all-cat-select">Аудит</MenuItem>
                                    <MenuItem value={2} id="all-cat-select">Аналітика</MenuItem>
                                    <MenuItem value={3} id="all-cat-select">Копірайтинг</MenuItem>
                                    <MenuItem value={4} id="all-cat-select">Логістика</MenuItem>
                                    <MenuItem value={5} id="all-cat-select">Менеджемент</MenuItem>
                                    <MenuItem value={6} id="all-cat-select">Маркетинг</MenuItem>
                                    <MenuItem value={7} id="all-cat-select">Облік</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
            </div>
            {/*///////////////////////////////////////////Вид зайнятості////////////////////////////////////////*/}
            <div className="row">
                <div className="col-12 no-gutters">
                    <p className="filter-text categ-filter">Вид зайнятості</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 no-gutters">
                    <div className="row">
                        <div className="col-12 pad-filter">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={state.checkedA}
                                        onChange={handleChange('checkedA')}
                                        value="checkedA"
                                        color="primary"
                                        className="checkbox-filter"
                                    />
                                }
                                label="Full-time"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 pad-filter">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={state.checkedB}
                                        onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Part-time"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 pad-filter">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={state.checkedC}
                                        onChange={handleChange('checkedC')}
                                        value="checkedC"
                                        color="primary"
                                    />
                                }
                                label="Стажування"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 pad-filter">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={state.checkedD}
                                        onChange={handleChange('checkedD')}
                                        value="checkedD"
                                        color="primary"
                                    />
                                }
                                label="Віддалено"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/*///////////////-----------////////////////////Зарплатня//////////-----------/////////////////////*/}
            <div className="row">
                <div className="col-12 no-gutters">
                    <p className="filter-text sal-filter">Зарплатня</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 no-gutters">
                    <div className="row">
                        <div className="col-12 pad-filter">
                            <SalaryFilter/>
                        </div>
                    </div>
                </div>
            </div>
            {/*///////////////-----------////////////////////Зарплатня//////////-----------/////////////////////*/}
            <div className="row">
                <div className="col-12 no-gutters">
                    <button className="button-ok-filter">Застосувати</button>
                </div>
            </div>
        </div>
    );
}