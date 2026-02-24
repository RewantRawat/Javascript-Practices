//DEEP COPY & SHALLOW COPY//

// 1️⃣ Shallow Copy

// A shallow copy copies only the first level of the object.

// 👉 If the object contains nested objects or arrays, the nested data is still shared (reference is copied, not actual value).

const user = {
    name:"rewant",
    address:{
        city:"jaipur"
    }
}

const copyUser = {...user}
console.log("fdfdfdf",copyUser);


copyUser.name = "Amit";
copyUser.address.city = "Mumbai";

console.log(user);


// 2️⃣ Deep Copy

// A deep copy creates a completely independent copy of the object.

// 👉 Nested objects/arrays are also fully copied.


const user1 = {
  name: "Rewant",
  address: {
    city: "Delhi"
  }
};

// Deep copy using structuredClone (modern JS)
const deepCopyUser = structuredClone(user1);

deepCopyUser.address.city = "Mumbai";

console.log(user1);

// 🔹 1. Closures
// ✅ Definition:

// A closure is a function that remembers variables from its outer (lexical) scope even after the outer function has finished execution.

// a closure allows a function to access variables form the parent scope even after the parent scope iw executed//
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2