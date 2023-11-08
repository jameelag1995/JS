const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit-btn');
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
form.addEventListener('submit',e =>{
    e.preventDefault();
    alert(`Username: ${username.value} \n Email: ${email.value}\n Password: ${password.value}`);

})
