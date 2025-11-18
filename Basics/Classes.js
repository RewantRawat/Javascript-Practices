//Classes are template for creating objects

// class User {
//     constructor(userName, email, password) {
//         this.userName = userName
//         this.email = email
//         this.password = password
//     }
//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUsername() {
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const chai = new User("deepa", "deepa12@gmail.com", "123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//BEHIND THE SCENES//

function User(userName, email, password) {
    this.userName = userName
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User.prototype.changeUsername = function () {
    return `${this.userName.toUpperCase()}`
}

const tea = new User("tea", "tea12@gmail.com", "123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

//
class Rectangele {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    area() {
        return this.height * this.width
    }

    perimeter() {
        return 2 * (this.height + this.width)
    }
    updateDimensions(newHeight, newWidth) {
        this.width = newWidth
        this.height = newHeight
    }
}

const rect1 = new Rectangele(10, 5);

console.log("Width:", rect1.width);
console.log("Height:", rect1.height);
console.log("Area:", rect1.area());
console.log("Perimeter:", rect1.perimeter());

// Update dimensions
rect1.updateDimensions(20, 15);
console.log("Updated Area:", rect1.area());


//
class Student {
    constructor(name, age, city) {
        this.name = name
        this.age = age
        this.city = city

    }
    introduce() {
        return `Hi i am ${this.name} and my age is ${this.age} and i am living in ${this.city}`
    }
}

const s1 = new Student("Bhanu", "24", "jaipur")
console.log(s1.introduce());

//
class Square {
    constructor(side) {
        this.side = side
    }

    calcarea() {
        return this.side * this.side
    }
}

const area = new Square("10")
console.log(area.calcarea());

//

class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    discount(percent) {
        return this.price - (this.price * percent / 100);
    }
}

const p = new Product("Laptop", 40000, "Electronics");
console.log("After discount:", p.discount(10));

//////////////////////////////////////////////////////////

// class Car {
//     constructor(make, model, year) {
//         this.make = make
//         this.model = model
//         this.year = year
//     }
//     d(){
//         return console.log(`${this.year} ${this.make} ${this.model}`);
        
//     }
// }

// const my = new Car("Toyota","Corolla",2021)
// my.d()

class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    d(){
        console.log(`${this.make}${this.model}${this.year}`);
         }
}

class ElectricCar extends Car{
    constructor(make,model,year,batteryLife){
        super(make, model, year)
        this.batteryLife=batteryLife
    }
    di(){
        console.log(`Battery life ${this.batteryLife} hours`);
        
    }
}

let tesla =new ElectricCar("Tesla","Model S",2021,24)
tesla.d()
tesla.di()