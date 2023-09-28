const numsArr = [50, 80, 75, 65, 90, 95, 97, 70, 78];

let max = numsArr.reduce(
    (maxVal, currVal) => Math.max(maxVal, currVal),
    -Infinity
);
console.log('reduce Max:',max);
let sum = numsArr.reduce((currSum, currVal) => currSum + currVal, 0);
console.log('reduce Sum:',sum);
let avg = numsArr.reduce(
    (currAvg, currVal) => currAvg + currVal / numsArr.length,
    0
);
console.log('reduce Avg:',avg);
console.log('normal Avg',sum/numsArr.length);
