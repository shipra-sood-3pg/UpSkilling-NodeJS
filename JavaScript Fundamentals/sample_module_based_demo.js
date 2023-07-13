//import sample data
import { loadDataFromFile, writeDataToFile } from './demo_app_modules/data.js';
import { getCurrencyConversionDetails, getSalary } from './demo_app_modules/currency.js'
import chalk from 'chalk';

import createPrompt from 'prompt-sync';

//Global variables
let employees = [];
let currencyConversionData;


//Sample Usage
let prompt = createPrompt();

const logEmployee = (employee) => {

    console.log('------------------------------------------------------------');
    console.log('');
    Object.entries(employee).forEach(entry => {
        if (entry[0] !== "salaryGBP" || entry[0] !== "localCurrency"){
            console.log(`${chalk.green.bold(entry[0])}: ${chalk.gray.bold(entry[1])}`);
        }
    });
    console.log(`${chalk.green.bold('Salary (GBP)')}: ${chalk.gray.bold(getSalary(employee.salaryGBP, "GBP", currencyConversionData))}`);
    console.log(`${chalk.green.bold('Local Currency (')} ${chalk.green.bold(employee.localCurrency)})')}: ${chalk.gray.bold(getSalary(employee.salaryGBP, employee.localCurrency, currencyConversionData))}`);
    console.log('');
    console.log('------------------------------------------------------------');
}

// function: to read value from the cli
const getInput = (promptText, validator, transformer) => {
    let value = prompt(promptText);
    if (validator && !validator(value)) {
      console.error(`--Invalid input`);
      return getInput(promptText, validator, transformer);
    }
    if(transformer) {
      return transformer(value);
    }
    return value;
}

//function to get the next id of the employee 
const getNextEmployeeID = () => {
    const maxID = Math.max(...employees.map(rec => rec.id));
    return maxID + 1;
}

//Validator functions

const isCurrencyCodeValid = (code) => {
    const currencyCodes = Object.keys(currencyConversionData.rates);
    return (currencyCodes.indexOf(code) > -1);
}

const isValidString = (input) => {
    return (input) ? true : false;
}

const isValidBooleanValue = (input) => {
    return (input === "yes" || input === "no");
}

const isIntegerValid = (min, max) => {
    return (input) => {
      let numValue = Number(input);
      if (!Number.isInteger(numValue) || numValue < min || numValue > max) {
        return false;
      }
      return true;
    }
}

const listEmployees = () => {
    console.log(`Employee List ----------------------------`);
    console.log('');

    employees.forEach(emp => {
        logEmployee(emp);
        prompt("Press enter to continue...");
    })
    console.log(`Employee list completed`);
}

const addNewEmployee = async () => {
    console.log(`Add Employee -----------------------------`);
        console.log('');
        let employee = {};

        employee.id = getNextEmployeeID();
        employee.employeeName = getInput("Employee Name: ", isValidString);        
        employee.email = getInput("Email: ", isValidString);;
        employee.designation = getInput("Designation: ", isValidString);        
        employee.department = getInput("Department: ", isValidString);;
        employee.isActive = getInput("Is employee active (yes or no): ", isValidBooleanValue, i => (i === "yes"));

        let joiningDateYear = getInput("Employee Joining Year (1990-2023): ", isIntegerValid(1990, 2023));
        let joiningDateMonth = getInput("Employee Joining Date Month (1-12): ", isIntegerValid(1, 12));
        let joiningDateDay = getInput("Employee Joining Date Day (1-31): ", isIntegerValid(1, 31));
        employee.dateOfJoining = new Date(joiningDateYear, joiningDateMonth - 1, joiningDateDay);

        employee.salaryGBP = getInput("Annual Salary in GBP: ", isIntegerValid(10000, 50000));
        employee.localCurrency = getInput("Local currency (3 letter code): ", isCurrencyCodeValid);

        employees.push(employee);
        await writeDataToFile(employees);
}

//search for employee by id
const searchById = () => {
    const id = getInput("Employee Id: ", null, Number);
    const employee = employees.find(e => e.id === id);

    if(employee) {
        console.log("");
        logEmployee(employee)
    } else {
        console.log("NO results...");
    }
}

// Search for employees by name
const searchByName = () => {
    const name = getInput("Employee Name: ").toLowerCase();
    const email = getInput("Email: ").toLowerCase();
    const results = employees.filter(emp => {
      if (name && !emp.employeeName.toLowerCase().includes(name)) {
        return false;
      }
      if (email && !emp.email.toLowerCase().includes(email)) {
        return false;
      }
      return true;
    });
    results.forEach((emp, idx) => {
      console.log("");
      console.log(`Search Result ${idx + 1} -------------------------------------`);
      logEmployee(emp);
    });
  }
  
const main = async () =>{

    // Get the command the user wants to exexcute
    const command = process.argv[2].toLowerCase();
    switch (command) {

        case 'list':
            listEmployees();
            break;

        case 'add': 
            await addNewEmployee();
            break;

        case 'searchbyid':
            searchById();
            break;

        case 'searchbyname':
            searchByName();
            break;

        default:
            console.log('Unsupported command. Exiting...');
            process.exit(1);
    }
}

Promise.all([ loadDataFromFile(), getCurrencyConversionDetails() ])
    .then(results => {
        employees = results[0];
        currencyConversionData = results[1];
        return main();
    })
    .catch((err) => {
      console.error("Cannot complete startup.");
      throw err;
    });