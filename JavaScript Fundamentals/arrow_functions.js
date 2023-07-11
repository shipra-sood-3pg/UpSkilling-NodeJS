//Ways to define functions in Javascript are as follows:

let num1 = 16;
let num2 = 12;

//Method 1 => Function declaration
function calculate_product(num1, num2) {
    return num1 * num2;
} 

console.log(calculate_product(num1, num2));

//Method 2 => function expression
const get_product_square = function(num1, num2) {
    return Math.pow((num1 * num2), 2);
}
console.log(get_product_square(num1, num2));

//Method 3 => Arrow function format:
const get_product_arrow = (num1, num2) => {
    return num1 * num2;
}
console.log(get_product_arrow(num1, num2));