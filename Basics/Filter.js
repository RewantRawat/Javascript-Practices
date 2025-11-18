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

const newNumbers = [1,2,3,4,5,6,7,8]
const evenNumbers = newNumbers.filter((f)=>f%2===0)
console.log(evenNumbers);

const words = ["banana","apple","kiwi","guavava"]
const filterWords=words.filter((word)=>word.length<=5)
console.log(filterWords);

const products1 = [
    {name:"banana",price:200},
    {name:"raspberry",price:400},
    {name:"Kiwi",price:350},
    {name:"dragonfruit",price:500}
]

const filteredProduct = products1.filter((pro)=>pro.price<=400)
console.log(filteredProduct);

const peoples = [
    {name:"Alice",age:"21",gender:"female"},
     {name:"Ryan",age:"25",gender:"male"},
      {name:"Bob",age:"30",gender:"male"},
       {name:"Justin",age:"35",gender:"male"},
        {name:"Amya",age:"28",gender:"female"}
]

const malePersoned = peoples.filter((people)=>people.gender==="male" && people.age<=30)
console.log(malePersoned);

const data = [
  { name: 'John', age: 30, city: 'New York' },
  { name: 'Alice', age: 25, city: 'San Francisco' },
  { name: 'Bob', age: 35, city: 'New York' }
];

const filterdata = data.filter((d)=>d.city==="New York" && d.age>=30)
console.log(filterdata);


const bookss = [
  { title: 'Book 1', author: 'John Doe', year: 1995 },
  { title: 'Book 2', author: 'Jane Smith', year: 2005 },
  { title: 'Book 3', author: 'Alice Johnson', year: 1999 },
  { title: 'Book 4', author: 'Emily Brown', year: 2003 }
];

function filterBooks(bookss) {
  return bookss.filter(book => {
    return book.year > 2000 && isFemaleAuthor(book.author);
  });
}

function isFemaleAuthor(author) {
  // Assuming a function to check if the author's name is female
  // This could be implemented using various methods like name databases or regular expressions
  return author.toLowerCase().includes('female');
}

const filteredBooks = filterBooks(books);
console.log(filteredBooks);