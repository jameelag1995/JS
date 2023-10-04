// Random letter Generator
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomLetter);

// display user input
const letter = document.querySelector(".letter");
const letterDisplay = document.createElement("h2");
const userinput = document.querySelector("#userinput");
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
userinput.focus();

// play again event
playagainbtn.addEventListener("click", () => {
    window.location.reload();
});

// guess the letter event
userinput.addEventListener("keyup", (e) => {
    displayContent.innerText += `${e.target.value[e.target.value.length - 1]},`;
    if (e.target.value[e.target.value.length - 1] === randomLetter) {
        letterDisplay.innerText = randomLetter;
        correctdiv.classList.toggle("correcthidden");
        return;
    }
});
