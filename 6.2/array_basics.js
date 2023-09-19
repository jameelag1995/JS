let people = ["Greg", "Mary", "Devon", "James"];

// Q.1
people.shift();
console.log(people);
// Q.2
people.pop();
console.log(people);

// Q.3
people.unshift("Matt");
console.log(people);
// َQ.4
people.push("Jameel");
console.log(people);
// Q.5
console.log(people.slice(2));
// Q.6
console.log(people.indexOf("Mary"));
// Q.7
console.log(people.indexOf("Foo")); //it returns -1 if it's not present
// Q.8
console.log(people);
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);
// Q.9
let withBob = people.concat("Bob");
console.log(withBob);
