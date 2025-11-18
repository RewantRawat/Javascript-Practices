
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


