function isString(str, callback) {
    if (typeof str === "string") {
        return callback(str);
    }
    return -1;
}
function printStr(str) {
    console.log(str);
}
isString("Hello", printStr);

function firstWordUpperCase(str, callback) {
    const strArr = str.split(" ");
    strArr[0].toUpperCase();
    let newStr = callback(strArr);
    return newStr;
}
function dashesBetweenWords(arr) {
    let str = arr.join("-");
    return str;
}
console.log(firstWordUpperCase("hello world wassup!", dashesBetweenWords));

function allWordsUpperCase(str, callback) {
    const strArr = str.split(" ");
    let newStr = callback(strArr);
    return newStr;
}
function arrOfStringsToUpperCase(arr) {
    const newArr = [];
    for (let word of arr) {
        newArr.push(word.toUpperCase());
    }
    return newArr.join(" ");
}

console.log(
    allWordsUpperCase(
        allWordsUpperCase("hello world wassup!", arrOfStringsToUpperCase),
        dashesBetweenWords
    )
);
