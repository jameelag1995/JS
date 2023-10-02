/* ---------------------------- Using getElement ---------------------------- */
const h1El = document.getElementsByTagName("h1")[0];
const pEl = document.getElementsByTagName("p")[0];
const aEl = document.getElementsByTagName("a")[0];
const imgEl = document.getElementsByTagName("img")[0];
const divXEl = document.getElementsByClassName("x")[0];
const divYEl = document.getElementById("y");
const inputsEls = document.getElementsByTagName("input");
// foreach doesn't work on html collection so we transform it into an array 
const inputsarr = [...inputsEls];
const allEls = document.body.getElementsByTagName('*'); // selecting all elements

/* --------------------------- Using QuerySelector -------------------------- */
const h1ElQs = document.querySelector("h1");
const pElQs = document.querySelector("p");
const aElQs = document.querySelector("a");
const imgElQs = document.querySelector("img");
const divXElQs = document.querySelector(".x")[0];
const divYElQs = document.querySelector("#y");
const inputsElsQs = document.querySelectorAll("input");
const allElsQs = document.body.querySelectorAll('*'); // selecting all elements

inputsarr.forEach((input) => {
    console.log(input);
});

inputsElsQs.forEach((input) => console.log(input));
