//Basic math opertorts
let sumValue = 16 + 10;
let diffValue = 10 - 5;
let productValue = 15 * 20;
let quotient = 113 / 17;
let remainder = 113 % 9;
let squareValue = 19 ** 2 // ** means raise to power 2 so this will give you the square

console.log(`
sumValue: ${sumValue}
diffValue: ${diffValue}
productValue: ${productValue}
quotient: ${quotient}
remainder: ${remainder}
squareValue: ${squareValue}   
`)

//increment and decrement operator
let value = 10;
console.log(`
value = ${value}
value++ = ${value++} //this will first display the value and then increment
++value = ${++value} //this will first increment the value and then display
value-- = ${value--} //first display the value and then decrement
--value = ${--value} //first decrement the value and then display
`)

//assignment Operators
let myString = "Hello World";
let myNumber = 16;
let myBoolean = true;
let myDate = new Date();

//Mathematical Assignment
myNumber += 10; //evaluated as myNumber = myNumber + 10
console.log(myNumber);
myNumber -= 10; //evaluated as myNumber = myNumber - 10
console.log(myNumber);
myNumber *= 10; //evaluated as myNumber = myNumber * 10
console.log(myNumber);
myNumber /= 20; //evaluated as myNumber = myNumber / 10
console.log(myNumber);
myNumber %= 5; //evaluated as myNumber = myNumber % 5
console.log(myNumber);
myNumber **= 6; //evaluated as myNumber = myNumber ** 6
console.log(myNumber);

//Standard and Strict Equality/Non-Equality Checks
let obj1 = {};
let obj2 = {};
let obj3 = obj2;
console.log(`
//returns true as the value is same 
'42' == 42 evaluates as ${'42' == 42}   

//returns false as though the value is same type is different one is string and other is number
'42' === 42 evaluates as ${'42' === 42} 

//two objects refer to two different memory so they are never same
obj1 == obj2 evaluates as ${obj1 == obj2}
obj1 === obj2 evaluates as ${obj1 === obj2}

//the below will be true as objects assigned by reference so they will refer to same memory location so are different.
obj3 == obj2 evaluates as ${obj3 == obj2}
obj3 === obj2 evaluates as ${obj3 === obj2}

undefined == null evaluates as ${undefined == null}
undefined === null evaluates as ${undefined === null}
`);

//Falsy.js

const isTruthy = (variable, exp) => {
    console.log(`${variable} value is ${exp} and falsy is : ${Boolean(exp)}`)
}

//numbers
isTruthy("val1", 0);
isTruthy("val2", 1);
isTruthy("val3", -10);
isTruthy("val4", NaN);
isTruthy("val5", 0n);

console.log("\n");

//Boolean, null, and undefined
isTruthy("val6", undefined);
isTruthy("val7", null);
isTruthy("val8", false);
isTruthy("val9", true);

console.log("\n");

//strings
isTruthy("val10", "");
isTruthy("val11", "Hi");
isTruthy("val12", "False");

//Objects
isTruthy("val13", {});
let var14;
isTruthy("var14", var14)