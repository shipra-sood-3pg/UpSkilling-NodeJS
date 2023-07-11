//Rounding off numbers
let myNumValue = 16.654124
console.log(`
Round: ${Math.round(myNumValue)}
Ceiling: ${Math.ceil(myNumValue)}
Floor: ${Math.floor(myNumValue)}
`); 

//limiting no of decimal places to display .toFixed
let fixedDecimalNumber = myNumValue.toFixed(2);
console.log(` Fixed Type: ${typeof(fixedDecimalNumber)} , Value : ${fixedDecimalNumber}`);

//output number using a format specific to geographic area locale specific
let myValue = 12200000;
console.log(`USA: ${myValue.toLocaleString('en-US')}`);
console.log(`India: ${myValue.toLocaleString('hi-IN')}`);
console.log(`Greece: ${myValue.toLocaleString('el-EL')}`);

//output number for specific currency format for an area
let annualSalary = 1800000;
let monthlySalary = annualSalary / 12

console.log(`Monthly Salary: ${monthlySalary.toFixed(2)}`);

let myFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency:'USD'});
console.log(`In USD: ${myFormatter.format(monthlySalary)}`);

myFormatter = new Intl.NumberFormat('hi-IN', {style: 'currency', currency:'INR'});
console.log(`In INR: ${myFormatter.format(monthlySalary)}`);