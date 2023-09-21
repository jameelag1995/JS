const worldPopulation = 7900;
function percentageOfWorld1(population){
    let percentage = (population/worldPopulation) * 100;
    return percentage;
}
let chinaPopulation = percentageOfWorld1(1400).toFixed(1);
let usaPopulation = percentageOfWorld1(340).toFixed(1);
let brazilPopulation = percentageOfWorld1(216).toFixed(1);
console.log(`China's population compared to the whole world is ${chinaPopulation}%`);
console.log(`USA's population compared to the whole world is ${usaPopulation}%`);
console.log(`Brazil's population compared to the whole world is ${brazilPopulation}%`);

const percentageOfWorld2 = (population) => (population/worldPopulation) * 100;

let chinaPopulation1 = percentageOfWorld2(1400).toFixed(1);
let usaPopulation1 = percentageOfWorld2(340).toFixed(1);
let brazilPopulation1 = percentageOfWorld2(216).toFixed(1);
console.log(`China's population compared to the whole world is ${chinaPopulation1}%`);
console.log(`USA's population compared to the whole world is ${usaPopulation1}%`);
console.log(`Brazil's population compared to the whole world is ${brazilPopulation1}%`);