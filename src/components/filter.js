import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

export default function CheckboxLabels() {
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
        // colll for fixed
        <div className="container">
            {/*///////////////-----------////////////////////Категорія//////////-----------/////////////////////*/}
            <div className="row">
                <div className="col-12 no-gutters">
                    <p className="filter-text cat-filter">Категорія</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 no-gutters">
                    <div className="row">
                        <div className="col-12 pad-filter">
                            {/*<FormControl>*/}
                            {/*    <NativeSelect*/}
                            {/*        value={state.age}*/}
                            {/*        onChange={handleChange_cat('age')}*/}
                            {/*        id="filter-category-material-ui"*/}
                            {/*        name="age"*/}
                            {/*        inputProps={{ 'aria-label': 'age' }}*/}
                            {/*    >*/}
                            {/*        <option value="">Всі категорії</option>*/}
                            {/*        <option value={10}>Аудит</option>*/}
                            {/*        <option value={20}>Логістика</option>*/}
                            {/*        <option value={30}>Менеджемент</option>*/}
                            {/*        <option value={40}>Маркетинг</option>*/}
                            {/*        <option value={50}>Облік</option>*/}
                            {/*        <option value={60}>Аналітика</option>*/}
                            {/*        <option value={70}>Копірайтинг</option>*/}
                            {/*    </NativeSelect>*/}
                            {/*    <FormHelperText>With visually hidden label</FormHelperText>*/}
                            {/*</FormControl>*/}
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
                            <form>
                                <div className="form-group row">
                                    <label htmlFor="inputPassword" className="col-2 col-form-label salary-filter">Від</label>
                                    <div className="col-5 no-gutters">
                                        <input type="text" className="form-control salary-text-filter" id="inputPassword"/>
                                    </div>
                                    <label htmlFor="inputPassword" className="col-2 col-form-label salary-filter-grn">грн</label>
                                </div>
                            </form>
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