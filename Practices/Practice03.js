class MySet {

    data = [];
    get size() {
        return this.data.length;
    }

    clear() {
        this.data = [];
    }


    add(value) {
        if (!this.has(value)) {
            this.data.push(value);
        }
    }

    has(value) {
        return this.data.includes(value);
    }

    delete(value) {
        const index = this.data.indexOf(value);
        if (index !== -1) {
            this.data.splice(index, 1);
            return true;
        }
        return false;
    }
}

const s = new MySet()

console.log("Add 10");
s.add(10)
console.log(s.data);

console.log("Add 20");
s.add(20)
console.log(s.data);

console.log("add 50");
s.add(50)
console.log(s.data);




console.log("Has 20?", s.has(20));

console.log("Has 20?", s.has(40));

console.log("Has 20?", s.has(50));

console.log("Delete 10");
console.log(s.delete(10));  
console.log(s.data);