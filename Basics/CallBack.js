// let value = 1

// doSomething(() => {
//     value = 2
// })
// console.log(value);

//create a function which first paramter is array and second it takes a call back and returns  a array with same length basically create map functionality in this

//Map functionality using callback

// function CustomMap1(arr,callback){
//     let result = []

//     for(let i = 0;i<arr.length;i++){
//         result.push(callback(arr[i],i,arr.slice()))
//     }
//     return result
// }

// const numbers1 = [1,2,3,4,5,6]
// const doubled1 = CustomMap1(numbers1,(num)=>num*2)
// console.log(doubled1);

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

function map(arr, callback1) {
    let results = []
    for (let i = 0; i < arr.length; i++) {
        results.push(callback1(arr[i], i, arr.slice()))
    }
}
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

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8]

const even = CustomFilter(myNumbers, (num) => {
    return num % 2 === 0
})
console.log("even", even);

const odd = CustomFilter(myNumbers, (num) => {
    return num % 2 !== 0
});
console.log("odd", odd);

//Reduce functionality//
function reduse(arr,initialValue,callback){
    let acc = initialValue
    let startIndex = 0;

    if(initialValue===undefined){
        acc=arr[0]
        startIndex = 1
    }
    for(let i = 0;i<arr.length;i++){
        acc = callback(acc,arr[i],i,arr);
    }
    return acc
}

// function CustomReduce(arr, callback, initialValue) {
//     let acc = initialValue;
//     let startIndex = 0;


//     if (initialValue === undefined) {
//         acc = arr[0];
//         startIndex = 1;
//     }

//     for (let i = startIndex; i < arr.length; i++) {
//         acc = callback(acc, arr[i], i, arr);
//     }

//     return acc;
// }
// function reduce(arr,callback,initialValue){
//     let acc = initialValue
//     let startIndex = 0;

//     if(initialValue===undefined){
//         acc=arr[0]
//             startIndex=1
        
//     }
//     for(let i = 0;i<arr.length;i++){
//         acc=callback(acc,arr[i],i,arr)
//     }
//     return acc
// }
const nums = [1, 2, 3, 4];

const sum = CustomReduce(nums, (acc, curr) => acc + curr, 0);

console.log(sum); // 10
// function filtering(arr,callback){
//     let result = []

//     for(let i =0;i<arr.length;i++){
//         if(callback(arr[i],i,arr)){
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// const tinderUser = {}

// tinderUser.id= "abcd1234"
// tinderUser.name="Nicola"
// tinderUser.isLoggedIn = false

// function sdd(callback,arr){
//     let result = []

//     for(let i = 0;i<arr.length;i++){
//         result.push(callback(arr[i],i,arr.slice()))
//     }
//     return result
// }

//Map functionlity
// function map(arr, callback) {
//     let result = []

//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i], i, arr.slice))
//     }
//     return result
// }

// function map(callback,arr){
//     let res = []

//     for(let i = 0;i<arr.length;i++){
//         result.push(callback(arr[i],i,arr.slice()))
//     }
//     return result
//

// function filtermethod(arr,callback){
//     let result = []
//     for(let i = 0;i<arr.length;i++){
//         if(callback(arr[i],i,arr)){
//             result.push(arr[i])
//         }
//     }
// }

// function mamethod(arr,callback){
//     let result=[]

//     for(let i = 0;i<arr.length;i++){
//         result.push(callback(arr[i],i,arr.slice()))
//     }
//     return result
//

// const map(arr,callback){
//     let result = []
//     for(let i = 0 ;i<arr.length;i++){
//         result.push(callback(arr[i],i,arr.slice()))
//     }
//     return result
// }

// const filter(arr,callback){
//     let result=[]
//     for(let i =0;i<arr.length;i++){
//         if(callback(arr[i],i,arr)){
//             result.push(arr[i])
//         }
//     }
// }


function map(arr,callback){
    let result=[]

    for(let i =0;i<arr.length;i++){
        result.push(callback(arr[i],i,arr.slice()))
    }
    return result
}

function filer(arr,callback){
    let result = []
    for(let i =0;i<arr.length;i++){
        if(callback(arr[i],i,arr)){
            result.push(arr[i])
        }
    }
    return result
}

function reduce(arr,initialValue,callback){
let acc = initialValue;
let startIndex = 0

if(initialValue===undefined){
    acc=arr[0]
    startIndex=0
}
for(let i =0;i<arr.length;i++){
    acc = callback(acc,arr[i],i,arr)
}
return acc
}