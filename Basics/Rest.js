//REST operator//
//The rest operator in JavaScript, denoted by three consecutive dots (...), is a feature introduced in ES6 (ECMAScript 2015) that allows you to collect an indefinite number of arguments into an array. It is primarily used in two contexts
//Rest = collect / group values//

const user = {
    name: "Rewant",
    age: "21",
    city: "Jaipur",
    country: "India"
}

const { name, ...others } = user
console.log(name);
console.log(others);

//DIFFERENCE BETWEEN SPREAD AND REST

//spread= expand data
//rest=collects data

const arr = [1, 2, 3, 4, 5, 6]
//spread
const newArr = [...arr, 6, 7]
//rest
const [first, ...remaining] = newArr
console.log(newArr);
console.log(first);
console.log(remaining);

const user1 = {
    name: "Deepanshu",
    address: {
        city: "jaipur",
        pincode: "302001"
    }
}

const updatedUser = {
    ...user,
    address:{
        ...user.address,
        city:"ajmer"
    }
}

console.log(updatedUser);



