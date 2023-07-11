//assigning the variable values using let
let firstName = 'Shipra'
let lastName = `Sood`;
let noOfYears = 2;
let dateOfJoining = new Date(2021, 2, 15);

//String Concatenation 
//Method 1 : with + operator
let fullName = firstName + " " + lastName;

//Method 2 : template literals --template string ${variable} 
fullName = `${firstName} ${lastName}`;

//using const to create a constant
const designation = "Senior S/W Engineer";
//designation = "SSE"; //This will give error "TypeError: Assignment to constant variable." as const variable value cannot be updated while execution

let education = `"Masters in Computer Application" from JIITU Noida (UP)`;
let companyName = "3Pillar Global";
let userDetail = `
Name: ${fullName}
Educational Qualification: ${education}
Employer: ${companyName}
Date of Joining: ${dateOfJoining}
Designation: ${designation.toUpperCase()}`;
console.log(userDetail);

console.log(education.length);
console.log(education.charAt(2));
console.log(education.indexOf("Computer"));
console.log(education.indexOf("Shipra"));
console.log(education.toLowerCase().includes("computer"));


/* Template Strings */

/*
    String interpolation is replacing placeholders with values in a string literal 
    The placeholder expression result is implicitly converted to a string.
    To escape placeholders expression use backslash '\'

    Syntax:  =>  `string_literal ${placeholder}`
    Example: => `Full Name: ${firstName} ${lastName}`

    ${placeholder} can be a 
        -   variable        => ${variable}
        -   operators       => ${n1 + n2}, ${condition ? 'val 1' : 'val 2'}
        -   function calls  => ${function_name(argument_list)}


    Best Practices
        -   To construct lengthy strings, template strings should be used instead of string concatenation
        -   To improve the readabiliy of the literals when the string contains complex placeholders, introduce the helper variables to store intermediate values 
        -   Use single quotes in the expression inside the placeholder
*/

console.log(`Employee Name: ${firstName} ${lastName}`);

let num1 = 10, num2 = 20
console.log(`The percentage is ${(num1 / num2) * 100}`);

console.log(`Result of Conditional check: ${ num1 > num2 ? 'num1 is greater than num2.' : 'num2 is greater than num1.'}`);

//arrow function
const product  = (num1, num2) => {
    return num1 * num2;
}

console.log(`The product of the numbers is : ${product(num1, num2)}`);

const myEmpObjArray = [
    {
        "FirstName": "Shipra",
        "LastName": "Sood"
    },
    {
        "FirstName": "Kshitij",
        "LastName": "Shah"
    },
    {
        "FirstName": "Shinav",
        "LastName": "Shah"
    }
];

let empNames = myEmpObjArray.map(rec => {
    return ` ${rec.FirstName} ${rec.LastName}`;
});

console.log(empNames);


console.log(`The employees in the array are ${empNames}`);


const n1 = 2;
const n2 = 3;

const complexPlaceholderString = `Sum: ${n1 + n2}, difference: ${n1 - n2}, pow: ${Math.pow(n1, n2)}`;

console.log(complexPlaceholderString);

//Intermediate helper variables => adds to the readability of the literal 
const sum = n1 + n2;
const diff = n1 - n2;
const pow = Math.pow(n1, n2);

const message = `Sum: ${sum}, difference: ${diff}, pow: ${pow}`;
console.log(message);