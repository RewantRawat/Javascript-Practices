
const mySym = Symbol('Key1')

const JsUser = {
    name:"Hitesh",
    [mySym]:"myKey1",
    age:"19",
    email:"hitest123@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monaday","Saturday"]
}
// console.log(JsUser);

console.log(JsUser.email);
console.log(JsUser[mySym]);

JsUser.email = "hitesthgpt@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "hitesthmicrosoft@gmail.com" 
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user!");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user! ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



const tinderUser = {}

tinderUser.id= "abcd1234"
tinderUser.name="Nicola"
tinderUser.isLoggedIn = false

console.log(tinderUser);
