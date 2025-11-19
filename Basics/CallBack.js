// let value = 1

// doSomething(() => {
//     value = 2
// })
// console.log(value);

//create a function which first paramter is array and second it takes a call back and returns  a array with same length basically create map functionality in this

//Map functionality using callback
function CustomMap(arr, callback) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr.slice()))
    }

    return result
}

const numbers = [1, 2, 3, 4, 5, 6]

const doubled = CustomMap(numbers, (num, i, arr) => {

    if (i === 0) {
        arr.pop()
    }
    console.log("array", arr);

    return num * 2

})

console.log(doubled);


//Filter functionality using callback
function CustomFilter(arr, callback) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result
}

const myNumbers = [1, 2, 3, 4, 5,6,7,8]
const even = CustomFilter(myNumbers, (num) => {
    return num % 2 === 0
})
console.log("even",even);

const odd = CustomFilter(myNumbers, (num) => {
    return num % 2 !== 0
});
console.log("odd",odd);

