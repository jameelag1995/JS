let player1 = document.querySelectorAll("#player1-race > td");
let player2 = document.querySelectorAll("#player2-race > td");
let i = 0; //player1 steps
let j = 0; //player2 steps
let winnermsg = document.createElement("h2"); // create winner msg element
winnermsg.style.color = "teal";
winnermsg.innerText = "";
const playAgainBtn = document.createElement("button"); // create button element click to play again
playAgainBtn.innerText = "Play Again";
playAgainBtn.addEventListener("click", () => window.location.reload()); // on click reload the page
let gameWon = false; // Game Won Indicator


window.addEventListener("keyup", (e) => {
    if (gameWon == false) {
        // Player 1 Keys
        if (e.key === "ArrowRight" || e.key === "Right") {
            player1[i].classList.toggle("active"); //  toggle active : off for  position i
            player1[i + 1].classList.toggle("active"); //  toggle active : on for  position i+1
            if (player1[i + 1].classList.contains("finish")) {
                //if classlist contains finish then declare player 1 as  winner
                winnermsg.innerText = "Player 1 Is The Winner!";
                winnermsg.style.color = "rgb(170, 79, 79)";
                gameWon = true;
            }
            i++;
        }
        // Player 2 Keys
        if (e.key === "D" || e.key === "d") {
            player2[j].classList.toggle("active");
            player2[j + 1].classList.toggle("active");
            if (player2[j + 1].classList.contains("finish")) {
                winnermsg.innerText = "Player 2 Is The Winner!";
                winnermsg.style.color = "rgb(204, 204, 100)";
                gameWon = true;
            }
            j++;
        }
    }

    if (gameWon) {
        // if player X wins the game  display winner msg and play again button
        document.body.append(winnermsg);
        document.body.append(playAgainBtn);
        return;
    }
});
