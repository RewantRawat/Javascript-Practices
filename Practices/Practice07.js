//Closures //
function outer() {
    let count = 0
    return function inner() {
        return ++count
    }
}

const a = outer()
console.log(a());
const b = outer()
console.log(b());


function createCounter(start) {
    let count = start
    return {
        increment: function () {
            count++
            return count
        },
        decrement: function () {
            count--;
            return count
        },
        reset: function () {
            reset = start
            return count
        },
        getValue: function () {
            return count
        }
    }
}
const counter = createCounter(10)

console.log(counter.getValue());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());


