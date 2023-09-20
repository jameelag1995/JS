function isLeapYear(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0 && year % 400 != 0) {
      console.log("This is not a leap year.");
    } else {
      console.log("it is indeed a leap year.");
    }
  } else {
    console.log("This is not a leap year.");
  }
}

isLeapYear(2012);
isLeapYear(2100);
isLeapYear(2400);
