const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
// const food2 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

// My Method

let i = 0;
while (i < food1.length) {
  if (food2.includes(food1[i])) {
    console.log(`${food1[i]} is included: true`);
  } else {
    console.log(`${food1[i]} is included: false`);
  }
  i++;
}

// Shhady's Method

// // for(let i=0; i < food1.length; i++){
// //     if(food2.includes(food1[i])){
// //         console.log('true')
// //     } else{

// //     }
// //     }

// const matches = []
// for(let i=0; i < food1.length; i++){
//     for(let j=0; j < food2.length; j++){
//         if(food1[i] === food2[j]){
//             matches.push(food1[i])
//         }
// }
// }
// console.log(matches);
