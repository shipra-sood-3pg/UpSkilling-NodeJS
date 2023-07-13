import chalk from 'chalk';

export let numOfEmployeesLogged = 0;

export const logObject = (obj) => {
    Object.entries(obj).forEach(entry => {
        console.log(`${chalk.green.bold(entry[0])}: ${chalk.gray.bold(entry[1])}`);
    });
    ++numOfEmployeesLogged;
}