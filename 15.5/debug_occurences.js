function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter++;
        }
    }
    return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));
/* ----------------------------------- Q1 ----------------------------------- */
// problem in line 5 counter + 1;
/* ----------------------------------- Q2 ----------------------------------- */
// JS REPL
/* ----------------------------------- Q3 ----------------------------------- */
// we are not changing the counter and in order to do that  we need to write counter = counter + 1 or counter+=1 or counter++
