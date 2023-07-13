/*
Shallow Copy
    - When a reference variable is copied into a new reference variable using the assignment operator, a shallow copy of the referenced object is created.
    - When a new reference variable is assigned the value of the old reference variable, the address stored in the old reference variable is copied into the new one. 
    - Both the old and new reference variable point to the same object in memory and hence any change in any of the reference variables is reflected for both.
*/


let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
 
console.log("Employee=> ", employee);
let newEmployee = employee;    // Shallow copy
console.log("New Employee=> ", newEmployee);
 
console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// Name of the employee as well as
// newEmployee is changed.

/*
Deep Copy
   In contrast to shallow copy, the deep copy makes 
        - a copy of all the members of the old object
        - allocates a separate memory location for the new object
        - then assigns the copied members to the new object. 
    Both the objects are independent of each other and in case of any modification to either one, the other is not affected. 
    Also, if one of the objects is deleted the other still remains in the memory. 
    To create a deep copy of an object in JavaScript we use JSON.parse() and JSON.stringify() methods. 
*/

let employeeDeepCopy = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
let newEmployeeDeepCopy = JSON.parse(JSON.stringify(employeeDeepCopy));
console.log("Employee=> ", employeeDeepCopy);
console.log("New Employee=> ", newEmployeeDeepCopy);
console.log("---------After modification---------");
newEmployeeDeepCopy.ename = "Beck";
newEmployeeDeepCopy.salary = 70000;
console.log("Employee=> ", employeeDeepCopy);
console.log("New Employee=> ", newEmployeeDeepCopy);