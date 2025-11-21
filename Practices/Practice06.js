// const profile = {
//     name:"deeoanshu",
//     age:23,
//     city:"Jaipur",
//     job:{
//         post:"sr engineer",
//         salary:"23000k",
//         department:["hr","buisness"]
//     }

// }

// const {name:name,job:{post,salary},...data}=profile
// profile.name
// const info = profile.job.post
// console.log(name);
// console.log(info);


// const tuple = ["shira",23,"jaipur"]

// const profile2 = {...profile}


//ARRAY DESTRUCTURING//

const arr = [10,20,30]
const[a,b,c]=arr
console.log(a,b,c);

const nums = [1,2,3]
const[first,,third]=nums //skip values
console.log(first,third);

// const arr1 = [10];
// const [a = 1, b = 2] = arr1;
// console.log(a,b);

//Rest operator in array destructuring//

const arr1 = [1,2,3,4,5,6]
const[q,w,...rest]=arr1

console.log(q,w);
console.log(...rest);



// const user = {
//   name: "Rewant",

// };

// const {name:username,age=23
// }=user
// console.log(username,age);


const user = {
  name: "Rewant",
  address: {
    city: "Jaipur",
    pin: 302012
  }
};

const {address:{city,pin}}=user  //nested object destructuring

console.log(city,pin);


//Rest operator with objects//
const user1 = { name: "Rewant", age: 21, city: "Jaipur" };

const {name, ...rest1}=user1

console.log(name);
console.log(rest1);

const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" } //destructuring nested object inside arrays//

];

const [{name:firstUser},{name:secondUser}]=users
// console.log(firstUser,secondUser);


//Mixed Destructuring (Array + Object)//

const data ={
    id:1,
    info:["rewant",32,"jaipur"]

}
const {id,info:[name1,age,city1]}=data
console.log(id,name1,age,city1);

const array =[1,2,3]
const newArr = [...array,5,6]
console.log(newArr);

const response = {
  status: 200,
  data: {
    user: {
      name: "Rewant",
      age: 21
    }
  }
};

const {data:{user:{name:name2}}}=response
console.log(name2);

const namess = ["aryan","rahul","shyam","sundar"]
const [aryan,,,shyam]=namess
console.log(aryan,shyam);


const product = {
  id1: 1,
  name: "Laptop",
  price: 50000,
  brand: "Dell"
};

const {id1,...details}=product
// console.log(id1,details);

const a1 = [1,2,3]
const a2 = [4,5,6]
const a1a2 = [...a1,...a2]
console.log(a1a2);

function sum(a,b,c){
    return(a+b+c)
}
const arrr = [1,2,3]
console.log(sum(...arrr));
  