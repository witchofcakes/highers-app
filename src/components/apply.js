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

export default class Apply extends React.Component {

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
        this.handleClick = this.handleClick.bind(this);
        this.handleChange_salary=this.handleChange_salary.bind(this);
    }

    handleClick = () => {
        // console.log('You clicked the Chip.');
    };

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
                            Спеціальність
                            <div className="required-mark">*</div>
                        </div>
                        <div>
                            <input type="text" className="apply-input" placeholder="Наприклад: політологія" aria-label="Назва вакансії"/>
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
                        <div className="row chips-apply">
                            <div className="col-4 column-chips">
                                <Chip
                                    label="A1 - базовий"
                                    onClick={this.handleClick}
                                    variant="outlined"
                                    id="A1"
                                />
                                <Chip
                                    label="A2 - початковий"
                                    onClick={this.handleClick}
                                    variant="outlined"
                                    id="A2"
                                />
                            </div>
                            <div className="col-4 column-chips no-gutters">
                                <Chip
                                    label="B1 - середній"
                                    onClick={this.handleClick}
                                    variant="outlined"
                                    id="B1"
                                />
                                <Chip
                                    label="B2 - вище середнього"
                                    onClick={this.handleClick}
                                    variant="outlined"
                                    id="B2"
                                />
                            </div>
                            <div className="col-4 column-chips">
                                <Chip
                                    label="C1 - високий"
                                    onClick={this.handleClick}
                                    variant="outlined"
                                    id="C1"
                                />
                                <Chip
                                    label="C2 - носій мови"
                                    onClick={this.handleClick}
                                    variant="outlined"
                                    id="C2"
                                />
                            </div>
                        </div>

                        <div className="input-title-apply">
                            Факультет
                            <div className="required-mark">*</div>
                        </div>
                        <div>
                            <input type="text" className="apply-input" placeholder="Наприклад: факультет інформатики" aria-label="Назва вакансії"/>
                        </div>
                        <div className="input-title-apply">
                            Спеціальність
                            <div className="required-mark">*</div>
                        </div>
                        <div>
                            <input type="text" className="apply-input" placeholder="Наприклад: політологія" aria-label="Назва вакансії"/>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        Вітаю!
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
                <div className="row">
                    <div className="col">
                        <div>
                            <div className="row row-stepper-center-apply">
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
                                                    > Опублікувати </Button>
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