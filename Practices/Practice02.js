//MAP CLASS//

class Map {
    data = [];

    findKeyIndex(key) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i][0] === key) {
                return i
            }
        }
        return -1
    }
    set(key, value) {
        const index = this.findKeyIndex(key)

        if (index !== -1) {
            this.data[index][1] = value
        } else {
            this.data.push([key, value])
        }
    }
    get(key) {
        const index = this.findKeyIndex(key)
        if (index !== -1) {
            return this.data[index][1]
        }
    }

    has(key){
        return this.findKeyIndex(key)!== -1
    }

    delete(key){
        const index= this.findKeyIndex(key)
        if(index !== -1){
            this.data.splice(index,1)
            return true
        }
        return false
    }
}

const myCustomMap = new Map();
console.log('Map created:', myCustomMap);

//set//
myCustomMap.set("userid", 101);
myCustomMap.set(true, "statusactive");
myCustomMap.set(5, { role: 'admin' });


myCustomMap.set("userid", 102); 

console.log("After setting 4 items (1 update):");


/////get//////
console.log("Value for 'userid':", myCustomMap.get("userid")); 
console.log("Value for key 'true':", myCustomMap.get(true));     
console.log("Value for key '5':", myCustomMap.get(5));           
console.log("Value for non-existent key 'email':", myCustomMap.get('email'));

//has///
console.log("the map have key 'userid'?", myCustomMap.has("userid")); 
console.log("Does the map have key 'totalcount'?", myCustomMap.has("total_count")); 

///delete///
console.log("deleting keys 5",myCustomMap.delete(5));

