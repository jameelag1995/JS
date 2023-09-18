let language = prompt ("Enter the Language Below")
let isIsland = prompt ("Is it an Island? true/false Enter Below")
let population = prompt ("Enter the Country's Population Below")
let country = prompt("Enter the Country Below")
let sarahLanguage = 'english';
let sarahPopulation = 50000000;
let sarahIsIland = 'false';

if (sarahLanguage === language.toLowerCase() && sarahIsIland === isIsland && sarahPopulation > parseInt(population) ){
    console.log(`You should live in ${country}.`);
}
else{
    console.log(`${country} does not meet your criteria.`);
}