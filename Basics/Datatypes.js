//Datatypes

//Primitive Datatypes 

// 7 types:String,Number,Boolean,Null,Undefined,Symbol,Bigint

const score = 200
const scoreValue = 200.3

const isLoggedIn =false
const outsideTemp =null
let userEmail;

const id =Symbol("123")
const anotherId = Symbol("123")

console.log(id===anotherId);

const bigNumber=234765432565433n
//Reference Datatypes

//Array,Objects,Functions

const heros= ['shaktiman','dogra',"baba"]

 let obj = {
    name:"ravi",
    age:"22"
 }

 const myFunction = function(){
    console.log("Hello hello");
    
 }
 myFunction()

//  console.log(typeof scoreValue);

//STRING EXAMPLES

let name="Rewant"
let message="Hello world"

//Number 
let age = 20
let price = 100

//boolean 
let isLoggedInn = true;
let isAdmin = false;

//null
let data =null

//SYMBOL

let id1 = Symbol("id")
let id2 = Symbol("id")

console.log(id1===id2);

//object
let person = {
    name:"syam",
    age:"34"
}

//array
let fruits = ["apple", "banana", "mango"];
let cars = ["bmw","vw","ms"]

console.log(typeof 10);         
console.log(typeof "abc");      
console.log(typeof null);       
console.log(typeof undefined);  
console.log(typeof {});         
console.log(typeof []);        
console.log(typeof function(){}) 


 