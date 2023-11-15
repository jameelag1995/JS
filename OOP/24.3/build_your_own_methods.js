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
console.log('filter method - return new array with all elements larger than 17:',newArr);

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
console.log('find method - first element larger than 3:',newArr2);

/* --------------------------------- Reduce --------------------------------- */
Array.prototype.myReduce = function(callback,startValue = this[0]){
    
}