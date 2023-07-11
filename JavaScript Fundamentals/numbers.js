//Define number values:
let number1 = 16;
let number2 = -1234.6533;

//Big and small numbers
let number3 = 2000000000000000000008;
console.log(number3);

let number4 = -0.000000000000000008;
console.log(number4);

//numbers with e-notation
number4 = 1.26e+15;
console.log(number4);
console.log(`\n`);
console.log(`Minimum Value: ${Number.MIN_VALUE}`);
console.log(`Minimum Safe Integer: ${Number.MIN_SAFE_INTEGER}`);
console.log(`Maximum Value: ${Number.MAX_VALUE}`);
console.log(`Maximum Safe Value: ${Number.MAX_SAFE_INTEGER}`);

//Creating BigInt's
let bigInt1 = 1n;
let bigInt2 = 1_500_000_000_000_000_000_000n;
console.log(bigInt1);
console.log(bigInt2);
