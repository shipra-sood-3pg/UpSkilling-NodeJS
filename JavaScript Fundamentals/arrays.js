//creating arrays
let array1 = [];
let array2 = ["Item1", "Item2"];
let array3 = new Array();
let array4 = new Array("Item1", "Item2", "Item3");

let departments = ["Marketing", "Engineering", "Admin"];
console.log(`
ArrayLength: ${departments.length}
Array: ${departments}
First Value: ${departments[0]}
Last Value: ${departments[departments.length - 1]}
Non-Existant Index: ${departments[departments.length + 1]}
Includes Admin: ${departments.includes("Admin")}
Includes Finance: ${departments.includes("Finance")}
IndexOf Admin: ${departments.indexOf("Admin")}
IndexOf Finance: ${departments.indexOf("Finance")}
`);


departments.push("HR");//Adding value - at end of array
departments.unshift("Finance");//Adding value - at the beginning
departments.splice(1, 0, "Sales"); //Adding value at a specific index
console.log(departments);

departments.shift(); //Removes value - at the begining of an array
console.log(departments);
departments.splice(1, 2); //Removes 2 items from the array beginning at index 1
console.log(departments);
departments.pop(); //Removes value - from the end of an array
console.log(departments);


const person1 = { firstName: "Shipra", lastName: "Sood"};
const person2 = { firstName: "Shinav", lastName: "Shah"};
const person3 = { firstName: "Kshitij", lastName: "Shah"};
const person4 = { firstName: "Kshitij", lastName: "Shah"};

const allPeople = [person1, person2, person3];

console.log(`
allPeople Length : ${allPeople.length}
allPeople : ${JSON.stringify(allPeople, null, 2)}
person1 exists in array: ${allPeople.includes(person1)}
person4 identical exists in array: ${allPeople.includes(person4)}
`);

allPeople.push(person4);
console.log(JSON.stringify(allPeople, null, 2));
allPeople.shift();
allPeople.pop();
console.log(JSON.stringify(allPeople, null, 2));