const ageinput = document.querySelector("input");
// make an event listener that reads the input from the user
const h2 = document.createElement("h2");

ageinput.addEventListener("input", (e) => {
    let toInt = parseInt(e.target.value);
    if (isNaN(toInt)) {
        h2.innerText = "";
    } else {
        if (toInt > 18) {
            h2.innerText = "You Can Drink";
        } else {
            h2.innerText = "You're Too Young To Drink";
        }
    }
});
document.body.append(h2);
