/* ----------------------------------- Q1 ----------------------------------- */
console.log(typeof this);
/* --------------------------------- answer --------------------------------- */
//prints empty brackets

/* ----------------------------------- Q2 ----------------------------------- */
const myObj = {
    name: "Timmy",
    greet: function () {
        //instead of ()=>{
        console.log(`Hello ${this.name}`);
    },
};
myObj.greet();
/* --------------------------------- answer --------------------------------- */
//prints Hello undefined because in arrow functions this refers to the window of the browser
// to fix this we just need to change greet to be a normal function as greet: function(){console.log(`Hello ${this.name}`);}

/* ----------------------------------- Q3 ----------------------------------- */
const myFuncDec = function () {
    console.log(this);
};
/* --------------------------------- answer --------------------------------- */
// it will point to the global object (window in case of browser) because there is no other object this can refer to

/* ----------------------------------- Q4 ----------------------------------- */
const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();
/* --------------------------------- answer --------------------------------- */
// it prints empty brackets because this refers to the window of the browser so

/* ----------------------------------- Q5 ----------------------------------- */
document.querySelector(".element").addEventListener(function() { //instead of ()=>{}
    console.log(this);
});
/* --------------------------------- answer --------------------------------- */
// here it will also refer to the window because we have it inside an arrow function
// after we fix it this will refer to the elements with .element class