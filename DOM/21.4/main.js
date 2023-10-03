const background = document.querySelector("main");
const lightBulb = document.querySelector(".bulb");

lightBulb.addEventListener("click", () => {
    let islLightOn = background.classList.toggle("bglight");
    islLightOn = !islLightOn;
    console.log("light is on:", !islLightOn);
});
