const form = document.querySelector('form');
const textarea = document.querySelector('textarea');
const input = document.querySelector('input');

let p = document.createElement('p');
textarea.addEventListener('input',e =>{
    if(e.target.value.length < 100){
        p.innerText = 'you need to write at least 100 letters';
    }else{
        p.innerText='';
    }
});
form.addEventListener('submit', e =>{
    e.preventDefault();
    form.append(p);
});
