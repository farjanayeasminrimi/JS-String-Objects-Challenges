/*Task-1:
Count how many times a string has the letter a
*/
let fullName = `Farjana Yeasmin Rimi & Ahasan`;
let count = 0;
for (let letter of fullName) {
  // console.log(letter.includes("a"));
  if (letter.includes("a") === true) {
    count++;
  }
}
console.log(count);

////////////////////////////////////////////////////////////

/*Task-2:
Count how many times a string has the letter a or A
*/
let aCount = 0;
let countA = 0;
for (letter of fullName) {
  if (letter.includes("a") === true) {
    aCount++;
  } else if (letter.includes("A") === true) {
    countA++;
  }
}
console.log(aCount);
console.log(countA);

/*
Task-3:
Check whether a string contains all the vowels a, e, i, o, u
*/

/*
Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.
Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
*/

/*
Task-5:
Capitalize Every first Letter of each word in a String
*/
