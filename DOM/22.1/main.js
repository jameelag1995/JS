const form = document.querySelector("form");
const nameInput = document.querySelector("#nameinput");
const ageInput = document.querySelector("#ageinput");
const emailInput = document.querySelector("#emailinput");
const termsInput = document.querySelector("#termsinput");
const btninput = document.querySelector("#submitinput");

// popup
const popup = document.createElement("div");
const confirmbtn = document.createElement("button");
const changeinfobtn = document.createElement("button");
const confirmationmsg = document.createElement("h3");
popup.classList.add("popup");
confirmationmsg.innerText = " Are You Sure You Want To Submit?";
confirmbtn.innerText = "Confirm";
changeinfobtn.innerText = "Change Info";
confirmbtn.addEventListener("click", () => form.submit());
changeinfobtn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.remove();
});
popup.append(confirmationmsg, confirmbtn, changeinfobtn);

const formData = {};
btninput.addEventListener("click", (e) => {
    formData.Name = nameInput.value;
    formData.age = ageInput.value;
    formData.email = emailInput.value;
    formData.terms = termsInput.checked;
    displayFormData();
    form.insertAdjacentElement("afterbegin", popup);
    e.preventDefault();
});
let displayedName = document.createElement("p");
let displayedAge = document.createElement("p");
let displayedEmail = document.createElement("p");
let displayedAgreedToTerms = document.createElement("p");
function displayFormData() {
    displayedName.innerText = "Name :" + formData.Name;
    displayedAge.innerText = "age :" + formData.age;
    displayedEmail.innerText = "email :" + formData.email;
    displayedAgreedToTerms.innerText = "agree to terms ? :" + formData.terms;
    confirmationmsg.insertAdjacentElement("afterend", displayedAgreedToTerms);
    confirmationmsg.insertAdjacentElement("afterend", displayedEmail);
    confirmationmsg.insertAdjacentElement("afterend", displayedAge);
    confirmationmsg.insertAdjacentElement("afterend", displayedName);
}
