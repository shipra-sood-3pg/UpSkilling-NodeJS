//import sample data

import employees from './data/employeeData.json' assert { type: 'json' }
import createPrompt from 'prompt-sync';

//Ways to define functions in Javascript are as follows:

let num1 = 16;
let num2 = 12;

//Method 1 => Function declaration
function calculate_product(num1, num2) {
    return num1 * num2;
} 
console.log(calculate_product(num1, num2));

function isValidDepartment(input){
    const departmentNames = ["Engineering", "Sales", "HR", "Finance"];
    return departmentNames.includes(input);
}
console.log(isValidDepartment("Finance"));
console.log(isValidDepartment("Admin"));

//Method 2 => function expression
const get_product_square = function(num1, num2) {
    return Math.pow((num1 * num2), 2);
}
console.log(get_product_square(num1, num2));

//Method 3 => Arrow Functions

//multiline arrow function
const get_product_arrow = (num1, num2) => {
    let product = num1 * num2
    return product;
}
console.log(get_product_arrow(num1, num2));

//single line arrow function with parameters
const result = () => console.log("no params");


//Sample Usage
let prompt = createPrompt();

const logEmployee = (employee) => {
    Object.entries(employee).forEach(entry => {
        console.log(`${entry[0]}: ${entry[1]}`);
    });
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

//Validator functions
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

const addNewEmployee = () => {
    console.log(`Add Employee -----------------------------`);
        console.log('');
        let employee = {};

        employee.employeeName = getInput("Employee Name: ", isValidString);        
        employee.email = getInput("Email: ", isValidString);;
        employee.designation = getInput("Designation: ", isValidString);        
        employee.department = getInput("Department: ", isValidString);;
        employee.isActive = getInput("Is employee active (yes or no): ", isValidBooleanValue, i => (i === "yes"));

        let joiningDateYear = getInput("Employee Joining Year (1990-2023): ", isIntegerValid(1990, 2023));
        let joiningDateMonth = getInput("Employee Joining Date Month (1-12): ", isIntegerValid(1, 12));
        let joiningDateDay = getInput("Employee Joining Date Day (1-31): ", isIntegerValid(1, 31));

        // Date elements are correct, let's create the date
        employee.dateOfJoining = new Date(joiningDateYear, joiningDateMonth - 1, joiningDateDay);

        // Output Employee JSON
        const json = JSON.stringify(employee, null, 2);
        console.log(`Employee: ${json}`);
}

//search for employee by id
const searchById = () => {
    console.log('here');
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
  

// Get the command the user wants to exexcute
const command = process.argv[2].toLowerCase();
console.log(command);
switch (command) {

    case 'list':
        listEmployees();
        break;

    case 'add': 
        addNewEmployee();
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