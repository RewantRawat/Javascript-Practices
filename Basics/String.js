const name = "Heena sharma"
const repoCount ="40"

console.log(`Helloo I am Mr.${name} and I am  ${repoCount} years old`);

const newName = new String("ninfvhf")
console.log(newName[1]);
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(4));
console.log(newName.indexOf("v"));


const newString = newName.substring(0,2)
console.log(newString);

const anotherString=newName.slice(-8,4)
console.log(anotherString);

// const newName1 = new String("hchchgr")

//Template literals

let name1 = "Rewant"
let score =95;

let result = `
student:${name1}
Score:${score}
Status:${score>20?"Top Performer":"Average"}
`

console.log(result);


