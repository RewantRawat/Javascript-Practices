
// console.log('fffff');

// setTimeout(()=>{
//     console.log("hello");

// },5000)

// console.log('ffffff');

// function delayTask(callback){
// console.log("Starting...");

// setTimeout(()=>{
//     callback("Done after 2 seconds")
// },2000)
// }

// delayTask((msg)=>{
//     console.log(msg);

// })


// function printNumber(num) {
//     console.log("Number:", num);

// }

// let n = 1

// setTimeout(() => {
//     printNumber(n)
//     n++
// }, 1000)


// function repeatTask(callback) {
//     let count = 0
//     const id = setInterval(() => {
//         count++;
//         console.log("Count", count);

//         if (count === 5) {
//             clearInterval(id)
//             callback("Interval finished after 5 repeats")
//         }
//     }, 1000)
// }


// repeatTask((msg) => console.log(msg));


function clearTasks(callback1) {
    let count = 10
    const id = setInterval(() => {
        count--;
        console.log("Count", count);
        if (count === 0) {
            clearInterval(id)
            callback1("Intercal finsihed after count becomes 0")
        }

    },2000)
}

clearTasks((msg)=>console.log(msg));
   

function map(arr,callback){
    let result = []

    for(let i = 0;i<arr.length;i++){
        result.push(callback(arr[i],i,arr.slice()))
    }
    return result
}

function reduce(arr,initialValue,callback){
let acc = initialValue
let startIndex=0

if(initialValue===undefined){
    acc=arr[0]
    startIndex=1
}
for(let i=0;i<arr.length;i++){
    acc = callback(acc,arr[i],i,arr)
}
}