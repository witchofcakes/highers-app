import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.number}>
                            <TableCell component="th" scope="row">
                                {row.number}
                            </TableCell>
                            <TableCell className="td-margin" align="right">{row.name}</TableCell>
                            <TableCell className="td-margin" align="right">{row.vacancy}</TableCell>
                            <TableCell className="td-margin"align="right">{row.education}</TableCell>
                            <TableCell className="td-margin"align="right">{row.languages}</TableCell>
                            <TableCell className="td-margin" align="right">{row.vacancy}</TableCell>
                            <TableCell className="td-margin" align="right">{row.contacts}</TableCell>
                            <TableCell className="td-margin" align="right">{row.type}</TableCell>
                            <TableCell className="td-margin" align="right">{row.cv}</TableCell>
                            <TableCell className="td-margin" align="right">{row.status}</TableCell>
                            <TableCell className="td-margin" align="right">{row.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}