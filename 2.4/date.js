function date() {
  let todaysDate = new Date();
  // day of th week
  let dayOfTheWeek = todaysDate.toLocaleDateString("default", {
    weekday: "long",
  });
  // day of the month
  let dayOfTheMonth = todaysDate.getDate();
  // month
  let month = todaysDate.toLocaleDateString("default", { month: "long" });
  // year
  let year = todaysDate.getFullYear();

  return `Today is ${dayOfTheWeek} the ${dayOfTheMonth} of ${month} ${year}`;
}
console.log(date());
