/* -------------------------------------------------------------------------- */
/*                                   filter  for arrays                                 */
/* -------------------------------------------------------------------------- */
function myFilter(originalArray, callback) {
    const newArr = [];
    for (const element of originalArray) {
        if (callback(element)) {
            newArr.push(element);
        }
    }
    return newArr;
}

const nums = [3, 4, 6, 7];
const bigger = (n) => {
    return n > 5;
};
console.log("original array:", nums);
console.log("array filter:", myFilter(nums, bigger));
/* -------------------------------------------------------------------------- */
/*                                     map for arrays                                   */
/* -------------------------------------------------------------------------- */
function myMap(originalArray, callback) {
    const newArr = [];
    for (const element of originalArray) {
        newArr.push(callback(element));
    }
    return newArr;
}
const square = (n) => {
    return n * n;
};
console.log("*****");
console.log("original array:", nums);
console.log("array map:", myMap(nums, square));

/* -------------------------------------------------------------------------- */
/*                               filter objects                               */
/* -------------------------------------------------------------------------- */
function myObjFilter(obj, callback) {
    const newObj = {};
    for (const key in obj) {
        if (callback(obj[key])) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

const myobj = {
    name: "jameel",
    age: 28,
    address: "52street",
};
const test = (prop) => {
    return prop > 30 || prop.length > 7;
};
console.log("*****");
console.log("original object:", myobj);
console.log("object filter:", myObjFilter(myobj, test));

/* -------------------------------------------------------------------------- */
/*                                 map for objects                                */
/* -------------------------------------------------------------------------- */
function myObjMap(obj, callback) {
    const newObj = {};
    for (const key in obj) {
        newObj[key] = callback(obj[key]);
    }
    return newObj;
}

const test2 = (prop) => {
    return typeof prop;
};
console.log("*****");
console.log("original object:", myobj);
console.log("object Map:", myObjMap(myobj, test2));
