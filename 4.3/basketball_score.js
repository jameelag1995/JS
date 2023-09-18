let johnFirst = 110;
let johnSecond = 120;
let johnThird = 105;
let mikeFirst = 116;
let mikeSecond = 94;
let mikeThird = 124;
let maryFirst = 94;
let marySecond = 134;
let maryThird = 105;
let johnTotal = johnFirst + johnSecond + johnThird;
let mikeTotal = mikeFirst + mikeSecond + mikeThird;
let maryTotal = maryFirst + marySecond + maryThird;
let johnavg = johnTotal / 3;
let mikeavg = mikeTotal / 3;
let maryavg = maryTotal / 3;
if (johnavg > mikeavg && johnavg > maryavg) {
  console.log(`John's Team is the Winner with Average Points ${johnavg}`);
} else if (johnavg < mikeavg && maryavg < mikeavg) {
  console.log(`Mike's Team is the Winner with Average Points ${mikeavg}`);
} else if (johnavg < maryavg && maryavg > mikeavg) {
  console.log(`Mary's Team is the Winner with Average Points ${maryavg}`);
} else {
  console.log(`There is a Draw with Average Points ${johnavg}`);
}
