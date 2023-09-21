function tellFortune(jobTitle,location,partnerName,numberOfChildren){
    return `You will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children.`
}
let programmer = tellFortune('programmer','New York','Rana',2);
console.log(programmer);