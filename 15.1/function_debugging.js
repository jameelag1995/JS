function getSum(arr1, arr2) {
    let sum = 0;
    arr1;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
}
getSum([1, 2, 3], [(5, 66, 23)]);

/* ----------------------------------- Q1 ----------------------------------- */
// line 11 getSum([1, 2, 3][(5, 66, 23)]); wrong way of passing arguments
// we have a problem in line 4 arr1 is undefined (first for loop)
// the other problem we have is that sum is set to constant (assignment to constant variable)
/* ----------------------------------- Q2 ----------------------------------- */
// I used JS repl
/* ----------------------------------- Q3 ----------------------------------- */
// we have a problem with the values we passed to the getSum function they are not separated by colon so the function reads the arguments in a wrong way
// we can't change const sum
