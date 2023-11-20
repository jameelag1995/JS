// ! ======================================! //
// Question: Implement a function sumArray that takes an array of numbers and returns the sum of all elements.

const arr2 = [10, 5, 8, 2];

function sumArray(numsArr) {
    return numsArr.reduce((initialVal, currVal) => initialVal + currVal, 0);
}
console.log(sumArray(arr2));

// Question: Write a function getEvens that takes an array of numbers and returns a new array containing only the even numbers.

const arr = [1, 2, 3, 4, 5, 6];
function getEvens(numsArr) {
    return numsArr.filter((num) => num % 2 === 0);
}
console.log(getEvens(arr));
