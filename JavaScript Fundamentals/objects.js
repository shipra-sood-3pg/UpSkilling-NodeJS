//Create Object with Object literal (preferred)
let objLiteral = {};

//Create objet using the constructor apporach
let objConstructor = new Object();

//Populate properties on an object after creating
objLiteral.employeeName = "Shipra Sood";
objLiteral.dateOfJoining = new Date("March 15, 2021");
objLiteral.employerName = "3Pillar Global";
objLiteral.designation = "Senior Software Engineer";
objLiteral.isActive = true;

console.log("\n");
console.log(objLiteral);

//Populating an object on creation with Object Literal syntax

let objLiteral1 = {
    employeeName : "Shipra Sood",
    dateOfJoining : new Date("March 15, 2021"),
    employerName : "3Pillar Global",
    designation : "Senior Software Engineer",
    isActive : true

};
console.log("\n");
console.log(objLiteral1);

//Objects are passed by reference and not value so any change made in one object will reflect on the other 
let objLiteralCopy = objLiteral;
objLiteralCopy.PreviousOrganization = "9Lenses";
console.log("\n");
console.log(objLiteral);

//2 notations to Accessing properties from an object 
console.log("\n");
console.log(`Employee Name : ${objLiteral1.employeeName}`);
console.log(`Employee Name : ${objLiteral1["employeeName"]}`); //this notation has to be used if the property name consists on spaces

//Delete a property from an object:
delete objLiteral1.dateOfJoining;
console.log("\n");
console.log(objLiteral1) ;

//Accessing a property that doesnot exist
console.log("\n");
console.log(`Date Of Joining: ${objLiteral1.dateOfJoining}` );


