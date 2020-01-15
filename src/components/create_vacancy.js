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
import Chip from "@material-ui/core/Chip";
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

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

function ChipArray() {

    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
    ]);

    const handleDelete = chipToDelete => () => {
        setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
    };

    return (
        <div>
            {chipData.map(data => {
                let icon;

                return (
                    <Chip
                        key={data.key}
                        icon={icon}
                        label={data.label}
                        onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                    />
                );
            })}
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
                        {/*<div className="title-vac-div">*/}
                        {/*    <div className="col-8 no-gutters create-vac-input-name-title">*/}
                        {/*        Теги*/}
                        {/*        <div className="required-mark">*</div>*/}
                        {/*    </div>*/}
                        {/*    <div className="col-8 no-gutters">*/}
                        {/*        <ChipArray/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
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
                                        {/*<div className="row details-row-margin">*/}
                                        {/*    <div className="col-4 ellipsis-col-details">*/}
                                        {/*        <p className="block-name-details">Назва:</p>*/}
                                        {/*        <p className="block-details">IT Risk and Assurance</p>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-4 ellipsis-col-details">*/}
                                        {/*        <p className="block-name-details">Зайнятість:</p>*/}
                                        {/*        <p className="block-details">Full-time</p>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-4 ellipsis-col-details">*/}
                                        {/*        <p className="block-name-details">Зарплатня:</p>*/}
                                        {/*        <p className="block-details">15000 грн</p>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="row details-row-margin-second">*/}
                                        {/*    <div className="col-4 ellipsis-col-details">*/}
                                        {/*        <p className="block-name-details">Зарплатня:</p>*/}
                                        {/*        <p className="block-details">15000 грн</p>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                {/*<div className="row">*/}
                                {/*    <div className="col-12">*/}
                                {/*        <div className="row tags-labels">*/}
                                {/*            <div className="col-8">Освіта</div>*/}
                                {/*        </div>*/}
                                {/*        <Chip label="4+ курс" className="chip-info"/>*/}
                                {/*        <Chip label="Фінанси" className="chip-info"/>*/}
                                {/*        <Chip label="Економіка" className="chip-info"/>*/}
                                {/*        <div className="row tags-labels">*/}
                                {/*            <div className="col-8">Навички</div>*/}
                                {/*        </div>*/}
                                {/*        <Chip label="MS Office" className="chip-info"/>*/}
                                {/*        <Chip label="Бухоблік" className="chip-info"/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
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
                            {/*<div className="col-2 column-location no-gutters">*/}
                            {/*    <div className="loc-div">*/}
                            {/*        <div className="location-map">Локація:</div>*/}
                            {/*        <p className="vacancy-text-address">м. Київ, вул. Жилянська, 48</p>*/}
                            {/*        <iframe id="iframe-map" width="230" height="260" frameBorder="0" className="google-map" scrolling="no"*/}
                            {/*                marginHeight="0" marginWidth="0"*/}
                            {/*                src="https://www.google.com/maps/embed/v1/place?q=%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%96%D0%B8%D0%BB%D1%8F%D0%BD%D1%81%D1%8C%D0%BA%D0%B0%2C%2048%2C%2050%D0%B0%2C%20%D0%9A%D0%B8%D1%97%D0%B2&key=AIzaSyDC2eQOHheWPhWWxe8nYSbJS15QwLHkqiY"*/}
                            {/*                allowFullScreen>*/}
                            {/*        </iframe>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
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
                                    <StepLabel>Публікація</StepLabel>
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