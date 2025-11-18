const name = "Heena sharma"
const repoCount = "40"

console.log(`Helloo I am Mr.${name} and I am  ${repoCount} years old`);

const newName = new String("ninfvhf")
console.log(newName[1]);
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(4));
console.log(newName.indexOf("v"));


const newString = newName.substring(0, 2)
console.log(newString);

const anotherString = newName.slice(-8, 4)
console.log(anotherString);

// const newName1 = new String("hchchgr")

//Template literals

let name1 = "Rewant"
let score = 95;

let result = `
student:${name1}
Score:${score}
Status:${score > 20 ? "Top Performer" : "Average"}
`

console.log(result);


//String all methods//

//CHARAT()//

const sentence = "The brown colored fox jump over the obstacle"
const index = 16
console.log(`The character at index ${index} is  ${sentence.charAt(index)}`);
console.log(sentence.split(''));

//CONCAT()//
const str1 = "Hello"
const str2 = "world"

console.log(str1.concat(" ", str2));

console.log(str2.concat(" ", str1));

const a = "How"
const b = " are"
const c = " you"
const d = " Rewant?"

const abcd = a.concat(b, c, d)
console.log(abcd);

//INCLUDES()//  
const sentence1 = "The quick brown fox jumps over the lazy dog.";
const word = "fox"
console.log(`
    The word "${word}" ${sentence1.includes(word) ? "is" : 'is not'} in the sentence
    `)

const sentence2 = "where are you?"
console.log(sentence2.includes('are you?'));

const sentence3 = "I am MERN stack"
console.log(sentence3.includes("mern"));


//padEnd//

const strr = "Round Tables"
console.log(strr.padEnd(22, "$"));

//padStart()//
const strr1 = "Round Tables"
console.log(strr1.padStart(20, "*"));

//Replace()//

const paragraph = "Deepanshu have a normal skiils in mobile development"
console.log(paragraph.replace("normal", "great"));

const string1 = "Hello world"
console.log(string1.replace("world", "Javascript", ""))

let text = "apple, orange, apple";
let newText1 = text.replace("apple", "banana");
console.log(newText1);

let newText2 = text.replace(/apple/g, "banana");
console.log(newText2);


//Slice //
const str = "Rewant have very good knowledge of Javascript";
console.log(str.slice(23));
console.log(str.slice(3,22));
console.log(str.slice(-3));

//trim//

const greeting = "  Hello world  "
console.log(greeting);
console.log(greeting.trim());

//trimEnd//

const greeting1 = "   Hello world!   ";

console.log(greeting1);
// Expected output: "   Hello world!   ";

console.log(greeting1.trimEnd());
console.log(greeting1.trimStart());



//////PRACTICES ALL StRINGS METHODSS//////









