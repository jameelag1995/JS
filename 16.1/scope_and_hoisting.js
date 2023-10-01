/* -------------------------------------------------------------------------- */
/*                                   BLOCK 1                                  */
/* -------------------------------------------------------------------------- */

// OUTPUT
// undefined
// 2

// cause:
// a will be undefined because var is run first initialize a
// foo will run and returns 2 then print it

function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
funcA();

/* -------------------------------------------------------------------------- */
/*                                   BLOCK 2                                  */
/* -------------------------------------------------------------------------- */

// OUTPUT
// Aurelio De Rosa
// undefined

// cause:
// Aurelio De Rosa will be printed because obj.prop.getFullName() calls the object property method so it can see what obj's variables are
// undefined because this inside getfullname is no longer bound to the prop object but rather to the global context

var fullName = "John Doe";
var obj = {
    fullName: "Colin Ihrig",
    prop: {
        fullName: "Aurelio De Rosa",
        getFullName: function () {
            return this.fullName;
        },
    },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

/* -------------------------------------------------------------------------- */
/*                                   BLOCK 3                                  */
/* -------------------------------------------------------------------------- */

// OUTPUT
// undefined
// number

// cause:
// a is not defined outside the function
// a = ( b = 0 ) defines b as a global variable with value 0 so a number

function funcB() {
    let a = (b = 0);
    a++;
    return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

/* -------------------------------------------------------------------------- */
/*                                   BLOCK 4                                  */
/* -------------------------------------------------------------------------- */

// OUTPUT
// 2
// 2

// cause:
//because the last function overrides the one before

function funcC() {
    console.log("1");
}
funcC();
function funcC() {
    console.log("2");
}
funcC();

/* -------------------------------------------------------------------------- */
/*                                   BLOCK 5                                  */
/* -------------------------------------------------------------------------- */

// OUTPUT
// error e is not defined

// cause:
//because the console.log was done in the outside scope of the function

function funcD1() {
    d = 1;
}
funcD1();
console.log(d);
function funcD2() {
    var e = 1;
}
funcD2();
// console.log(e);

/* -------------------------------------------------------------------------- */
/*                                   BLOCK 6                                  */
/* -------------------------------------------------------------------------- */

// OUTPUT
// undefined
// 1

// cause:
// var f is executed at first but the assignment f=1 is done after the printing so it was still undefined 
// now funcE knows that f = 1 because var f= 1 was executed before the function

function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
