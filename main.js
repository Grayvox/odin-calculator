let display = `${currentFirstNum} ${currentOperator} ${currentSecondNum}`;

let currentFirstNum;
let currentOperator;
let currentSecondNum;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, operator, b) {
    let result;

    switch(operator) {
        case '+':
            result = add(a, b);
            break;

        case '-':
            result = subtract(a, b);
            break;

        case '*':
            result = multiply(a, b);
            break;

        case '/':
            result = divide(a, b);
            break;
        default:
            console.log(`Error! Expected valid operator, but instead got " ${operator} "`);
    }

    return result;

}

console.log(operate(1, '+', 2));
console.log(operate(5, '-', 2));
console.log(operate(2, '*', 10));
console.log(operate(10, '/', 2));
