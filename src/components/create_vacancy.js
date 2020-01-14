import React from "react";
import Wide_SideBar from "./wide_sidebar";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import SideBar from "./sidebar";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Text_Editor from "./text_editor";

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


export default class Create_Vac extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            display: true,
            value: 'Estimate',
            activeStep: 0,
        }
        this.handleClick = this.handleClick.bind(this);
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
                        <ExpansionPanel className="col-8 panel-create-vac">
                            <ExpansionPanelSummary
                                expandIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-chevron-down">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                }
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className="panel-header">
                                    Вимоги
                                    <div className="required-mark">*</div>
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel className="col-8 panel-create-vac">
                            <ExpansionPanelSummary
                                expandIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-chevron-down">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                }
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className="panel-header">
                                    Графік роботи
                                    <div className="required-mark">*</div>
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel className="col-8 panel-create-vac">
                            <ExpansionPanelSummary
                                expandIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-chevron-down">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                }
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography className="panel-header">
                                    Задачі
                                    <div className="required-mark">*</div>
                                </Typography>
                            </ExpansionPanelSummary>
                        </ExpansionPanel>
                        <ExpansionPanel className="col-8 panel-create-vac">
                            <ExpansionPanelSummary
                                expandIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-chevron-down">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                }
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography className="panel-header">
                                    Від компанії
                                    <div className="required-mark">*</div>
                                </Typography>
                            </ExpansionPanelSummary>
                        </ExpansionPanel>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <Typography>content.</Typography>
                        <Button>And a big button for good measure</Button>
                    </div>
                );
        }
    }

    getNumberOfSteps() {
        return 3;
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
                                    <StepLabel>Інформація про вакансію</StepLabel>
                                </Step>
                            </Stepper>
                            </div>

                            <div className="steps-content-div">
                                {activeStep === this.getNumberOfSteps() ? (
                                    <div>
                                        <Typography>
                                            Вся інформація заповнена!
                                        </Typography>
                                        <Button onClick={this.handleReset}>
                                            Reset
                                        </Button>
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
                                            >
                                                Назад
                                            </Button>
                                            <Button
                                                id="next-btn-stepper"
                                                variant="raised"
                                                color="primary"
                                                onClick={this.handleNext}
                                            >
                                                {activeStep === this.getNumberOfSteps() - 1 ? 'Закінчити' : 'Далі'}
                                            </Button>
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