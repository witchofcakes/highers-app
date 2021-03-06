import React from 'react';
import Vacancy_Short from "./vacancy_short";
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import SimpleBar from 'simplebar-react';
import Chip from '@material-ui/core/Chip';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'simplebar/dist/simplebar.min.css';
import Footer_Vac from "./footer_vacancy";
import Vacancy_Comp from "./vacancy_comp";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Tooltip from "@material-ui/core/Tooltip";
import LinearProgress from '@material-ui/core/LinearProgress';
import Apply from "./apply";

const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: 'white',
        color: '#212529',
        boxShadow: theme.shadows[1],
        fontSize: 11.5,
        letterSpacing: '0.4px'
    },
}))(Tooltip);


function ChooseEnglish() {
    const [value, setValue] = React.useState('Full-time');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <div>
            <RadioGroup aria-label="position" id="mui-worktype" name="position" value={value} onChange={handleChange}>
                <FormControlLabel
                    value="Full-time"
                    id="radio-box-black"
                    control={<Radio color={"primary"}/>}
                    label="A1 - початковий"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="Part-time"
                    id="radio-box-black"
                    control={<Radio color={"primary"}/>}
                    label="А2 - базовий"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="Full / Part-time"
                    id="radio-box-black"
                    control={<Radio color={"primary"}/>}
                    label="В1 - середній"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="Full / Part-time"
                    id="radio-box-black"
                    control={<Radio color={"primary"}/>}
                    label="В2 - вище середнього"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="Full / Part-time"
                    id="radio-box-black"
                    control={<Radio color={"primary"}/>}
                    label="C1 - високий"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="Full / Part-time"
                    id="radio-box-black"
                    control={<Radio color={"primary"}/>}
                    label="C2 - близький до рівня носія мови"
                    labelPlacement="end"
                />
            </RadioGroup>
        </div>


    );
}

function ApplyModal() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const BorderLinearProgress = withStyles({
        root: {
            height: 10,
            backgroundColor: lighten('#ff6c5c', 0.5),
        },
        bar: {
            borderRadius: 20,
            backgroundColor: '#ff6c5c',
        },
    })(LinearProgress);

    return (
        <div>
            <div className="apply-button" onClick={handleOpen}>
                <LightTooltip title="5хв і робота твоя!">
                    <button className="apply-button-but">
                        Apply now
                    </button>
                </LightTooltip>
            </div>
            <Modal
                aria-labelledby="transition-modal-title-apply"
                aria-describedby="transition-modal-description-apply"
                className="modal-apply"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className="row modal-paper-apply">
                        <div className="column-apply-info">
                            <div className="filter-apply"></div>
                            <div className="apply-title">
                                HIGHERS
                            </div>
                            <div className="apply-title-small">
                                форма
                            </div>
                            <div className="row apply-title-phrase-div">
                                <div className="col-12 apply-title-phrase">
                                    <div className="div-column-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-check-apply">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <p className="check-text">Топові компанії</p>
                                    </div>
                                </div>
                                <div className="col-12 apply-title-phrase">
                                    <div className="div-column-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-check-apply">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <p className="check-text">Ніяких хвилювань</p>
                                    </div>
                                </div>
                                <div className="col-12 apply-title-phrase">
                                    <div className="div-column-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-check-apply">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <p className="check-text">Престижна робота</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column-apply-content">
                            <Apply/>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}


class Vac extends React.Component {

    render() {
        return (
            <div className="full short-vac">
                <div className="row">
                    <div className="col no-gutters" id="leftCol">
                        <div className="bottom-fadeout"></div>
                        <div className="top-fadeout"></div>
                        <SimpleBar className="vacancy-info-scroll">
                            <p className="similar-vac">Схожі вакансії</p>
                            <Vacancy_Short title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Full / Part-time"} salary={"15000 грн"} image={"box-image"}/>
                            <Vacancy_Short title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"} image={"box-image-2"}/>
                            <Vacancy_Short title={"Менеджер із роботи з бізнес - клієнтами"} company={"ProCredit Bank"} type={"Full-time"} salary={"8000 грн"} image={"box-image-3"}/>
                            <Vacancy_Short title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Part-time"} salary={"15000 грн"} image={"box-image"} active={"active-vacancy"}/>
                            <Vacancy_Short title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"} image={"box-image-2"}/>
                            <Vacancy_Short title={"Менеджер із роботи з бізнес - клієнтами"} company={"ProCredit Bank"} type={"Full-time"} salary={"8000 грн"} image={"box-image-3"}/>
                            <Vacancy_Short title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Part-time"} salary={"15000 грн"} image={"box-image"}/>
                            <Vacancy_Short title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"} image={"box-image-2"}/>
                            <Vacancy_Short title={"Менеджер із роботи з бізнес - клієнтами"} company={"ProCredit Bank"} type={"Full-time"} salary={"8000 грн"} image={"box-image-3"}/>
                            <Vacancy_Short title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Part-time"} salary={"15000 грн"} image={"box-image"}/>
                            <Vacancy_Short title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"} image={"box-image-2"}/>
                            <Vacancy_Short title={"Менеджер із роботи з бізнес - клієнтами"} company={"ProCredit Bank"} type={"Full-time"} salary={"8000 грн"} image={"box-image-3"}/>
                            <button className="load-more-but">Показати ще 15 вакансій</button>
                        </SimpleBar>
                    </div>
                    <div className="col" id="content">
                        <div className="row">
                            <div className="col-12 title-column-short">
                                <div className="row">
                                    <div className="col-1">
                                        <div className="box-image-short-vac"/>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-vacancy">
                                            Content Maker & Manager Trainee
                                        </div>
                                        <div className="vacancy-info">
                                            Deloitte
                                            <span className="vacancy-dot">•</span>
                                            Київ
                                            <span className="vacancy-dot">•</span>
                                            Full / Part-time
                                            <span className="vacancy-dot">•</span>
                                            15000 грн
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <ApplyModal/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<div className="row">*/}
                        <Tabs>
                            <TabList>
                                <Tab>Опис вакансії</Tab>
                                <Tab>Про компанію</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="row row-vacancy-info">
                                    <div className="col-8 no-gutters">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="tags-labels">Освіта</div>
                                                <Chip label="4+ курс" className="chip-info"/>
                                                <Chip label="Фінанси" className="chip-info"/>
                                                <Chip label="Економіка" className="chip-info"/>
                                                <div className="tags-labels">Навички</div>
                                                <Chip label="MS Office" className="chip-info"/>
                                                <Chip label="Бухоблік" className="chip-info"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="vacancy-info-categories-first">Кого ми шукаємо:</div>
                                                <p className="vacancy-text-align">З початку 2020 року влада Нідерландів відмовилася від назви «Голландія» ― її перестали використовувати як символ країни та на офіційному логотипі.

                                                    На новому логотипі замість слова «Голландія» зображені помаранчеві букви NL та написана назва країни англійською мовою — «Netherlands».

                                                    Влада Нідерландів вважає, що слово «Голландія» у іноземців часто асоціюється з тими розвагами, яких вони б хотіли уникати: легальними рекреаційними наркотиками та кварталом червоних ліхтарів.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="vacancy-info-categories">Графік роботи:</div>
                                                <p className="vacancy-text">Full-time, з можливістю іноді відвідувати пари. Також з оплачуваною відпусткою на період сесії.</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="vacancy-info-categories">Вимоги:</div>
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
                                                <div className="vacancy-info-categories">Буде плюсом:</div>
                                                <ul>
                                                    <li className="vacancy-text">Від 3 до 5 років досвіду в розробці розроблених на замовлення ІТ-рішень.</li>
                                                    <li className="vacancy-text">Поєднання освіти та досвіду, що дають рівноцінні знання.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="vacancy-info-categories">Задачі:</div>
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
                                                <div className="vacancy-info-categories">Від компанії:</div>
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
                                    <div className="col-4 column-location no-gutters">
                                        <div className="loc-div">
                                        <div className="location-map">Локація:</div>
                                        <p className="vacancy-text-address">м. Київ, вул. Жилянська, 48</p>
                                        <iframe width="250" height="260" frameBorder="0" className="google-map" scrolling="no"
                                                marginHeight="0" marginWidth="0"
                                                src="https://www.google.com/maps/embed/v1/place?q=%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%96%D0%B8%D0%BB%D1%8F%D0%BD%D1%81%D1%8C%D0%BA%D0%B0%2C%2048%2C%2050%D0%B0%2C%20%D0%9A%D0%B8%D1%97%D0%B2&key=AIzaSyDC2eQOHheWPhWWxe8nYSbJS15QwLHkqiY"
                                                allowFullScreen>
                                        </iframe>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="row row-vacancy-info">
                                <div className="col-8 no-gutters">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="vacancy-info-categories-company">Про компанію:</div>
                                            <p className="vacancy-text">Mason Frank International is a boutique global recruitment agency with a specific focus on permanent and contract Salesforce.com jobs.

                                                As a leading global advertiser of Salesforce.com jobs we have established ourselves as the supplier of choice to hundreds of Salesforce.com Partners and End Users.

                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="vacancy-info-categories">Переваги компанії:</div>
                                            <p className="vacancy-text">Full-time, з можливістю іноді відвідувати пари. Також з оплачуваною відпусткою на період сесії.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 no-gutters">
                                    <div className="vacancy-info-categories-company-vac">Вакансії компанії:</div>
                                    <Vacancy_Comp title={"IT Risk and Assurance"} company={"Ernst & Young"} type={"Full / Part-time"} salary={"13000 грн"}/>
                                    <Vacancy_Comp title={"Менеджер із роботи з бізнес - клієнтами"} company={"Deloitte"} type={"Full-time"} salary={"15000 грн"}/>
                                    <Vacancy_Comp title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Full-time"} salary={"8000 грн"}/>
                                    <Vacancy_Comp title={"Content Maker & Manager Trainee"} company={"Deloitte"} type={"Full-time"} salary={"8000 грн"}/>
                                    <div className="vac-company-div">
                                        <a target="_blank" href="/all-vacancies" className="all-vac-company-blue">
                                            <button className="all-vac-company-but">
                                                <a className="all-vac-company-blue">
                                                    Всі вакансії компанії
                                                </a>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                        {/*</div>*/}

                        <div className="row row-but-apply-bot">
                            <div className="col-12 col-apply-bot no-gutters">
                                <p className="p-apply-bot"><button className="but-apply-bottom">Apply now</button></p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 no-gutters">
                                <Footer_Vac/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default Vac;