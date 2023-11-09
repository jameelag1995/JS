/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

const usernameInput = document.getElementById("username");
const usernameErr = document.getElementById("usernameError");
const emailInput = document.getElementById("email");
const emailErr = document.getElementById("emailError");
const passwordInput = document.getElementById("password");
const passwordErr = document.getElementById("passwordError");
const confirmPasswordInput = document.getElementById("confirmPassword");
const confirmPasswordErr = document.getElementById("confirmPasswordError");
const form = document.getElementById("userForm");
/* -------------------------------------------------------------------------- */
/*                                  Variables                                 */
/* -------------------------------------------------------------------------- */

let isValid = true;

/* -------------------------------------------------------------------------- */
/*                                    Func                                    */
/* -------------------------------------------------------------------------- */

function displayErrorMsg(dist, msg) {
    dist.innerText = msg;
}
function hideErrorMsg(dist) {
    dist.innerText = "";
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

usernameInput.addEventListener("keyup", (e) => {
    if (e.target.value.length < 3) {
        displayErrorMsg(usernameErr, "name must be at least 3 characters long");
        isValid = false;
        return;
    } else {
        hideErrorMsg(usernameErr);
        isValid = true;
    }
});

emailInput.addEventListener("keyup", (e) => {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(e.target.value)) {
        displayErrorMsg(emailErr, "Please enter a valid email.");
        isValid = false;
        return;
    } else {
        hideErrorMsg(emailErr);
        isValid = true;
    }
});

passwordInput.addEventListener("keyup", (e) => {
    const re = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    if (!re.test(e.target.value)) {
        displayErrorMsg(
            passwordErr,
            "Password must be at least 8 characters long, containing lowercase, uppercase letters, numbers, and a special character."
        );
        isValid = false;
        return;
    } else {
        hideErrorMsg(passwordErr);
        isValid = true;
    }
});

confirmPasswordInput.addEventListener("keyup", (e) => {
    if (e.target.value !== passwordInput.value) {
        displayErrorMsg(confirmPasswordErr, "Passwords do not match.");
        isValid = false;
    } else {
        hideErrorMsg(confirmPasswordErr);
        isValid = true;
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (isValid) {
        form.reset();
        alert("Success!");
    } else {
        return;
    }
});
