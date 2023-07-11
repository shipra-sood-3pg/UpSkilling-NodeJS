//typeof function
let myVariable = "Hello World";
console.log(typeof(myVariable));

myVariable = 1;
console.log(typeof(myVariable));

myVariable = false;
console.log(typeof(myVariable));

//Joiniing a non-string value with a string
let age = 11;
let userName = "Kshitij Shah";
let description = `${userName} is ${age} years old.`;
console.log(description);

//converting string to number
let stringValue = "5";
let numericValue = Number(stringValue);
console.log(`Value: ${numericValue}, IsInvalid: ${isNaN(numericValue)} , typeof: ${typeof(numericValue)}`);
let numericValue1 = new Number(stringValue);
console.log(`Value: ${numericValue1}, IsInvalid: ${isNaN(numericValue)} , typeof: ${typeof(numericValue1)}`);
 
//NaN: not a number
stringValue = "five";
numericValue = Number(stringValue);
console.log(`Value: ${numericValue} , IsInvalid: ${isNaN(numericValue)} , typeof: ${typeof(numericValue)}`);

//converting a numeric value to a boolean value : 0 evaluates to false rest all yield true
let number1 = 1;
let number2 = 0;
let number3 = -8;
console.log(`Number1: ${Boolean(number1)} , Number2: ${Boolean(number2)}, Number3: ${Boolean(number3)}`);

//converting a string value to boolean value : empty, undefined or null returns false and non-empty string returns true;
let string1 = "Hello World";
let string2 = "";
let string3 = null;
let string4;
console.log(`String1: ${Boolean(string1)} , String2: ${Boolean(string2)}, String3: ${Boolean(string3)}, , String4: ${Boolean(string4)}`);