const inputs = document.querySelectorAll(".vertical input");
const form = document.querySelector("form");
let p = (document.createElement =
    "Wrong input! enter numbers between 0-9 only");
form.addEventListener("submit", (e) => e.preventDefault());
inputs[0].focus();
inputs.forEach((input, index) => {
    input.addEventListener("keyup", (e) => {
        if (
            e.target.value.length === 1 &&
            index < inputs.length - 1 &&
            0 <= parseInt(e.target.value) &&
            parseInt(e.target.value) <= 9
        ) {
            input.nextElementSibling.focus();
        } else if (
            e.target.value.length === 1 &&
            index === inputs.length - 1 &&
            0 <= parseInt(e.target.value) &&
            parseInt(e.target.value) <= 9
        ) {
            form.submit();
            console.log(`form submitted`);
        }
    });
});
// Listen to paste on the document
document.addEventListener("paste", function (e) {
    // if the target is a text input
    if (e.target.type === "text") {
        var data = e.clipboardData.getData("text");
        // split clipboard text into single characters
        data = data.split("");
        // find all other text inputs
        inputs.forEach((input, index) => {
            // And set input value to the relative character
            input.value = data[index];
        });
    }
    form.submit();
    console.log(`form submitted`);
});
