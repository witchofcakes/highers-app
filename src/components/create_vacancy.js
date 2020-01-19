import React from "react";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import SideBar from "./sidebar";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Text_Editor from "./text_editor";
import Chip from "@material-ui/core/Chip";
import Paper from '@material-ui/core/Paper';
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import Tooltip from "@material-ui/core/Tooltip";
import Upload_Profile from "./upload_profile";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../images/avatar.jpeg";
import Upload_Company from "./upload_profile_company";

const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: 'white',
        color: '#212529',
        boxShadow: theme.shadows[1],
        fontSize: 11.5,
        letterSpacing: '0.4px'
    },
}))(Tooltip);

function ChooseWorkType() {
    const [value, setValue] = React.useState('Full-time');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <div>
            <RadioGroup aria-label="position" id="mui-worktype" name="position" value={value} onChange={handleChange} row>
                <FormControlLabel
                    value="Full-time"
                    id="radio-box-black"
                    control={<Radio color={"primary"}/>}
                    label="Full-time"
                    labelPlacement="end"
                    className="col-4"
                />
                <FormControlLabel
                    value="Part-time"
                    id="radio-box-black"
                    control={<Radio color={"primary"}/>}
                    label="Part-time"
                    labelPlacement="end"
                    className="col-4"
                />
                <FormControlLabel
                    value="Full / Part-time"
                    id="radio-box-black"
                    control={<Radio color={"primary"}/>}
                    label="Full / Part-time"
                    labelPlacement="end"
                    className="col-4"
                />
            </RadioGroup>
            <RadioGroup aria-label="position" id="mui-worktype" name="position" value={value} onChange={handleChange} row>
                <FormControlLabel
                    value="Стажування"
                    id="radio-box-black"
                    control={<Radio color={"primary"}/>}
                    label="Стажування"
                    labelPlacement="end"
                    className="col-4"
                />
                <FormControlLabel
                    value="Віддалено"
                    control={<Radio color={"primary"}/>}
                    label="Віддалено"
                    labelPlacement="end"
                    className="col-4"
                />
            </RadioGroup>
        </div>


    );
}

function Course_Select() {
    const [state, setState] = React.useState({
        course: ''
    });

    const handleChange_course = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (

        <FormControl id="course-select-course-form">
            <Select value={state.course}
                    onChange={handleChange_course('course')}
                    displayEmpty id="course-select-course"
                    IconComponent = {ExpandMoreRoundedIcon}
            >
                <MenuItem value="" disabled id="all-cat-select">
                    <p className="course-placeholder">Курс</p>
                </MenuItem>
                <MenuItem value={1} id="all-cat-select">1+</MenuItem>
                <MenuItem value={2} id="all-cat-select">2+</MenuItem>
                <MenuItem value={3} id="all-cat-select">3+</MenuItem>
                <MenuItem value={4} id="all-cat-select">4+</MenuItem>
                <MenuItem value={5} id="all-cat-select">5+</MenuItem>
                <MenuItem value={6} id="all-cat-select">6+</MenuItem>
            </Select>
        </FormControl>
    );
}

function Education_Select() {
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
        'Менеджемент',
        'Маркетинг',
        'Аудит',
        'Фінанси',
    ];

    const [personName, setPersonName] = React.useState([]);

    const handleChangeType = event => {
        setPersonName(event.target.value);
    };

    return (
        <FormControl id="course-select-course-form">
            <Select
                labelId="type-filter-top"
                id="course-select-education"
                multiple
                displayEmpty
                value={personName}
                onChange={handleChangeType}
                input={<Input />}
                IconComponent = {ExpandMoreRoundedIcon}
                renderValue={selected => {
                    if (selected.length === 0) {
                        return <p className="course-placeholder">Спеціалізація</p>;
                    }

                    return selected.join(', ');
                }}
                MenuProps={MenuProps}
            >
                {names.map(name => (
                    <MenuItem key={name} value={name} id="all-cat-select">
                        <Checkbox id="checkbox" checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

function Skills_Select() {
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
        'MS Office',
        'Бухоблік',
    ];

    const [personName, setPersonName] = React.useState([]);

    const handleChangeType = event => {
        setPersonName(event.target.value);
    };

    return (
        <FormControl id="course-select-course-form">
            <Select
                labelId="type-filter-top"
                id="course-select-skills"
                multiple
                displayEmpty
                value={personName}
                onChange={handleChangeType}
                IconComponent = {ExpandMoreRoundedIcon}
                input={<Input />}
                renderValue={selected => {
                    if (selected.length === 0) {
                        return <p className="course-placeholder">Навички</p>;
                    }

                    return selected.join(', ');
                }}
                MenuProps={MenuProps}
            >
                {names.map(name => (
                    <MenuItem key={name} value={name} id="all-cat-select">
                        <Checkbox id="checkbox" checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

function ChooseEnglish() {
    const [state, setState] = React.useState({
        levelEng: '',
        click: 'A1',
    });

    const handleClickEng = name => event => {
        console.log("begin " + name)
        setState({
            ...state,
            [name]: event.target.value,
        });

        var eng1 = document.getElementById(state.click);
        eng1.setAttribute('style', 'border: ' + '1px solid #ebebec');
        setState({
            ...state,
            click: name,
        });

        var eng = document.getElementById(name);
        eng.setAttribute('style', 'border: ' + '1px solid #212529 !important');
        setState({
            ...state,
            click: name,
        });

    };

    return (
        <div className="col-12">
            <LightTooltip title="А1 - початковий">
                <Chip
                    label="A1"
                    onClick={handleClickEng("A1")}
                    variant="outlined"
                    id="A1"
                    className="col-2 A1"
                />
            </LightTooltip>
            <LightTooltip title="A2 - базовий">
                <Chip
                    label="A2"
                    onClick={handleClickEng("A2")}
                    variant="outlined"
                    id="A2"
                    className="col-2 A2"
                />
            </LightTooltip>
            <LightTooltip title="B1 - середній">
                <Chip
                    label="B1"
                    onClick={handleClickEng("B1")}
                    variant="outlined"
                    id="B1"
                    className="col-2 B1"
                />
            </LightTooltip>
            <LightTooltip title="B2 - вище середнього">
                <Chip
                    label="B2"
                    onClick={handleClickEng("B2")}
                    variant="outlined"
                    id="B2"
                    className="col-2 B2"
                />
            </LightTooltip>
            <LightTooltip title="C1 - високий">
                <Chip
                    label="C1"
                    onClick={handleClickEng("C1")}
                    variant="outlined"
                    id="C1"
                    className="col-2 C1"
                />
            </LightTooltip>
            <LightTooltip title="C2 - носій мови">
                <Chip
                    label="C2"
                    onClick={handleClickEng("C2")}
                    variant="outlined"
                    id="C2"
                    className="col-2 C2"
                />
            </LightTooltip>
        </div>
    );
}


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
                    displayEmpty id="course-select-level-create"
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

export default class Create_Vac extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            display: true,
            value: 'Estimate',
            activeStep: 0,
            name: "",
            shareholders: [{ name: "" }]
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleChange_salary=this.handleChange_salary.bind(this);
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

    getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <div>
                        <div className="title-vac-div">
                            <div className="col-8 no-gutters create-vac-input-name-title">
                                Назва
                                <div className="required-mark">*</div>
                            </div>
                            <div className="col-8 no-gutters">
                                <input type="text" className="create-vac-input" placeholder="Назва вакансії" aria-label="Назва вакансії"/>
                            </div>
                        </div>
                        <div className="title-vac-div">
                            <div className="col-8 no-gutters create-vac-input-name">
                                Локація роботи
                            </div>
                            <div className="row">
                                <div className="col-4 column-city no-gutters">
                                    <p className="create-vac-input-name-sm">
                                        Місто
                                        <div className="required-mark">*</div>
                                    </p>
                                    <input type="text" className="create-vac-input-city bottom-create" placeholder="Місто" aria-label="Місто"/>
                                </div>
                                <div className="col-4 column-street no-gutters">
                                    <p className="create-vac-input-name-sm-street">Вулиця</p>
                                    <input type="text" className="create-vac-input-street bottom-create" placeholder="Вулиця" aria-label="Вулиця"/>
                                </div>
                            </div>
                        </div>
                        <div className="title-vac-div">
                            <div>
                                <div className="col-8 no-gutters create-vac-input-name-type">
                                    Зайнятість
                                    <div className="required-mark">*</div>
                                </div>
                            </div>
                            <div>
                                <div className="col-8 col-for-margin no-gutters">
                                    <ChooseWorkType/>
                                </div>
                            </div>
                        </div>
                        <div className="title-vac-div">
                            <div className="col-8 no-gutters create-vac-input-name">
                                Освіта
                            </div>
                            <div className="row">
                                <div className="col-2 column-city no-gutters">
                                    <p className="create-vac-input-name-sm">
                                        Курс
                                        <div className="required-mark">*</div>
                                    </p>
                                    <Course_Select/>
                                </div>
                                <div className="col-2 column-street no-gutters">
                                    <p className="create-vac-input-name-sm-2">
                                        Спеціалізація
                                        <div className="required-mark">*</div>
                                    </p>
                                    <Education_Select/>
                                </div>
                                <div className="col-2 column-street no-gutters">
                                    <p className="create-vac-input-name-sm-3">
                                        Навички
                                        <div className="required-mark">*</div>
                                    </p>
                                    <Skills_Select/>
                                </div>
                            </div>
                        </div>
                        <div className="title-vac-div">
                            <div className="col-8 no-gutters create-vac-input-name-title-2">
                                Мови
                            </div>
                            <div className="col-8 no-gutters">
                                <div className="row">
                                    <div className="col-12 column-city no-gutters">
                                        <p className="create-vac-input-name-sm">
                                            Рівень <p className="eng-lang-bold">англійської</p> мови
                                        </p>
                                        <ChooseEnglish/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 column-city no-gutters">
                                        <p className="create-vac-input-name-sm">
                                            Інші іноземні мови
                                        </p>
                                        <div className="row">
                                            <div className="col-6 no-gutters column-city">
                                                <input type="text" className="create-vac-input-lang-2 bottom-create-apply" placeholder="Мова" aria-label="Місто"/>
                                            </div>
                                            <div className="col-4 column-level">
                                                <Level_Select/>
                                            </div>
                                            <div className="col-2 column-button-add">

                                            </div>
                                        </div>

                                            {this.state.shareholders.map((shareholder, idx) => (
                                                <div className="row">
                                                    <div className="col-6 no-gutters column-city">
                                                        <input type="text" onChange={this.handleShareholderNameChange(idx)} className="create-vac-input-lang-2 bottom-create-apply" placeholder="Мова" aria-label="Місто"/>
                                                    </div>
                                                    <div className="col-4 column-level">
                                                        <Level_Select/>
                                                    </div>
                                                    <div className="col-2 no-gutters column-level">
                                                    <button
                                                        type="button"
                                                        onClick={this.handleRemoveShareholder(idx)}
                                                        className="add-button-lang-delete"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-x-create">
                                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                                        </svg>
                                                    </button>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="column-button-add">
                                                <button onClick={this.handleAddShareholder} className="add-button-lang">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-plus-circle-create">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="12" y1="8" x2="12" y2="16"></line>
                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                    </svg>
                                                    <p className="add-more-text">Додати більше мов</p>
                                                </button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="title-vac-div">
                            <div className="col-8 no-gutters create-vac-input-name-salary">
                                Зарплатня
                            </div>

                            {(() => {
                                if (this.state.value=="Estimate"){
                                    return (
                                        <div className="col-8 col-for-margin-sal no-gutters">
                                            <div className="salary-create-vac-vid">від</div>
                                            <input type="text" className="create-vac-input-salary" placeholder="Зарплатня" aria-label="Зарплатня"/>
                                            <div className="salary-create-vac">грн</div>
                                        </div>
                                    );
                                }
                                else if (this.state.value=="Precise"){
                                    return (
                                        <div className="col-8 col-for-margin-sal no-gutters">
                                            <input type="text" className="create-vac-input-salary" placeholder="Зарплатня" aria-label="Зарплатня"/>
                                            <div className="salary-create-vac">грн</div>
                                        </div>

                                    );
                                }
                            })()}

                            <div className="col-8 no-gutters">
                                <FormControl component="fieldset">
                                    <RadioGroup aria-label="position" name="position" id="mui-salary" value={this.state.value} onChange={this.handleChange_salary} row>
                                        <FormControlLabel
                                            value="Estimate"
                                            id="salary-choose-create"
                                            control={<Radio color={"primary"}/>}
                                            label="Приблизно"
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="Precise"
                                            id="salary-choose-create"
                                            control={<Radio color={"primary"}/>}
                                            label="Точно"
                                            labelPlacement="end"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="row row-expansion-panel-center">
                        <ExpansionPanel className="col-8 panel-create-vac-first">
                            <ExpansionPanelSummary
                                expandIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-chevron-down">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="panel-header">
                                    Кого ми шукаємо
                                    <div className="required-mark">*</div>
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                    <div className="col-12 no-gutters text-div-panel">
                                        Опишіть тут детальніше яку саме людину Ви шукаєте.
                                        З ким потрібно буде працювати, якого роду роботу виконувати, який результат Ви очікуєте.
                                    </div>
                                    <Text_Editor/>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <div className="col-8 separator"></div>
                        <ExpansionPanel className="col-8 panel-create-vac">
                            <ExpansionPanelSummary
                                expandIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-chevron-down">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="panel-header">
                                    Вимоги
                                    <div className="required-mark">*</div>
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div className="col-12 no-gutters text-div-panel">
                                    Опишіть тут детальніше яку саме людину Ви шукаєте.
                                    З ким потрібно буде працювати, якого роду роботу виконувати, який результат Ви очікуєте.
                                </div>
                                <Text_Editor/>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <div className="col-8 separator"></div>
                        <ExpansionPanel className="col-8 panel-create-vac">
                            <ExpansionPanelSummary
                                expandIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-chevron-down">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="panel-header">
                                    Графік роботи
                                    <div className="required-mark">*</div>
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div className="col-12 no-gutters text-div-panel">
                                    Опишіть тут детальніше яку саме людину Ви шукаєте.
                                    З ким потрібно буде працювати, якого роду роботу виконувати, який результат Ви очікуєте.
                                </div>
                                <Text_Editor/>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <div className="col-8 separator"></div>
                        <ExpansionPanel className="col-8 panel-create-vac">
                            <ExpansionPanelSummary
                                expandIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-chevron-down">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="panel-header">
                                    Задачі
                                    <div className="required-mark">*</div>
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div className="col-12 no-gutters text-div-panel">
                                    Опишіть тут детальніше яку саме людину Ви шукаєте.
                                    З ким потрібно буде працювати, якого роду роботу виконувати, який результат Ви очікуєте.
                                </div>
                                <Text_Editor/>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <div className="col-8 separator"></div>
                        <ExpansionPanel className="col-8 panel-create-vac">
                            <ExpansionPanelSummary
                                expandIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-chevron-down">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="panel-header">
                                    Від компанії
                                    <div className="required-mark">*</div>
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div className="col-12 no-gutters text-div-panel">
                                    Опишіть тут детальніше яку саме людину Ви шукаєте.
                                    З ким потрібно буде працювати, якого роду роботу виконувати, який результат Ви очікуєте.
                                </div>
                                <Text_Editor/>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <div className="col-8 separator-last"></div>
                    </div>
                );
            case 2:
                return (
                    <div className="row row-expansion-panel-center">
                        <ExpansionPanel className="col-8 panel-create-vac-first">
                            <ExpansionPanelSummary
                                expandIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-chevron-down">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="panel-header">
                                    Лого компанії
                                    <div className="required-mark">*</div>
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div className="col-12 no-gutters text-div-panel">
                                    Оберіть логотип компанії, який буде показаний на вакансії.
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        <Avatar src={avatar} className="avatar-picture-upload" />
                                    </div>
                                    <div className="col-10 no-gutters upload-picture">
                                        <Upload_Company/>
                                    </div>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <div className="col-8 separator"></div>
                        <ExpansionPanel className="col-8 panel-create-vac">
                            <ExpansionPanelSummary
                                expandIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-chevron-down">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="panel-header">
                                    Про компанію
                                    <div className="required-mark">*</div>
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div className="col-12 no-gutters text-div-panel">
                                    Даня, цей блок людина має заповнювати тільки один раз. Для усіх наступних вакансій,
                                    ця інфа має підтягуватись у текстовий редактор. Якщо людина захоче щось змінити, вона змінить тут,
                                    і інфа про компанію має оновитись.
                                </div>
                                <Text_Editor/>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <div className="col-8 separator"></div>
                        <ExpansionPanel className="col-8 panel-create-vac">
                            <ExpansionPanelSummary
                                expandIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-chevron-down">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="panel-header">
                                    Переваги компанії
                                    <div className="required-mark">*</div>
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div className="col-12 no-gutters text-div-panel">
                                    Опишіть тут детальніше яку саме людину Ви шукаєте.
                                    З ким потрібно буде працювати, якого роду роботу виконувати, який результат Ви очікуєте.
                                </div>
                                <Text_Editor/>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <div className="col-8 separator-last-company"></div>
                    </div>
                );
            case 3:
                return (
                        <div>
                            <div className="row row-vacancy-info-check">
                                <div className="col-8">
                                    <div className="row">
                                    <div className="col-5 no-gutters check-vacancy-create">Перевірте Вашу вакансію</div>
                                    <div className="col-7 no-gutters check-vacancy-create-btn-div">
                                        <Button
                                            id="publish-btn-stepper-top"
                                            variant="raised"
                                            color="primary"
                                            onClick={this.handleNext}
                                            endIcon={
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="feather-chevron-right-btn">
                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                </svg>
                                            }
                                        > Опублікувати </Button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        <div className="row row-vacancy-info-center">
                            <div className="col-8 no-gutters">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="vacancy-details-word">Деталі:</div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row details-row-margin">
                                                    <div className="col-12 ellipsis-col-details">
                                                        <p className="block-name-details">Назва:</p>
                                                        <p className="block-details">IT Risk and Assurance</p>
                                                    </div>
                                                </div>
                                                <div className="row details-row-margin">
                                                    <div className="col-12 ellipsis-col-details">
                                                        <p className="block-name-details">Зайнятість:</p>
                                                        <p className="block-details">Full-time</p>
                                                    </div>
                                                </div>
                                                <div className="row details-row-margin">
                                                    <div className="col-12 ellipsis-col-details">
                                                        <p className="block-name-details">Зарплатня:</p>
                                                        <p className="block-details">15000 грн</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row tags-labels">
                                                    <div className="col-8">Освіта</div>
                                                </div>
                                                <Chip label="4+ курс" className="chip-info"/>
                                                <Chip label="Фінанси" className="chip-info"/>
                                                <Chip label="Економіка" className="chip-info"/>
                                                <div className="row tags-labels">
                                                    <div className="col-8">Навички</div>
                                                </div>
                                                <Chip label="MS Office" className="chip-info"/>
                                                <Chip label="Бухоблік" className="chip-info"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="location-map-create">Локація:</div>
                                        <div className="row">
                                            <div className="col-12 column-location">
                                                <div className="loc-div-create">
                                                    <p className="vacancy-text-address-create">м. Київ, вул. Жилянська, 48</p>
                                                    <iframe id="iframe-map" width="100%" height="200" frameBorder="0" className="google-map-create" scrolling="no"
                                                            marginHeight="0" marginWidth="0"
                                                            src="https://www.google.com/maps/embed/v1/place?q=%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%96%D0%B8%D0%BB%D1%8F%D0%BD%D1%81%D1%8C%D0%BA%D0%B0%2C%2048%2C%2050%D0%B0%2C%20%D0%9A%D0%B8%D1%97%D0%B2&key=AIzaSyDC2eQOHheWPhWWxe8nYSbJS15QwLHkqiY"
                                                            allowFullScreen>
                                                    </iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row vacancy-info-categories-first">
                                            <div className="col-8">
                                                Кого ми шукаємо:
                                            </div>
                                        </div>
                                        <p className="vacancy-text-align">З початку 2020 року влада Нідерландів відмовилася від назви «Голландія» ― її перестали використовувати як символ країни та на офіційному логотипі.
                                            На новому логотипі замість слова «Голландія» зображені помаранчеві букви NL та написана назва країни англійською мовою — «Netherlands».
                                            Влада Нідерландів вважає, що слово «Голландія» у іноземців часто асоціюється з тими розвагами, яких вони б хотіли уникати: легальними рекреаційними наркотиками та кварталом червоних ліхтарів.
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row vacancy-info-categories">
                                            <div className="col-8">
                                                Графік роботи:
                                            </div>
                                        </div>
                                        <p className="vacancy-text">Full-time, з можливістю іноді відвідувати пари. Також з оплачуваною відпусткою на період сесії.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row vacancy-info-categories">
                                            <div className="col-8">
                                                Вимоги:
                                            </div>
                                        </div>
                                        <ul>
                                            <li className="vacancy-text">Ступінь бакалавра в галузі ІТ або суміжній галузі.</li>
                                            <li className="vacancy-text">Відмінне розуміння балансу обсягу, строку та вартості.</li>
                                            <li className="vacancy-text">Успіх у роботі з широким спектром зацікавлених сторін із суперечливими потребами та вимогами до виконання стратегії спільних послуг / розвитку.</li>
                                            <li className="vacancy-text">Переважний досвід інтеграції в технології SAP.</li>
                                            <li className="vacancy-text">Досвід управління ескалаціями, вирішення конфліктів та керування організаційним процесом.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row vacancy-info-categories">
                                            <div className="col-8">
                                                Буде плюсом:
                                            </div>
                                        </div>
                                        <ul>
                                            <li className="vacancy-text">Від 3 до 5 років досвіду в розробці розроблених на замовлення ІТ-рішень.</li>
                                            <li className="vacancy-text">Поєднання освіти та досвіду, що дають рівноцінні знання.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row vacancy-info-categories">
                                            <div className="col-8">
                                                Задачі:
                                            </div>
                                        </div>
                                        <ul>
                                            <li className="vacancy-text">Розробка та інтеграція нових функцій та функціональності з метою оптимізації бізнес-процесів та можливостей Salesforce.com.</li>
                                            <li className="vacancy-text">Співпрацювати з адміністраторами Salesforce.com, бізнес-зацікавленими сторонами та іншими членами команди.</li>
                                            <li className="vacancy-text">Зрозуміти дорожню карту додатка Salesforce та активно вмикайте план розширених можливостей бізнесу.</li>
                                            <li className="vacancy-text">Переконатись, що програми збігаються зі специфікаціями дизайну та дотримуються ділової практики кодування.</li>
                                            <li className="vacancy-text">Продемонструвати здібності за допомогою робочих процесів, макетів сторінок, тренувань, інформаційних панелей, створення та дезактивації користувачів, завантаження даних та всіх інших функцій Salesforce.com.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row vacancy-info-categories">
                                            <div className="col-8">
                                                Ми пропонуємо:
                                            </div>
                                        </div>
                                        <ul>
                                            <li className="vacancy-text">Офіс в стилі лофт</li>
                                            <li className="vacancy-text">Повністю виплачені пільги на здоров'я</li>
                                            <li className="vacancy-text">Медичне страхування</li>
                                            <li className="vacancy-text">Баланс роботи та життя</li>
                                            <li className="vacancy-text">Сплачена сімейна відпустка</li>
                                            <li className="vacancy-text">Дивовижний потенціал зростання</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                );
        }
    }

    getNumberOfSteps() {
        return 4;
    }


    handleNext = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep + 1
        });
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    handleChange_salary = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleClick() {
        var sidebar = document.getElementById("leftCol-employer-wide");
        sidebar.classList.remove("not-active-menu");
        var content = document.getElementById("content-employer");
        content.setAttribute('style', 'margin-left: ' + '290px');
        var button = document.getElementById("menu-button");
        button.classList.remove("active-button");
    }

    render() {
        const { activeStep } = this.state;
        return (
            <div className="full-employer">
                <div className="row">

                    <SideBar/>

                    <div className="col" id="content-employer-create">
                        <div className="row">
                            <button id="menu-button" className="button-menu" onClick={this.handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-menu">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        <div>
                            <div className="row row-stepper-center">
                            <Stepper className="col-9 no-gutters" id="stepper-icons" activeStep={activeStep} alternativeLabel>
                                <Step key={0}>
                                    <StepLabel>
                                       Інформація про вакансію
                                    </StepLabel>
                                </Step>
                                <Step key={1}>
                                    <StepLabel>Опис вакансії</StepLabel>
                                </Step>
                                <Step key={2}>
                                    <StepLabel>Про компанію</StepLabel>
                                </Step>
                                <Step key={3}>
                                    <StepLabel>Публікація</StepLabel>
                                </Step>
                            </Stepper>
                            </div>

                            <div className="steps-content-div">
                                {activeStep === this.getNumberOfSteps() ? (
                                    <div>
                                        <div className="row row-expansion-panel-center">
                                            <div className="col-8 align-center-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-smile-create">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                                </svg>
                                                Вакансія опублікована!
                                            </div>
                                        </div>
                                        <div className="row row-expansion-panel-center">
                                            <div className="col-8 align-center-btn">
                                                <a target="_blank" href="#" className="look-at-vac-link">
                                                    <button className="look-at-vac-btn">
                                                        Переглянути вакансію
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    ) : (
                                    <div>
                                    {
                                        this.getStepContent(activeStep)
                                    }
                                    <div className="row buttons-vac-div">
                                        <div className="col-8 no-gutters">
                                            <Button
                                                id="back-btn-stepper"
                                                disabled={activeStep === 0}
                                                onClick={this.handleBack}
                                                startIcon={
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                         className="feather-chevron-left-btn">
                                                        <polyline points="15 18 9 12 15 6"></polyline>
                                                    </svg>
                                                }
                                            >
                                                Назад
                                            </Button>
                                            {activeStep === this.getNumberOfSteps() - 1 ?
                                                <Button
                                                    id="publish-btn-stepper"
                                                    variant="raised"
                                                    color="primary"
                                                    onClick={this.handleNext}
                                                    endIcon={
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                             className="feather-chevron-right-btn">
                                                            <polyline points="9 18 15 12 9 6"></polyline>
                                                        </svg>
                                                    }
                                                > Опублікувати </Button>
                                                :
                                                <Button
                                                    id="next-btn-stepper"
                                                    variant="raised"
                                                    color="primary"
                                                    onClick={this.handleNext}
                                                    endIcon={
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                             className="feather-chevron-right-btn">
                                                            <polyline points="9 18 15 12 9 6"></polyline>
                                                        </svg>
                                                    }
                                                >Далі</Button>
                                            }

                                        </div>
                                    </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}