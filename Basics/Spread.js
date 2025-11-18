//SPREAD OPERATOR//
//The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.//

function sum(x, y, z) {
    return x + y + z
}

const number = [1,2,3]
console.log(sum(...number));

const parts = ["shoulders","kness"]
const lyrics =["head",...parts,"nose","eyes"]
console.log(lyrics);

const a = [1,2,3]
const b = [4,5,6]
const c = [...a,...b]
console.log(c);

const user = {name:"Rewant",age:"22"}
const newUser ={...user,city:'Jaipur'}
console.log(newUser);


function sum(num1, num2 , num3) {
    console.log(num1 + num2 + num3);
}

let num1 = [1, 3, 4, 5];


sum(...num1);