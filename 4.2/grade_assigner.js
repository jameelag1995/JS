// input a letter and return a numeric grade

let letter = prompt('Enter Your Grade Below')
letter = letter.toUpperCase()

switch (letter){
    case 'F': console.log('Your Score is: 0-64');break;
    case 'D': console.log('Your Score is: 65-69');break;
    case 'C': console.log('Your Score is: 70-79');break;
    case 'B': console.log('Your Score is: 80-89');break;
    case 'A': console.log('Your Score is: 90-100');break;
    default: console.log('Invalid Input');break;
}

// input numeric grade and recive a letter
let grade = prompt('Enter Your Grade Below')
grade = parseInt(grade)

switch (true){
    case (0 <= grade && grade <= 64): console.log("You've got an F");break;
    case (65 <= grade && grade <= 69): console.log("You've got a D");break;
    case (70 <= grade && grade <= 79): console.log("You've got a C");break;
    case (80 <= grade && grade <= 89): console.log("You've got a B");break;
    case (90 <= grade && grade <= 100): console.log("You've got an A");break;
    default: console.log('Invalid Input');break;
}