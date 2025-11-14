
// const name = "deepanshu"

//Paramter string return string
export function sort(name) {
    //Method 1
    return name.split("").sort().join('')

    //Method
    // let arr = []

    // for (let i = 0; i < name.length; i++) {
    //     arr[arr.length] = name[i]
    // }
    
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length; j++) {
    //         if (arr[j] > arr[j + 1]) {
    //             let temp = arr[j]
    //             arr[j] = arr[j + 1]
    //             arr[j + 1] = temp
    //         }
    //     }
    // }
    // let result = ""
    // for (let i = 0; i < arr.length; i++) {
    //     result += arr[i]
    // }
    // return result
}

//Paramter string return string
export function reverse(name) {

//Method 1
    // return name.split('').reverse().join('')

 //Method 2   
    let result = []
    for(let i =name.length-1;i>=0;i--){
        result +=name[i]
    }
    return result
}

//Parameter string return object
export function characterCount(name) {
    console.log("using array notation", name[0])
    console.log("using split: ", name.split(""))
    console.log("using rest/spread operator: ", [...name])

    const count = {}

    for (const w of name) {
        console.log("for of loop", w)
    }

    [...name].forEach(character => {
        if (count[character]) {
            count[character]++
        } else {
            count[character] = 1
        }
    })
    return count
    // const count = {}

    // for (let i = 0; i < name.length; i++) {
    //     const character = name[i]

    //     if (count[character]) {
    //         count[character]++
    //     } else {
    //         count[character] = 1
    //     }
    // }
    // return count
    //find individual character

    //   name.forEach(element => {
    //     return element
    //  });
}



// Javascript Objects !important
const car = {
    name: "car",
    drive: () => {

    },
    props: {
        company: "name",
        version: "2",
        init: () => {

        }
    }
}

// Arrays
// Set/Map
// rest/spread operator
// class