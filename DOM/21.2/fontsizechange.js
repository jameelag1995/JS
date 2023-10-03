const minusbtn = document.querySelector("#minusbtn");
const plusbtn = document.querySelector("#plusbtn");
const p = document.querySelector("p");

p.style.fontSize = "14px";
document.body.style.display = 'flex';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'space-between';
document.body.style.gap = '1rem';
minusbtn.addEventListener("click", (e) => {
    let newFontSize = parseInt(p.style.fontSize.slice(0, -2)) - 4;
    p.style.fontSize = `${newFontSize}px`;
});
plusbtn.addEventListener("click", (e) => {
    let newFontSize = parseInt(p.style.fontSize.slice(0, -2)) + 4;
    p.style.fontSize = `${newFontSize}px`;
});
