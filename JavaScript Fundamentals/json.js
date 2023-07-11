//Javascript Object
let employee = {
    employeeName : "Shipra Sood",
    dateOfJoining : new Date("March 15, 2021"),
    employerName : "3Pillar Global",
    designation : "Senior Software Engineer",
    isActive : true,
    department: "Software Development"
};

//convert the JS object to json
console.log(JSON.stringify(employee));

let jsonValue = JSON.stringify(employee, null, 2);
console.log(jsonValue)

//convert JSON value back to object
let newEmployee = JSON.parse(jsonValue);
console.log(newEmployee);

//Writing JSON directly
let newJSONValue = `{
    "firstName": "Shipra",
    "lastName": "Sood"
}`;
console.log(JSON.parse(newJSONValue));

//console.log(JSON.parse("HelloWorld")); // this will give Syntax Error : for unexpected token in JSON at position 0 as this is not a valid JSON