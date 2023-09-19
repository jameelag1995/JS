const randomNumber = Math.floor(Math.random() * 51); // Generates a random integer between 0 and 50 (inclusive)
console.log(randomNumber);
let guess = prompt("guess a number between 0 and 50");
while (guess != randomNumber) {
  if (guess < randomNumber) {
    console.log(`too low`);
  } else {
    console.log(`too high`);
  }
  guess = prompt("Try Again! guess a number between 0 and 50");
}
console.log(`You've Guessed Right! The Number is ${randomNumber}`);
