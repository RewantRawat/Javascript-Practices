// const name = "khushi"
// const age = "23"

// console.log(`hello ${name},my age is ${age}`)
// console.log(" hello " + name + "my age is"+age);

// //datatypes

// //primitive datatypes
// // Number string boolean Symbol, bignint undefined

// // //reference

// // array objects functions


// const marks = [97,55,67,89,76,66]
// console.log(marks);
// console.log(marks.length);


const heros = ["thor","hulk","vm","super"]
let cities = ["jaipur","panipat","delhi","guragaon","pune"]
// console.log(heros[2]);

console.log(cities);

for(let i=0;i<heros.length;i++){
    console.log(heros[i]);
    }

    for(let i=0;i<cities.length;i++){
        console.log(cities[i]);
        
    }
    // for(let city of cities){
    //     // console.log(city);
    //      console.log(city.toUpperCase());
        
    // }

    let marks = [85,97,54,37,76,60]

    let sum =0

    for(let val of marks){
        sum += val
    }

    let average=sum/marks.length
    console.log(`Average marks of students of class ${average}`);
    
// for(let hero of heros){
//     console.log(hero);
    
// }
let arr = [50,50,50,50,50]
let sum1 = 0

for(let value of arr){
    sum1 += value
}

let avg = sum1/arr.length
console.log(avg);



// const sum1 = 0

// for(let ar of arr){
//     sum1 += ar
// }

// console.log(sum1);

//ARRAY METHOS//

//1.POP=REMOVE ELEMNT FROM END
//2.PUSH=ADD TO END
//3.TOSTRING=CONVERT ARRAY IN STRING
//4.CONCAT=JOINS MULTIPLE ARAYS & RETURN RESULT
//5.UNSHIFT=ADD TO START
//6.SHIFT=DELETE FROM START & RETURN
//7.SLICE=RETURNS THE PEICE OF ARRAY
//8.SPLICE=CHANGE ORIGINAL ARRAY(ADD,REMOVE,REPLACE)

const foodItems  = ["apple","potato","litchi"]

foodItems.push("guavava","roots")

console.log(foodItems);
console.log(foodItems.toString());
const deletedItems = foodItems.pop()
console.log(deletedItems);
const deletedItems1 = foodItems.pop()
console.log(deletedItems1)


let marvel_heros = ["thor","spiderman","ironamn","spiderman","dr strange"]
console.log(marvel_heros);

console.log(marvel_heros.slice(1,3));

let array = [1,2,3,4,5,6,7]
console.log(array.splice(2,4));
// console.log(array.splice(2));
console.log(array);

//PRACTICE
const companies = ["Bloomberg","microsoft","Uber","Google","IBM","Netflix"]
// console.log(companies.shift());
// console.log(companies);
// console.log(companies.push("Amazon
// console.log(companies);

console.log(companies.splice(2,1,"OLA"));
console.log(companies);






// const val = marvel_heros.shift()

// console.log("deleted items",val);


// let dc_heros = ["superman","batman"]
// let indian_heros=["shaktiman","krish"]
// let heross = marvel_heros.concat(dc_heros,indian_heros)
// console.log(heross);
