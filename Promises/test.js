let prom = new Promise((resolve,reject)=>{
    let randnum =Math.random();
    if(randnum >0.5){
        resolve(randnum)
    }else{
        reject(randnum)
    }
    
});

prom.then((rndnum)=>{
console.log(`${rndnum} is larger than 0.5`);
})
.catch((rndnumn)=>{
    console.log(`${rndnumn} less than or equal to 0.5`);
})


