const array = ["Hello", "Good Day", "YourWelcome", "hotdog", "hamburgers"];

function count_the_letters(arr) {
  const letterCount = {};
  let mostCommonLetter = "";
  let maxCount = 0;
  for (const str of arr) {
    const lowerCaseStr = str.toLowerCase();

    for (const char of lowerCaseStr) {
      if (/^[a-z]/.test(char)) {
        if (letterCount[char]) {
          letterCount[char]++;
        } else {
          letterCount[char] = 1;
        }

        if (letterCount[char] > maxCount) {
          mostCommonLetter = char;
          maxCount = letterCount[char];
        }
      }
    }
  }
  return { letterCount, mostCommonLetter, maxCount };
}

console.log(count_the_letters(array));
