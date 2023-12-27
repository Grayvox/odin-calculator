const display = document.querySelector('#display-box');
const buttons = document.querySelectorAll('.button');

const opAdd = '+';
const opSubtract = '-';
const opMultiply = '*';
const opDivide = '/';

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
        case opAdd:
            result = add(a, b);
            break;

        case opSubtract:
            result = subtract(a, b);
            break;

        case opMultiply:
            result = multiply(a, b);
            break;

        case opDivide:
            result = divide(a, b);
            break;
        default:
            console.log(`Error! Expected valid operator, but instead got " ${operator} "`);
    }

    return result;

}

buttons.forEach((item) => {
    item.addEventListener('click', onButtonClick);
});

function onButtonClick(e) {
    
}

console.log(operate(1, opAdd, 2));
console.log(operate(5, opSubtract, 2));
console.log(operate(2, opMultiply, 10));
console.log(operate(10, opDivide, 2));
