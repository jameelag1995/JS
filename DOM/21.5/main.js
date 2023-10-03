document.querySelector("#displayButton").addEventListener("click", function () {
    const n = parseInt(document.querySelector("#inputNumber").value);
    const outputContainer = document.querySelector("#output");
    outputContainer.innerHTML = "";
    if (!isNaN(n) && n > 0) {
        for (let i = 0; i < n; i++) {
            const img = document.createElement("img");
            img.src = "./smiley.png"; // Replace with the image URL you want to display
            outputContainer.appendChild(img);
        }
    } else {
        const notif = document.createElement("h3");
        notif.innerText = "invalid input! please enter a positive number.";
        notif.style.color = "red";
        outputContainer.appendChild(notif);
    }
});
