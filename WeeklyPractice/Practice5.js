function reverseString(str){
return str.split("").reverse().join("")
}

console.log(reverseString("Rewant"));


// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// reverseString("hello");

function isPalindrome(str1){
    return str1===str1.split("").reverse().join("")
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("rahul"));
