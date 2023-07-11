//Employee
let employee = {
    employeeName : "Shipra Sood",
    dateOfJoining : new Date("March 15, 2021"),
    employerName : "3Pillar Global",
    designation : "Senior Software Engineer",
    isActive : true,
    department: "Software Development",
    yearsOfService: 8
};

let badgeColor;

if (employee.yearsOfService <= 5) {
    employee.badgeColor = "Blue";
} else if (employee.yearsOfService <= 10) {
    employee.badgeColor = "Yellow"
} else if (employee.yearsOfService <= 15) {
    employee.badgeColor = "Red"
} else if (employee.yearsOfService <= 20) {
    employee.badgeColor = "Purple"
} else {
    employee.badgeColor = "Silver"
}

console.log(`Years of Service: ${employee.yearsOfService}, BadgeColor: ${employee.badgeColor}`);

//&& Operator is used to evaluate multiple conditions for truthyness in all conditions
if (employee.yearsOfService > 5 && employee.department === "Software Development"){
    console.log("Both conditions satisfied");
}

//|| Operator is used to evaluate multiple conditions for truthyness in one or more conditions
if (employee.yearsOfService < 5 || employee.department === "Software Development"){
    console.log("One or more conditions satisfied");
}

//Evaluating for a condition to NOT be true
if (employee.yearsOfService > 20 && !employee.isActive ) {
    console.log("Employee Retired");
}


if (employee.yearsOfService > 10) {
    employee.annualBonus = 25000;
}
else {
    employee.annualBonus = 10000;
}

//Ternary Operator
employee.annualBonus = (employee.yearsOfService > 10) ? 25000 : 10000;

switch(employee.department) {
    case "Software Developement":
        console.log("Meeting on 3rd floor.");
        break;

    case "Finance" : 
        console.log("Meeting on 5th floor.");
        break;
    
    case "HR" :
    case "Admin": 
        console.log("Meeting on Ground floor.");
        break;
    
    default:
        console.log("Go to cafeteria for chit chat.")
}