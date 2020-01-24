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
import Tooltip from '@material-ui/core/Tooltip';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Slider from '@material-ui/core/Slider';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Chip from "@material-ui/core/Chip";
import Paper from '@material-ui/core/Paper';
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import Dropzone_Comp from "./dropzone.js";

const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: 'white',
        color: '#212529',
        boxShadow: theme.shadows[1],
        fontSize: 11.5,
        letterSpacing: '0.4px'
    },
}))(Tooltip);

const useStylesBootstrap = makeStyles(theme => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
    },
}));

function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
}


function WorkTypeApply() {
    const [value, setValue] = React.useState('Full-time');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <div>
            <RadioGroup aria-label="position" id="mui-worktype" name="position" value={value} onChange={handleChange} row>
                <FormControlLabel
                    value="Full-time"
                    id="radio-box-black-apply"
                    control={<Radio color={"primary"}/>}
                    label="A1 - базовий"
                    labelPlacement="end"
                    className="col-4"
                />
                <FormControlLabel
                    value="Part-time"
                    id="radio-box-black"
                    control={<Radio color={"primary"}/>}
                    label="B1 - середній"
                    labelPlacement="end"
                    className="col-4"
                />
                <FormControlLabel
                    value="Full / Part-time"
                    id="radio-box-black"
                    control={<Radio color={"primary"}/>}
                    label="С1 - високий"
                    labelPlacement="end"
                    className="col-4"
                />
            </RadioGroup>
            <RadioGroup aria-label="position" id="mui-worktype" name="position" value={value} onChange={handleChange} row>
                <FormControlLabel
                    value="Стажування"
                    id="radio-box-black"
                    control={<Radio color={"primary"}/>}
                    label="A2 - початковий"
                    labelPlacement="end"
                    className="col-4"
                />
                <FormControlLabel
                    value="Віддалено"
                    control={<Radio color={"primary"}/>}
                    label="В2 - вище середнього"
                    labelPlacement="end"
                    className="col-4"
                />
                <FormControlLabel
                    value="Віддалено"
                    control={<Radio color={"primary"}/>}
                    label="С2 - носій мови"
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

        <FormControl id="course-select-course-form-2">
            <Select value={state.course}
                    onChange={handleChange_course('course')}
                    displayEmpty id="course-select-course-2"
                    IconComponent = {ExpandMoreRoundedIcon}
            >
                <MenuItem value="" disabled id="all-cat-select">
                    <p className="course-placeholder">Курс</p>
                </MenuItem>
                <MenuItem value={1} id="all-cat-select">1</MenuItem>
                <MenuItem value={2} id="all-cat-select">2</MenuItem>
                <MenuItem value={3} id="all-cat-select">3</MenuItem>
                <MenuItem value={4} id="all-cat-select">4</MenuItem>
                <MenuItem value={5} id="all-cat-select">5</MenuItem>
                <MenuItem value={6} id="all-cat-select">6</MenuItem>
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

function Work_Select() {
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
        'Full/Part-time',
        'Стажування',
        'Віддалено',
    ];

    const [personName, setPersonName] = React.useState([]);

    const handleChangeType = event => {
        setPersonName(event.target.value);
    };

    return (
        <FormControl id="course-select-work-form">
            <Select
                labelId="type-filter-top"
                id="course-select-work"
                multiple
                displayEmpty
                value={personName}
                onChange={handleChangeType}
                IconComponent = {ExpandMoreRoundedIcon}
                input={<Input />}
                renderValue={selected => {
                    if (selected.length === 0) {
                        return <p className="course-placeholder">Тип зайнятості</p>;
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

function SalaryFilter(){
    const [values, setValues] = React.useState({
        salary: '',
    });

    const handleChangeSalary = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <FormControl className="col-7 salary-filter-form" variant="outlined">
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

function ChooseEnglish(){
    const [state, setState] = React.useState({
        levelEng: '',
        click: 'A1',
    });

    const handleClickEng = name => event => {
        console.log("begin "+name)
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

export default class Apply_Page extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            display: true,
            value: 'Estimate',
            activeStep: 0,
        }
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleChange_salary=this.handleChange_salary.bind(this);
    }

    getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <div>
                        <div className="input-title-apply">
                            Прізвище
                            <div className="required-mark">*</div>
                        </div>
                        <div>
                            <input type="text" className="apply-input" placeholder="Твоє прізвище" aria-label="Назва вакансії"/>
                        </div>
                        <div className="input-title-apply">
                            Ім'я
                            <div className="required-mark">*</div>
                        </div>
                        <div>
                            <input type="text" className="apply-input" placeholder="Твоє ім'я" aria-label="Назва вакансії"/>
                        </div>
                        <div className="input-title-apply">
                            Контакти
                            <div className="required-mark">*</div>
                        </div>
                        <div>
                            <input type="text" className="apply-input" placeholder="Бажано вказати Telegram. Тобі так швидше напишуть" aria-label="Назва вакансії"/>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <div className="input-title-apply">
                            Університет
                            <div className="required-mark">*</div>
                        </div>
                        <div>
                            <input type="text" className="apply-input" placeholder="Вкажи абревіатуру назви. Наприклад: КНУ, КНЕУ" aria-label="Назва вакансії"/>
                        </div>
                        <div className="input-title-apply">
                            Факультет
                            <div className="required-mark">*</div>
                        </div>
                        <div>
                            <input type="text" className="apply-input" placeholder="Наприклад: факультет інформатики" aria-label="Назва вакансії"/>
                        </div>
                        <div className="input-title-apply">
                            Спеціальність та курс
                            <div className="required-mark">*</div>
                        </div>
                        <div>
                            <input type="text" className="col-8 apply-input-specialization" placeholder="Наприклад: політологія" aria-label="Назва вакансії"/>
                            <Course_Select/>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <div className="input-title-apply">
                            Рівень англійської мови
                            <div className="required-mark">*</div>
                        </div>
                        <div>
                            <div className="row">
                                <ChooseEnglish/>
                            </div>
                        </div>
                        <div>
                            {/*<WorkTypeApply/>*/}
                        </div>
                        <div className="input-title-apply">
                            Інші іноземні мови
                        </div>
                        <div className="row">
                            <div className="col-8 column-city">
                                {/*<p className="create-vac-input-name-sm">*/}
                                {/*    Мова*/}
                                {/*</p>*/}
                                <input type="text" className="create-vac-input-lang bottom-create-apply" placeholder="Напиши тут мову" aria-label="Місто"/>
                            </div>
                            <div className="col-4 column-level">
                                {/*<p className="create-vac-input-name-sm-title">Рівень</p>*/}
                                <Level_Select/>
                            </div>
                        </div>
                        <div className="input-title-apply">
                            Бажана зайнятість та зарплатня
                        </div>
                        <Work_Select/>
                        <SalaryFilter/>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <div className="input-title-apply">
                            Якщо ти маєш резюме, завантаж сюди.
                            <b className="resume-important">&nbsp;Якщо не маєш</b>, завантажувати <b className="resume-important">НЕ потрібно</b>, пропусти цей пункт
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Dropzone_Comp/>
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

    render() {
        const { activeStep } = this.state;
        return (
            <div>
                <div className="row center-row">
                    <div className="col-11">
                        <div>
                            <div className="row row-stepper-center-apply-mobile">
                                <Stepper id="stepper-icons-apply" className="apply-stepper" activeStep={activeStep} alternativeLabel>
                                    <BootstrapTooltip title="Інформація про тебе" placement="top">
                                        <Step key={0}>
                                            <StepLabel></StepLabel>
                                        </Step>
                                    </BootstrapTooltip>

                                    <BootstrapTooltip title="Інформація про тебе" placement="top">
                                        <Step key={1}>
                                            <StepLabel></StepLabel>
                                        </Step>
                                    </BootstrapTooltip>

                                    <BootstrapTooltip title="Інформація про тебе" placement="top">
                                        <Step key={2}>
                                            <StepLabel></StepLabel>
                                        </Step>
                                    </BootstrapTooltip>

                                    <BootstrapTooltip title="Інформація про тебе" placement="top">
                                        <Step key={3}>
                                            <StepLabel></StepLabel>
                                        </Step>
                                    </BootstrapTooltip>

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
                                                Урааа! Форма успішно надіслана роботодавцю!
                                            </div>
                                        </div>
                                        {/*<div className="row row-expansion-panel-center">*/}
                                        {/*    <div className="col-8 align-center-btn">*/}
                                        {/*        <a target="_blank" href="#" className="look-at-vac-link">*/}
                                        {/*            <button className="look-at-vac-btn">*/}
                                        {/*                Переглянути вакансію*/}
                                        {/*            </button>*/}
                                        {/*        </a>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>
                                ) : (
                                    <div>
                                        {
                                            this.getStepContent(activeStep)
                                        }
                                        <div className="row buttons-vac-div-apply">
                                            <div className="col-12">
                                                <Button
                                                    id="back-btn-stepper-apply"
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
                                                    > Завершити </Button>
                                                    :
                                                    <Button
                                                        id="next-btn-stepper-apply"
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