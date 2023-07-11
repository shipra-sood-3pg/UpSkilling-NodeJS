//creating maps
/*
Format : mapVariable.set(keyName, value);

keyname can be string or non-string values
*/

let employee = {
    firstName: "Shinav",
    lastName: "Shah"
}

let accessCodes = new Map();
let myArray = [];

accessCodes.set("2016002", "empObj1");
accessCodes.set("2100089", "empObj2");
accessCodes.set("42057SS", "empObj3");
accessCodes.set("42057SS", "empObj3");

accessCodes.set("Emp", employee);

//Non-string keys
accessCodes.set(new Date().getTime(), "Number Key");
accessCodes.set(myArray, "Array Key");
accessCodes.set(()=> "Hi", "Function Key");

console.log(accessCodes);

//to check if an element exists in the map
console.log(`Check Existence: ${accessCodes.has("Emp")}`);

//to access an element from the map using the key value
console.log(`Get Element By KeyValue: ${accessCodes.get("2100089")}`);
console.log(`Get Element By KeyValue: ${accessCodes.get(myArray)}`);

//to loop over all the elements in the map
accessCodes.forEach((rec, key) => {
    console.log(key, rec);
});

//To delete an element in the map
accessCodes.delete("2016002");

//To check the size of the map
console.log(`Map Size: ${accessCodes.size}`);

//To remove all the elements in the map
accessCodes.clear();

console.log(accessCodes);


//map method can be used to transform an array's items into another object format array
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

//creating a Set : collection of values as compared to Key value pair in the map
//the values in the set remain unique

let mySet = new Set();
mySet.add("2100089");
mySet.add("2016002");
mySet.add("42057SS");
mySet.add("Shipra");

console.log(mySet);

mySet.add("42057SS");
mySet.add("shipra");
console.log(mySet);

//check size of the set
console.log(mySet.size);


//
for(const element of mySet.entries()){
    console.log(element);
}

for(const element of mySet.values()){
    console.log(element);
}


mySet.forEach(rec => {
    console.log(rec);
});

//to check if set has a value or not
console.log(mySet.has("shipra"));

//remove all elements
mySet.clear();

console.log(mySet.size);
