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
// console.log(count);

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
// console.log(aCount);
// console.log(countA);

///////////////////////////////////////////////////////////////

/*
Task-3:
Check whether a string contains all the vowels a, e, i, o, u
*/

let vowelString = `I am learning Web Development`;
let loweCaseString = vowelString.toLocaleLowerCase();
let vowel = `aeiou`;
let existingVowel = "";
for (character of vowel) {
  if (loweCaseString.includes(character)) {
    existingVowel += character;
  }
}
if (existingVowel !== vowel) {
  // console.log("Doesn't contain all vowel");
} else {
  // console.log("Contain all vowel");
}

////////////////////////////////////////////////////////////////

/*
Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.
Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
*/

let replaceString = `X-ray has been soo expensive. AXes become priceless. Exes become rootless.`;
// console.log(replaceString);
for (char of replaceString) {
  if (char.includes("X")) {
    replaceString = replaceString.replace("X", "Y");
  } else if (char.includes("x")) {
    replaceString = replaceString.replace("x", "y");
  }
}
// console.log(replaceString);

/*
Task-5:
Capitalize Every first Letter of each word in a String
*/

let sentence = `i am a hablu. hoye thaki paglu. na khai, na ghumai. ebhabei jay somoy`;
let splitSentence = sentence.split(" ");
let capitalizeSentence = "";
for (eachWord of splitSentence) {
  let firstLetter = eachWord[0].toUpperCase();
  let sliceWord = eachWord.slice(1);
  let fullWord = firstLetter.concat(sliceWord);
  capitalizeSentence = capitalizeSentence + " " + fullWord;
}
console.log(capitalizeSentence.trim());
