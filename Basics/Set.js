//Set method//
//In JavaScript, a Set is a built-in object that allows storing a collection of unique values. This means that a value can only appear once within a Set//

// Why use Set?

// Remove duplicates easily
// Faster lookups than arrays
// Useful for filtering, checking membership, storing unique items

const mySets = new Set([1,2,3,1,3,4,5])
console.log(mySets);

//ADD VALUES TO SET
const s=new Set()
s.add(10);
s.add(20);
s.add(10)

console.log(s);

//Check if a value exists → has()

// Instance Methods (on Set objects)
//2. set.add(value)

//Adds a value to the set.

//3. set.delete(value)

//Removes a value from the set.

//4. set.has(value)

//Checks if a value exists in the set → returns true or false.

//5. set.clear()

//Removes all values from the set.

//6. set.size

//Property → returns number of elements in the set.

// Iteration Methods
//7. set.keys()

//Returns an iterator of all keys.

//8. set.values()

//Returns an iterator of all values (same as keys).

//9. set.entries()

//Returns [value, value] pairs (for compatibility with Map).

//10. set.forEach(callback)


////BASIC SET METHODS////
//add()

//has()

//delete()

//size

//values()