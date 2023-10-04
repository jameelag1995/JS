// Random letter Generator
const ALL_CHARACTERS = "abcdefghijklmnopqrstuvwxyz";
const randomLetter =
    ALL_CHARACTERS[Math.floor(Math.random() * ALL_CHARACTERS.length)];
console.log(randomLetter);

// guessing msg
const worngGuess = document.querySelector(".guess-the-letter h2");

// display user input
const letter = document.querySelector(".letter");
const letterDisplay = document.createElement("h2");
const display = document.querySelector(".display");
const displayContent = document.createElement("h3");
letterDisplay.innerText = "?";
letter.append(letterDisplay);
display.append(displayContent);

// Winning PopUp
const correctdiv = document.querySelector(".correct");
const correctMsg = document.createElement("h2");
const playagainbtn = document.createElement("button");
correctMsg.innerText = "That Was Correct. Nice Guess!";
playagainbtn.innerText = "Play Again";
playagainbtn.classList.add("btn");
correctdiv.append(correctMsg, playagainbtn);
correctdiv.classList.toggle("correcthidden");


let gameWon = false;
// guess the letter event - GAME ON!
window.addEventListener("keyup", (e) => {
    let key = e.key.toLowerCase();
    if (gameWon == false) { // if game still running 
        displayContent.innerText += ` ${key} `; // show the pressed key to on the display 
        if (key === randomLetter) { //if the pressed key is equal to the random letter then game is won dislpay the letter and show popup
            letterDisplay.innerText = randomLetter;
            correctdiv.classList.toggle("correcthidden");
            gameWon = true;
        }
        
        worngGuess.innerText = "Wrong guess"; // in case of wrong guess type it to the screen in red
        worngGuess.style.color = "red";
    }
    if (gameWon) { // if game ended show the letter in green msg and stop the event 
        worngGuess.innerText = "the Correct letter is " + randomLetter;
        worngGuess.style.color = "teal";
        return;
    }
});

// click the button to play again event
playagainbtn.addEventListener("click", () => {
    window.location.reload();
});
