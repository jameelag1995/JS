function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/* ----------------------------------- Q1 ----------------------------------- */
// we have problem in line 2 return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
/* ----------------------------------- Q2 ----------------------------------- */
// JS REPL
/* ----------------------------------- Q3 ----------------------------------- */
// indexes in an array start from 0 so to get even cells we need to start from arr[1] and add two every time to the index to stay in even cell this also causes a problem when calling arr[10] since there is no such index if we start from 0 the last cell would be arr[9]
