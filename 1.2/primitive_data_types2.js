/*--Delete the wrong answers--
1. Which of the following is/are strings?
a) 4
b) 4.0
c) '4'

Answer: c

2. Which of the following is/are numbers?
a) 4
b) 4.0
c) '4'
d) -4

Answer: a,b ,d

3. Which of the following is/are booleans?
a) true
b) false
c) "true"

Answer: a,b

4. What is the result of 80 + 71.2?
a) 151.2
b) 151
c) 8071.2

Answer: a

5. What is the result of "80" + 71.2?
a) 151.2
b) 151
c) "8071.2"

Answer: c

6. Does 100 + 30 produce a number or a string?
a) number
b)string

Answer: a

7. Does "100" + 30 produce a number or a string?
a)number
b)string

Answer: b

*/

// First Section
var a = 2;
let b = 3;
const c = 4;

// Second Section
let value = 1;
value = 100;

// Third Section
let aString;
aString = "He's got it!"

// Fourth Section
let resturantBill = 15;
let taxBill = 0.1;
let totalBill = resturantBill+resturantBill*taxBill;
let finalCheck = `Your total bill is ${totalBill}$`;
console.log(finalCheck);

// Fifth Section
let num = 50.6;
let roundNum = Math.round(50.6);
console.log(`the number was ${num} and it was rounded using Math.round to ${roundNum}`);

// Sixth Section 
let undefinedVariable;
console.log(typeof undefinedVariable);
