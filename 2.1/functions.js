function countryInfo (country,population,capitalCity){
    return `${country} has ${population} people and it's capital city is ${capitalCity}.`
}
let spain = countryInfo('Spain', '47 Million', 'Madrid');
let colombia = countryInfo('Colombia', '51.5 Million', 'Bogota');
let germany = countryInfo('Germany', '83 Million', 'Berlin');
console.log(spain);
console.log(colombia);
console.log(germany);