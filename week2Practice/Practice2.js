

function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}
console.log(countVowels("React Developer")); // 6


function firstUniqueChar(str) {
  for (let ch of str) {
    if (str.indexOf(ch) === str.lastIndexOf(ch)) {
      return ch;
    }
  }
}
console.log(firstUniqueChar("aabbcdde")); // c
