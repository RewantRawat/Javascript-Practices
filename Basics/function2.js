// Traditional Function
function bob(a) {
  return a + 100;
}

// Arrow Function
const bob2 = (a) => a + 100;

const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((m)=>m.length));


function add(a,b,c){
    return a+b+c
}

console.log(add(1,2,3));


function greet(name,callback){
    console.log("Hi " + name);
    callback()
    
}

function sayBye() {
  console.log("Bye!");
}

greet("Danny",sayBye)

function total(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}

console.log(total(1, 2, 3, 4));
