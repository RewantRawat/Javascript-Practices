// destructure
const profile = {
    name: "bhanu",
    age: 29,
    phone: "9001761631",
    print: () => {
        console.log(profile.name);
    }
}
const tuple = ["bhane", 28, "900761631"]
// const name = profile.name;
// const age = profile.age;
// const phone = profile.phone;
// const {name, age = 28, phone: mobile, print} = profile;
// const [bhanu] = tuple;



// rest/spread ops ------> ...
const profile2 = { ...profile };
profile2.name
profile2.age
profile2.phone

const { age, ...obj } = profile;


const [bhanu, ...obj2] = tuple;
const profile3 = [...tuple];








const list = [
    { name: "bhane", age: 28, phone: "dfdasfsaf" },
    { name: "deepanshu", age: 27, phone: "werwrw" }
]

list.map(({ name, ...profile }) => {
    return { name: name, ...profile };
})

////EXAMPLE 2.//
const Informations = {
    comapany_name: "FPS technologies",
    Headquarters: "India",
    Employees_numbers: 100,
    Fields: ["Technical", "Analyst"],
    employees: {
        name: "Rahul",
        age1: "age"
    }
}

const { comapany_name, employees: { name, age1 }, Fields: [tec], ...Informations1 } = Informations

const info = Informations1.Headquarters
const data = Informations1.Fields
console.log(data);




// function map(arr, callback) {
//     let result = []

//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i], i, arr.slice))
//     }
//     return result
// }

// function filter(arr, callback) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             result.push(arr[i])
//         }
//     }
// }

// function reduce(arr,initialValue,callback){
//     let acc = initialValue
//     let startindex =0

//     if(initialValue===undefined){
//         acc=arr[i]
//         startindex=1
        
//     }
//     for(let i = 0;i<arr.length;i++){
//         acc = callback(acc,arr[i],i,arr)
//     }
//     return acc
// }
