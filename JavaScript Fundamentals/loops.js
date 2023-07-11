//import array of employees stored in the data file
import employees from './data/employeeData.json' assert {type: 'json'}

//basic while loop
console.log("------------------------ while loop ------------------------");
let i = 0;
while(employees[i])
{
    console.log(`EmployeeDetails:     
        Name: ${employees[i].employeeName}
        Email: ${employees[i].email}
        Joining Date: ${employees[i].dateOfJoining}
    `);
    i++;
}

//do while loop
console.log("------------------------ do..while loop ------------------------");
i = 0;
do
{
    console.log(`EmployeeDetails:     
        Name: ${employees[i].employeeName}
        Email: ${employees[1].email}
        Joining Date: ${employees[i].dateOfJoining}
    `);
    i++;
} while(employees[i]);

//for loop
console.log("------------------------ for loop ------------------------");
for(let i = 0; i < employees.length; i++){
    console.log(`EmployeeDetails:     
        Name: ${employees[i].employeeName}
        Email: ${employees[i].email}
        Joining Date: ${employees[i].dateOfJoining}
    `);
}

//for.. of loop => used to loop over a collection
console.log("------------------------ for..of loop ------------------------");
for(let employee of employees){
    console.log(`EmployeeDetails:     
        Name: ${employee.employeeName}
        Email: ${employee.email}
        Joining Date: ${employee.dateOfJoining}
    `);
}

//for.. in loop => used to loop over the properties of an object  
console.log("------------------------ for..in loop ------------------------");
for(let employee of employees){
    for(let property in employee){
        console.log(`${property}:   ${employee[property]}`);
    }
    console.log("~~~~~~~~~~~~~~~")
}

//break loop
console.log("------------------------ break from loop ------------------------");
for(let idx = 0; idx < employees.length; idx++){
    if (idx > 1){
        break;
    }
    console.log(`EmployeeDetails:     
    Name: ${employees[idx].employeeName}
    Email: ${employees[idx].email}
    Joining Date: ${employees[idx].dateOfJoining}
`);
}

//continue with next loop iteration
console.log("------------------------ continue next loop ------------------------");
for(let employee of employees){
    if (!employee.employeeName.includes("Shah")){
        continue;
    }
    console.log(`EmployeeDetails:     
    Name: ${employee.employeeName}
    Email: ${employee.email}
    Joining Date: ${employee.dateOfJoining}
`);
}

//Nested loop control flow
employeeLoop: for(let employee of employees){
    propertyLoop: for (let property in employee){
        if(employee.id === 3){ break;}
        if (property === 'email')
        {
            continue employeeLoop;
        }
        console.log(`${property}:   ${employee[property]}`);
    }
}