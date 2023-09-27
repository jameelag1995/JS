function calcAverage(arr) {
    var sum;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
calcAverage([85, 90, 92]);

/* ----------------------------------- Q1 ----------------------------------- */
// the bug is in line 6 return sum;
/* ----------------------------------- Q2 ----------------------------------- */
// JS REPL
/* ----------------------------------- Q3 ----------------------------------- */
// we are returning the sum of the numbers so we forgot the step were we need to divide by the arr.length
