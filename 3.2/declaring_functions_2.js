// From function declarations to explicit and implicit return functions (one of each).
function welcome() {
let welcome = 'Welcome to Appleseeds Bootcamp!';
return welcome;
}
const welcomeExpression = () => "Welcome to Appleseeds Bootcamp";

function power(a) {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
}
const powerExpression = (a) => Math.pow(a, 2);

// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);
const randomNumbers = (a, b) => Math.random() * (a - b) +b;

const squareRootIIFE = (function(a) {
    return Math.sqrt(a);
}  )(4);

const randomNumbersIIFE = (function(a,b){
    return Math.random() * (a - b) +b;
})(10,20);
console.log(randomNumbersIIFE);