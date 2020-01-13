import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(number, name, vacancy, education, languages, contacts, type, cv, status, date) {
    return { number, name, vacancy, education, languages, contacts, type, cv, status, date };
}

const rows = [
    createData('1', "Валерія Караульereeeeeeeeна", "Менедeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeжер", "КНУ", "Англeeeeeeeeeeeeeeeeeeee - В1", "(067) 220-08e564654645645-73", "Фулл-тайм, 8000+", "нема", "Тест", "08 січ"),
];

export default function Test() {
    const classes = useStyles();

    return (
        <div>
            {/*<div className="row">*/}
            {/*    <p className="create-vac-input-name">*/}
            {/*        Назва*/}
            {/*        <div className="required-mark">*</div>*/}
            {/*    </p>*/}
            {/*</div>*/}
            {/*<div className="row bottom-create">*/}
            {/*    <div className="col-8 no-gutters">*/}
            {/*        <input type="text" className="create-vac-input" placeholder="Назва вакансії" aria-label="Назва вакансії"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="row">*/}
            {/*    <p className="create-vac-input-name">Локація роботи</p>*/}
            {/*</div>*/}
            {/*<div className="row">*/}
            {/*    <div className="col-4 no-gutters">*/}
            {/*        <p className="create-vac-input-name-sm">*/}
            {/*            Місто*/}
            {/*            <div className="required-mark">*</div>*/}
            {/*        </p>*/}
            {/*        <input type="text" className="create-vac-input-city bottom-create" placeholder="Місто" aria-label="Місто"/>*/}
            {/*    </div>*/}
            {/*    <div className="col-4 no-gutters">*/}
            {/*        <p className="create-vac-input-name-sm-street">Вулиця</p>*/}
            {/*        <input type="text" className="create-vac-input-street bottom-create" placeholder="Вулиця" aria-label="Вулиця"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="row">*/}
            {/*    <p className="create-vac-input-name">*/}
            {/*        Зайнятість*/}
            {/*        <div className="required-mark">*</div>*/}
            {/*    </p>*/}
            {/*</div>*/}
            {/*<div className="row bottom-create">*/}
            {/*    /!*<div className="col-8 no-gutters">*!/*/}
            {/*    /!*    <ChooseWorkType/>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*</div>*/}
            {/*<div className="row">*/}
            {/*    <p className="create-vac-input-name">Зарплатня</p>*/}
            {/*</div>*/}

            {/*{(() => {*/}
            {/*    if (this.state.value=="Estimate"){*/}
            {/*        return (*/}
            {/*            <div className="row bottom-create-salary align-items-center">*/}
            {/*                <div className="col-8 no-gutters">*/}
            {/*                    <div className="salary-create-vac-vid">від</div>*/}
            {/*                    <input type="text" className="create-vac-input-salary" placeholder="Зарплатня" aria-label="Зарплатня"/>*/}
            {/*                    <div className="salary-create-vac">грн</div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        );*/}
            {/*    }*/}
            {/*    else if (this.state.value=="Precise"){*/}
            {/*        return (*/}
            {/*            <div className="row bottom-create-salary align-items-center">*/}
            {/*                <div className="col-8 no-gutters">*/}
            {/*                    <input type="text" className="create-vac-input-salary" placeholder="Зарплатня" aria-label="Зарплатня"/>*/}
            {/*                    <div className="salary-create-vac">грн</div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        );*/}
            {/*    }*/}
            {/*})()}*/}

            {/*<div className="row">*/}
            {/*    <div className="col-8 no-gutters">*/}
            {/*        <FormControl component="fieldset">*/}
            {/*            <RadioGroup aria-label="position" name="position" id="mui-salary" value={this.state.value} onChange={this.handleChange_salary} row>*/}
            {/*                <FormControlLabel*/}
            {/*                    value="Estimate"*/}
            {/*                    id="salary-choose-create"*/}
            {/*                    control={<Radio color={"primary"}/>}*/}
            {/*                    label="Приблизно"*/}
            {/*                    labelPlacement="end"*/}
            {/*                />*/}
            {/*                <FormControlLabel*/}
            {/*                    value="Precise"*/}
            {/*                    id="salary-choose-create"*/}
            {/*                    control={<Radio color={"primary"}/>}*/}
            {/*                    label="Точно"*/}
            {/*                    labelPlacement="end"*/}
            {/*                />*/}
            {/*            </RadioGroup>*/}
            {/*        </FormControl>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}