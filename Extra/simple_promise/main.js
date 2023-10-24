const triggerPromiseBtn = document.querySelector('#triggerPromise');
const checkBoxInput = document.querySelector('#triggerRejection');
const msgDiv = document.querySelector('#message');

triggerPromiseBtn.addEventListener('click',()=>{
    const prom = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(checkBoxInput.checked){
                resolve('The Promise has been resolved');
            }else{
                reject('The Promise has been rejected');
            }
        },1000);
    });
    prom.then((res)=>{
        msgDiv.innerText = 'Success';
        msgDiv.classList.remove("rejected");
        msgDiv.classList.add("resolved");
        console.log(res);
    })
    .catch((res)=>{
        msgDiv.innerText = 'Failed';
        msgDiv.classList.remove("resolved");
        msgDiv.classList.add("rejected");
        console.log(res);
    })
});