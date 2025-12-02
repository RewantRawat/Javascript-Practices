function checkNumber(n) {
    return n % 2 === 0 ? "Even" : "Odd"
}

console.log(checkNumber(1));

function largestNumber(a, b, c) {
    return Math.max(a, b, c)
}
console.log(largestNumber(2, 3, 4));
console.log(largestNumber(10, 20, 5));

function reversestr(str) {
    return str.split("").reverse().join("")
}

console.log(reversestr("sky"));

function sortstr(str) {
    return str.split("").sort().join("")
}

console.log(reversestr("dcba"));


const arr = [1, 2, 3, 4, 5, 6]
const sum = arr.reduce((a, b) => a + b, 0)
console.log(sum);


//Custom map//
function myMap(arr, callback) {
    let temp = []

    for (let i = 0; i < arr.length; i++) {
        temp.push(callback(arr[i], arr, i))
    }
    return temp
}
console.log(myMap([1, 2, 3], x => x - 1));


//custom reduce//
function myReduce(arr, callback, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < arr.length; i++) {
        acc = callback(acc, arr[i]);
    }
    return acc;
}

console.log(myReduce([1, 2, 3], (a, b) => a + b, 0));


//custom filter//
function myFilter(arr, callback) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) temp.push(arr[i]);
    }
    return temp;
}

console.log(myFilter([1, 2, 3, 4], x => x % 2 === 0));

//class examples//

class Cart {
    constructor() {
        this.items = []
    }

    addItem(product, qty) {
        this.items.push({ product, qty })
    }

    removeItem(productName) {
        this.items = this.items.reduce.filter(item => item.product !== productName)
    }
    getTotal() {
        return this.items.reduce((sum, item) => {
            return sum + item.product.price * item.qty
        })
    }

}

const cart = new Cart()

const product1 = {name:"Laptop",price:40000}
const product2 =  {name:"TV",price:60000}

cart.addItem(product1, 1);
cart.addItem(product2, 2);

console.log("Cart:", cart.items);
console.log("Total:", cart.getTotal());
console.log(removeItem(product1));
