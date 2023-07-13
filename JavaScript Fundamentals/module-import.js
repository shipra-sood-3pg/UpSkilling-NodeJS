import chalk from 'chalk';
import { logObject, numOfEmployeesLogged } from "./log-object.js";
import employees from './data/employeeData.json' assert { type: 'json' };

employees.forEach(emp => {
    logObject(emp);
    console.log('');
    console.log('-------------------------------------------------');
});

console.log(`${chalk.red.bold('Total Employees Logged: ')}: ${chalk.red.bold(numOfEmployeesLogged)}`)