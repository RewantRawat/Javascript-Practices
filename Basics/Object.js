
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
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user!");
    
}
console.log(JsUser.greeting);
