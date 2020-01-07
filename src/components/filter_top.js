import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import ListSubheader from '@material-ui/core/ListSubheader';
import search from "../images/search_2.svg";

export default function Filter_Top() {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        age: '',
        money: '',
    });

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const names = [
        'Full-time',
        'Part-time',
        'Стажування',
        'Віддалено',
    ];

        const [personName, setPersonName] = React.useState([]);

        const handleChangeType = event => {
            setPersonName(event.target.value);
        };

        const handleChangeMultiple = event => {
            const { options } = event.target;
            const value = [];
            for (let i = 0, l = options.length; i < l; i += 1) {
                if (options[i].selected) {
                    value.push(options[i].value);
                }
            }
            setPersonName(value);
        };

    const handleChange_cat = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const handleChange = prop => event => {
        setState({ ...state, [prop]: event.target.value });
    };

    return (
        // colll for fixed
                    <div className="row row-filter ml-auto">
                        {/*<form className="form-inline my-2 my-lg-0">*/}
                        {/*    <input className="form-control search-field-top" type="search" placeholder="Пошук" aria-label="Пошук"/>*/}
                        {/*        <button className="search-field-top-but my-2 my-sm-0" type="submit">*/}
                        {/*            <img src={search} className="search-but-filter-top"/>*/}
                        {/*        </button>*/}
                        {/*</form>*/}

                        <div>
                            <FormControl>
                                <Select value={state.age} onChange={handleChange_cat('age')} displayEmpty id="all-cat-filter-top">
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

                    <div>
                        <FormControl>
                            {/*<InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>*/}
                            <Select
                                labelId="demo-mutiple-checkbox-label"
                                id="type-filter-top"
                                multiple
                                displayEmpty
                                value={personName}
                                onChange={handleChangeType}
                                input={<Input />}
                                renderValue={selected => {
                                    if (selected.length === 0) {
                                        return <span>Вид зайнятості</span>;
                                    }

                                    return selected.join(', ');
                                }}
                                MenuProps={MenuProps}
                            >
                                {names.map(name => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox id="checkbox" checked={personName.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                        <div>
                            <FormControl>
                                <Select
                                    labelId="demo-mutiple-checkbox-label"
                                    id="type-filter-top"
                                    multiple
                                    displayEmpty
                                    value={personName}
                                    onChange={handleChangeType}
                                    input={<Input />}
                                    renderValue={selected => {
                                        if (selected.length === 0) {
                                            return <span>Зарплатня</span>;
                                        }

                                        return selected.join(', ');
                                    }}
                                    MenuProps={MenuProps}
                                >
                                    {names.map(name => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox id="checkbox" checked={personName.indexOf(name) > -1} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <button className="button-top-filter">Застосувати</button>
                        </div>

                    </div>

    );
}