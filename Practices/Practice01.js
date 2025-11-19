//LOGIC FOR CALCULATOR//

function calculator(num1, num2, operator) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Error:Inputs must be numbers"
    }

    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2
        case "/":
            if (num2 === 0) return "Error:Cannot divide by zero"
            return num1 / num2

        default:
            return "Error:Invalid Operator"
    }
}

//TEST CASESS//
console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 5, "/"));
console.log(calculator(20, 20, "/"));
console.log(calculator(10, 5, "%"));

function reverseString(str) {
    return str.split("").reverse().join("")
}
console.log(reverseString("rewant"));


const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "py Course",
        price: 999
    },
    {
        itemName: "mobile dev Course",
        price: 4999
    },
    {
        itemName: "data science",
        price: 3999
    },
]

const calculatePrice = shoppingCart.reduce((acc, curr) => acc + curr.price, 0)
console.log(calculatePrice);

const setOfNumbers = [30, 23, 89, 9, 99, 89]
const largestNumber = setOfNumbers.reduce((acc, curr) => curr > acc ? curr : acc)
console.log(largestNumber);

const smallestNumbers = setOfNumbers.reduce((acc, curr) => curr < acc ? curr : acc)
console.log(smallestNumbers);

const mynum = [, 1, 2, 3, 4, 5].reduce((acc, curr) => acc + curr, 0)
console.log(mynum);

const arr = [0, null, undefined, "", 43, "hello"]
const cleaned = arr.filter(Boolean)
console.log(cleaned);

const users = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: true },
    { id: 4, active: false },
    { id: 5, active: true }
];

const activeUsers = users.filter(u => u.active)
console.log(activeUsers.length);


console.log(11 + 31);



function findLargestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3)
        return `${num1} is largest`
    else if (num2 >= num1 && num2 >= num3)
        return `${num2} is largest`

    return `${num3} is largest`
}

console.log(findLargestNumber(1,22,3));


function reverseString(str){
    return str.split("").reverse().join("")

}
console.log(reverseString("Rewant"));
