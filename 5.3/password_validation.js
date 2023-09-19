// const password = prompt('Enter your password below');
const password = 'Ajb@332';
let score = 0;
if (password.length >7){
    score +=1;
}

(password.length > 7) ? score+=1 : null;
/[A-Z]/.test(password) ? score+=1 : null;
/[a-z]/.test(password) ? score+=1 : null;
/[0-9]/.test(password) ? score+=1 : null;
/[!"#$%&’()*+,-./:;<=>?@[]^_`{|}~]/.test(password) ? score+=1 : null;
if(password.length > 7 && score >=4){
    console.log('Very Strong Password');
}else if(password.length == 7 && score <= 4){
    console.log('Strong Password');
}
else{
    console.log('Weak Password');
}
