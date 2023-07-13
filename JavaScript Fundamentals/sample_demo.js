//import sample data

import fs from 'node:fs/promises';
import createPrompt from 'prompt-sync';

//Global variables
let employees = [];
let currencyConversionData;

//Fetch Currency Data
const getCurrencyConversionDetails = async () => {
    const headers = new Headers();

    const requestOptions = {
        method: 'GET',
        headers,
        redirect: 'follow'
    }

    const response = await fetch("http://api.exchangeratesapi.io/v1/latest?access_key=e22c89ebd4b386efb75660d1819e9c82&symbols=INR,USD,CAD,JPY", requestOptions);

    if (!response.ok){
        throw new Error("Cannot fetch currency data conversion rates.");
    }
    currencyConversionData = await response.json();
}

const getSalary = (amountGBP, currency) => {
    let amount = (currency === "GBP") ? amountGBP : amountGBP * currencyConversionData.rates[currency];

    const formatter = Intl.NumberFormat('en-GB', {
                        style: 'currency', 
                        currency:'INR'
                    });
    return formatter.format(amount);
}

//Reading a file and writing data to the file system
const loadDataFromFile = async () => {
    console.log("Loading Employees...");
    try{
        const data = await fs.readFile('./data/employeeData.json', 'utf8');
        employees = JSON.parse(data);
    }
    catch{
        console.log("Error reading / parsing the employee file");
        throw err;
    }
}

//Reading a file and writing data to the file system
const writeDataToFile = async () => {
    console.log("Saving Employees...");
    try{
        await fs.writeFile('./data/employeeData.json', JSON.stringify(employees, null, 2));
    }
    catch{
        console.log("Error while saving data to the employee file");
        throw err;
    }
}

//Sample Usage
let prompt = createPrompt();

const logEmployee = (employee) => {
    Object.entries(employee).forEach(entry => {
        if (entry[0] !== "salaryGBP" || entry[0] !== "localCurrency"){
            console.log(`${entry[0]}: ${entry[1]}`);
        }
    });
    console.log(`Salary (GBP): ${getSalary(employee.salaryGBP, "GBP")}`);
    console.log(`Local Currency (${employee.localCurrency}): ${getSalary(employee.salaryGBP, employee.localCurrency)}`);
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
        await writeDataToFile();
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

loadDataFromFile()  
    .then(getCurrencyConversionDetails)
    .then(main)
    .catch((err) => {
        console.error("Cannot complete startup");
        throw err;
    });