const switchBtn = document.querySelector('.switch');
const resetBtn = document.querySelector('.reset');
const colorTxt = document.querySelector('.color-txt');

function generateRandomRgbColor(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return [red,green,blue];
}
switchBtn.addEventListener('click',()=>{
    let colors = generateRandomRgbColor();
    let colorsToStr = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
    colorTxt.innerText = colorsToStr;
    document.body.style.backgroundColor = colorsToStr;
});
resetBtn.addEventListener('click',()=>{
    colorTxt.innerText = `rgb(255, 255, 255)`;
    document.body.style.backgroundColor = `rgb(255, 255, 255)`;
})