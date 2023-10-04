// Random letter Generator
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomLetter);

// display user input
const letter = document.querySelector(".letter");
const letterDisplay = document.createElement("h2");
const display = document.querySelector(".display");
const displayContent = document.createElement("h3");
letterDisplay.innerText = "?";
letter.append(letterDisplay);
display.append(displayContent);

// Winning PopUp
const correctMsg = document.createElement("h2");
correctMsg.innerText = "That Was Correct. Nice Guess!";
const playagainbtn = document.createElement("button");
playagainbtn.innerText = "Play Again";
playagainbtn.classList.add("btn");
const correctdiv = document.querySelector(".correct");
correctdiv.append(correctMsg, playagainbtn);
correctdiv.classList.toggle("correcthidden");

// play again event
playagainbtn.addEventListener("click", () => {
    window.location.reload();
});

// guess the letter event
window.addEventListener("keyup", (e) => {
    displayContent.innerText += `${e.key},`;
    if (e.key === randomLetter) {
        letterDisplay.innerText = randomLetter;
        correctdiv.classList.toggle("correcthidden");
    }
});
