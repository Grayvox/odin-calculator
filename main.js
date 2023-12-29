const display = document.querySelector('#display-box');

const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear-button');
const deleteButton = document.querySelector('#delete-button');
const decimalButton = document.querySelector('#decimal-button');

const opAdd = '+';
const opSubtract = '-';
const opMultiply = '*';
const opDivide = '/';

let currentNum;
let currentFirstNum;
let currentSecondNum;
let currentOperator;

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

equalsButton.addEventListener('click', onEqualsClick);

function onOperatorClick(e) {
    // currentFirstNum = display.textContent;
    // currentOperator = e.currentTarget.value;
    // currentNum = undefined;
    // display.textContent = '';
}

function onNumberClick(e) {
    // currentNum = e.currentTarget.value;
    // display.textContent += currentNum;
}

function onEqualsClick(e) {
    // currentNum = currentSecondNum;
    // display.textContent = operate(Number(currentFirstNum), currentOperator, Number(currentSecondNum));
}

console.log(operate(1, opAdd, 2));
console.log(operate(5, opSubtract, 2));
console.log(operate(2, opMultiply, 10));
console.log(operate(10, opDivide, 2));
