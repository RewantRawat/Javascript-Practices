console.log("Harsh", "teach how to code");

const a = 45
const b = 2
const c = 10
const result = a * b - c
console.log(result);

const square = Math.sqrt(12)
console.log(square);

const arr = [1, 2, 3, 4, 5]
const doubled = arr.map(n => n * 2)
console.log(doubled);

// const evenNumbers = arr.filter(n=>n%2===0)
// console.log(evenNumbers);

// const sum = arr.reduce((acc,cum)=>acc+cum,0)
// console.log(sum);

const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Neha" },
    { id: 3, name: "Amit" }
];

const names = users.map(u => u.name)
console.log(names);

const nums = ["10", "20", "30"];
const converted = nums.map(Number)
console.log(converted);


const fruits = ["apple", "banana", "orange"];
const indexes = fruits.map((fruit, index) => `${index}-${fruit}`)
console.log(indexes);


const marks = [20, 30, 80, 89, 22, 68]
const passedStd = marks.filter(m => m <= 50)
console.log(passedStd);

const nums1 = [1, 2, 2, 3, 4, 4];
const unique = nums1.filter((num, index, arr) => arr.indexOf(num) === index)
console.log(unique);

const cart = [
    { item: "Shirt", price: 500 },
    { item: "Shoes", price: 2500 },
    { item: "Cap", price: 300 }
];

const total = cart.reduce((sum, item) => sum + item.price, 0)
console.log(total);

const fruits1 = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits1.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1
    return acc;
}, {})
console.log(count);


const userss = [
    { id: 1, name: "Rahul", age: 17 },
    { id: 2, name: "Neha", age: 22 },
    { id: 3, name: "Amit", age: 19 },
];

const updatedUsers = userss.map(user => ({
    id: user.id,
    name: user.name,
    isAdult: user.age >= 18
}))

console.log(updatedUsers);
