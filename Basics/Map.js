//MAP METHOD//
//map is a higher-order function that applies a given function to each element of a collection, e.g. a list or set, returning the results in a collection of the same type//

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums
    .map((num) => num * 10)
    .map((num) => num + 2)
    .filter((num) => num > 40)
console.log(newNums);

// const newNums = myNums.map((num) => {return num+10})
// console.log(myNums);

// console.log(newNums)

// const forNums = myNums.forEach((d)=>d+11)
// console.log(forNums);


//***FOREACH IS ONLY FOR LOOPING OVER AN ARRAY IT IS NOT FOR CREATING A NEW ARRAY ***/


//CONVERT ARRAY IN STRING//
const numbers = [1, 2, 3, 4, 5]
const stringNums = numbers.map(String)
console.log(stringNums);
//CONVERT IN UPPERCASE
const names = ["rewant", "mohit", "deepanshu", "vishu"]
const newNames = names.map((nam) => nam.toUpperCase())
console.log(newNames);

//extract names from object
const users = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Sneha" },
    { id: 3, name: "Rewant" }
];

const nameOfUsers = users.map((u)=>u.name)
console.log(nameOfUsers);

//map with index values

const arr = ["a","b","c"]
const result = arr.map((item,index)=>`${index}:${item}`)
console.log(result);
