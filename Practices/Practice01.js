//LOGIC FOR CALCULATOR//

function calculator(num1, num2, operator) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Error:Inputs must be numbers"
    }

    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2
        case "/":
            if (num2 === 0) return "Error:Cannot divide by zero"
            return num1 / num2

        default:
            return "Error:Invalid Operator"
    }
}

//TEST CASESS//
console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-")); 
console.log(calculator(10, 5, "*")); 
console.log(calculator(10, 5, "/")); 
console.log(calculator(20, 20, "/")); 
console.log(calculator(10, 5, "%")); 

function reverseString(str){
    return str.split("").reverse().join("")
}
console.log(reverseString("rewant"));
