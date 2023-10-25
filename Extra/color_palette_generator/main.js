function createRandomHexColor() {
    const hexChars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let rnd = Math.floor(Math.random() * hexChars.length);
        color += hexChars[rnd];
        console.log("curr rnd index:", rnd);
        console.log("curr color:", color);
    }
    console.log("final color", color);
    return color;
}

const generateBtn = document.querySelector(".generateBtn");
const colors = document.querySelectorAll(".color");

generateBtn.addEventListener("click", () => {
    for (color of colors) {
        const sec = document.querySelector("section");
        sec.style.display = "flex";
        let bgcolor = createRandomHexColor();
        color.style.backgroundColor = bgcolor;
        color.innerText = bgcolor;
        color.style.display = "flex";
    }
});
const footdiv = document.querySelector(".footdiv");
const saveBtn = document.querySelector(".saveBtn");
saveBtn.addEventListener("click", () => {
    const currsec = document.querySelector("section");
    let newSec = currsec.cloneNode(true);
    footdiv.insertAdjacentElement("afterbegin", newSec);
    footdiv.style.overflow = "scroll";
});
