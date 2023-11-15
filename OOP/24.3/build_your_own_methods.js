/* --------------------------------- Filter --------------------------------- */
Array.prototype.myFilter = function (callback) {
    const newArr = [];
    for (element of this) {
        if (callback(element)) {
            newArr.push(element);
        }
    }
    return newArr;
};
const arr = [1, -2, 17, 20, 100, 0];
const newArr = arr.myFilter((element) => element > 17);
console.log(
    "filter method - return new array with all elements larger than 17:",
    newArr
);

/* ---------------------------------- Find ---------------------------------- */
Array.prototype.myFind = function (callback) {
    for (element of this) {
        if (callback(element)) {
            return element;
        }
    }
    return "no such element";
};

const newArr2 = arr.myFind((element) => element > 3);
console.log("find method - first element larger than 3:", newArr2);

/* --------------------------------- Reduce --------------------------------- */
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    const startingIndex = initialValue === undefined ? 1 : 0;
    for(let i = startingIndex; i<this.length;i++){
        accumulator = callback(accumulator,this[i],i,this);
    }
    return accumulator;
};
const arr2 = [1,2,3,4,5];
let output = arr2.myReduce((accumulator,currValue)=>{
    return accumulator + currValue;
});
console.log(output);