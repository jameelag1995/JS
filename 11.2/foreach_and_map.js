let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* -------------------------------------------------------------------------- */
/*                                     Q1                                     */
/* -------------------------------------------------------------------------- */
const doubledNums = nums.map((val) => 2 * val);
console.log(`doubled numbers: ${doubledNums}`);

/* -------------------------------------------------------------------------- */
/*                                     Q2                                     */
/* -------------------------------------------------------------------------- */
const EvenNums = [];
nums.forEach((num) => {
    if (num % 2 == 0) {
        EvenNums.push(num);
    }
});
console.log(`Even Numbers: ${EvenNums}`);

/* -------------------------------------------------------------------------- */
/*                                     Q3                                     */
/* -------------------------------------------------------------------------- */
function showFirstAndLast(arr) {
    const newArr = [];
    arr.forEach((element, index) => {
        let newStr = "";
        if (index == 0 || index == arr.length - 1) {
            newArr.push(newStr + arr[index]);
        }
    });
    return newArr;
}
console.log("showFirstAndLast:", showFirstAndLast(nums));

/* -------------------------------------------------------------------------- */
/*                                     Q4                                     */
/* -------------------------------------------------------------------------- */
function vowelCount(str) {
    const vowelCountobj = {};
    const vowels = ["a", "e", "i", "o", "u"];
    str = str.toLowerCase();
    const strArr = str.split("");
    strArr.forEach((char) => {
        if (vowels.includes(char)) {
            if (vowelCountobj[char]) {
                vowelCountobj[char]++;
            } else {
                vowelCountobj[char] = 1;
            }
        }
    });
    return vowelCountobj;
}

console.log("vowel Count:", vowelCount("Hello World"));

/* -------------------------------------------------------------------------- */
/*                                     Q5                                     */
/* -------------------------------------------------------------------------- */
function capitalize(str) {
    const strArr = str.split("");
    return strArr.map((char) => char.toUpperCase()).join("");
}
console.log("Capitalize:", capitalize("this is how we do"));

/* -------------------------------------------------------------------------- */
/*                                     Q6                                     */
/* -------------------------------------------------------------------------- */
function shiftLetters(str){
    let newStr = str.split('').map(char => {
        if (char > 'a' && char <= 'z') {
          const shiftedChar = String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) - 1) % 26) + 'a'.charCodeAt(0));
          return shiftedChar;
        }else if(char == 'a'){
            return 'z';
        }
         else {
          return char;
        }
      }).join('');
      return newStr;
}
console.log('Shift Letters:',shiftLetters('abcxyz'));
