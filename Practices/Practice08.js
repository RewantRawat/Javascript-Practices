//Find longest word in a sentence//

function longestWord(str) {
  return str.split(" ").reduce((long, word) =>
    word.length > long.length ? word : long
  , "");
}

console.log(longestWord("I am Rewant Learning js"));

//
const nums = [2, 4, 6, 1];

const sums = nums.reduce((a,b)=>a+b)
console.log(sums);

//Random password//

function randomPassword(len) {
  const chars = "abcdefghijklmnopqrstuvwxyz1234567890!@#$";
  let pass = "";
  for (let i = 0; i < len; i++) {
    pass += chars[Math.floor(Math.random() * chars.length)];
  }
  return pass;
}
console.log(randomPassword(8));

