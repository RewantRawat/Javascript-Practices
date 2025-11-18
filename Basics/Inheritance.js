class User {
    constructor(userName) {
        this.userName = userName
    }
    logMe() {
        console.log(`Username is ${this.userName}`);

    }
}

class Teacher extends User {
    constructor(userName, email, password) {
        super(userName)
        this.email = email
        this.password = password
    }
    addCourse() {
        console.log(`A new course was added by the ${this.userName}`);

    }
}

const ad = new Teacher("addy","addy12@gmail.com","1234")
ad.addCourse();

const us = new User("chaibolte")
us.logMe()
console.log(ad===us);
console.log(us instanceof User);


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
