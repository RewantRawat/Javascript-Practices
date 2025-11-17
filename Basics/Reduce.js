//Reduce methos //
//The reduce() method in JavaScript is a powerful array method used to execute a "reducer" callback function on each element of an array, resulting in a single output value. This method iterates through the array elements in ascending order, accumulating a single value based on the operations performed within the callback function. //
//SYNTAX
//arr.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

const myNums = [1, 2, 3]

// const newValues = myNums.reduce(function (acc, currvalue) {
//     console.log(`acc:${acc} and the current value ${currvalue}`);

//     return acc + currvalue
// },10)

const newValues = myNums.reduce((acc, currvalue) => acc + currvalue, 0)
console.log(newValues);


const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "py Course",
        price: 999
    },
    {
        itemName: "mobile dev Course",
        price: 4999
    },
    {
        itemName: "data science",
        price: 3999
    },
]

const shoppingBill = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(shoppingBill);
