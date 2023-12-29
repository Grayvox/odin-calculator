const display = document.querySelector('#display-box');
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator');

const opAdd = '+';
const opSubtract = '-';
const opMultiply = '*';
const opDivide = '/';

let currentFirstNum;
let currentSecondNum;
let currentOperator;

let currentDisplay = '';

function add(a, b) {
    return Math.round((a + b) * 100) / 100;
}

function subtract(a, b) {
    return Math.round((a - b) * 100) / 100;
}

function multiply(a, b) {
    return Math.round((a * b) * 100) / 100;
}

function divide(a, b) {
    return Math.round((a / b) * 100) / 100;
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

operatorButtons.forEach((item) => {
    item.addEventListener('click', onOperatorClick);
});

numberButtons.forEach((item) => {
    item.addEventListener('click', onNumberClick);
});

function onOperatorClick(e) {
    currentFirstNum = currentDisplay;
}

function onNumberClick(e) {
    let currentNum = e.currentTarget.value;

    currentDisplay += currentNum;
}

console.log(operate(1, opAdd, 2));
console.log(operate(5, opSubtract, 2));
console.log(operate(2, opMultiply, 10));
console.log(operate(10, opDivide, 2));
