function findSmallest(a, b, c) {
  if (a > c && b>c) {
    return c;
  } else if (a > b && c > b) {
    return b;
  } else {
    return a;
  }
}
console.log(findSmallest(1, 66, 2));

/* ----------------------------------- Q1 ----------------------------------- */
// line 10 contains the problem the name of the functions is spelled wrong findSmalest(1, 66, 2)
// line 2 if (a > b >c)the other problem is with the conditions in the first condition for example b doesn't have to be smaller than a in order for c to be the smallest number the same happens with the second condition
/* ----------------------------------- Q2 ----------------------------------- */
// JS REPL
/* ----------------------------------- Q3 ----------------------------------- */
// findSmalest is not defined we need to write findSmallest instead
// we need to change the condition to something that makes more sense like c < a and c<b then c is smallest 