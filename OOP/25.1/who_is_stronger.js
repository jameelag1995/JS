// const hero = {
//     health: 5,
//     power: 68,
//     getStrength: function () {
//         if (this.health <= 5) {
//             return this.power - 10;
//         } else return this.power;
//     },
// };
// function whoIsStronger(getStrength) {
//     const myStrength = 82;
//     if (getStrength() < myStrength) {
//         return "I am stronger";
//     } else return "You are stronger";
// }
// console.log(hero.getStrength());

// /* --------------------------------- Answer --------------------------------- */
// // the problem is that the using the function getStrength inside whoIsStronger then it would lose (this) so we need to bind it to hero I guess.

// /* ----------------------------------- fix ---------------------------------- */
// console.log(whoIsStronger(hero.getStrength.bind(hero)));

const hero = {
    health: 5,
    power: 68,
    getStrength: function (num) {
        console.log(num);
        if (this.health <= 5) {
            return this.power - 10;
        } else return this.power;
    },
};
const elad = {
    power:20
}
function whoIsStronger(getStrength,myThis) {
    console.log(getStrength());
    const myStrength = 82;
    if (getStrength.call(myThis,8) < myStrength) {
        return "I am stronger";
    } else return "You are stronger";
}

console.log(whoIsStronger(hero.getStrength,hero));


