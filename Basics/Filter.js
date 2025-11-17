//FILTER METHOD//
//In JavaScript, the filter() method is a built-in array method used to create a new array containing only the elements from the original array that satisfy a specified condition. It does not modify the original array.//

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return num > 4
// })
// console.log(newNums);

const newNums = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bok) => bok.genre === "Non-Fiction")
userBooks = books.filter((bok) => {
    return bok.publish >= 1995 && bok.genre === "History"

})
console.log(userBooks);

// const words = ["spray", "elite", "exuberant", "destruction", "present"];
// const newWords = words.filter((word)=>word.length>6)
// console.log(newWords);

const nums = [1, 2, 3, 4, 5, 6, 7, 8]
const evens = nums.filter((num) => num % 2 === 0)
console.log(evens);


const products = [
    { name: 'Laptop' },
    { name: "Phone" },
    { name: 'Camera' }
]

const search = "ph"
const result = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
console.log(result);

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(n) {
    if (n < 2) {
        return false
    }
    if (n % 2 === 0) {
        return n === 2
    }
    for(let factor =3;factor*factor<=n;factor+=2){
        if(n%factor===0){
            return false
        }
    }
    return false
}
console.log(array.filter(isPrime));
