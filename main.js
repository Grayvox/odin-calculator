const display = document.querySelector('#display-box');
const displayPrevNum = document.querySelector('#prev-number');
const displayCurrentNum = document.querySelector('#current-number');

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear-button');
const deleteButton = document.querySelector('#delete-button');
const decimalButton = document.querySelector('#decimal-button');

const opAdd = '+';
const opSubtract = '-';
const opMultiply = '*';
const opDivide = '/';

let currentNum = '';
let previousNum = '';
let currentOperator = '';
let decimal;

function add(a, b) {
    return Math.round((a + b) * 100000) / 100000;
}

function subtract(a, b) {
    return Math.round((a - b) * 100000) / 100000;
}

function multiply(a, b) {
    return Math.round((a * b) * 100000) / 100000;
}

function divide(a, b) {
    return Math.round((a / b) * 100000) / 100000;
}

function operate(a, operator, b) {
    let result;

    switch(operator) {
        case opAdd:
            result = add(Number(a), Number(b));
            break;

        case opSubtract:
            result = subtract(Number(a), Number(b));
            break;

        case opMultiply:
            result = multiply(Number(a), Number(b));
            break;

        case opDivide:
            result = divide(Number(a), Number(b));
            break;
        default:
            console.log(`Error! Expected valid operator, but instead got " ${operator} "`);
    }

    return result;

}

operatorButtons.forEach((item) => {
    item.addEventListener('click', (e) => handleOp(e.target.textContent));
});
numberButtons.forEach((item) => {
    item.addEventListener('click', (e) => handleNumber(e.target.textContent));
});

equalsButton.addEventListener('click', () => handleEquals());

clearButton.addEventListener('click', (e) => clearCal());
deleteButton.addEventListener('click', (e) => deleteLastAction());
decimalButton.addEventListener('click', (e) => addDecimal());

function handleNumber(num) {
    if (currentNum.length <= 10) {
        currentNum += num;
        displayCurrentNum.textContent = currentNum;
    }
}

function handleOp(operator) {
    if (!currentNum) return;

    previousNum = currentNum;
    currentOperator = operator;
    currentNum = '';
    decimal = false;
    
    displayPrevNum.textContent = previousNum + ` ${operator}`; 
    displayCurrentNum.textContent = currentNum;
}

function handleEquals() {
    if (!currentNum || !previousNum) return;

    let result = operate(previousNum, currentOperator, currentNum);

    previousNum = '';
    currentNum = result;
    decimal = false;

    displayPrevNum.textContent = previousNum;
    displayCurrentNum.textContent = currentNum;
}

function clearCal() {

    currentNum = '';
    previousNum = '';
    decimal = false;

    displayPrevNum.textContent = previousNum;
    displayCurrentNum.textContent = currentNum;
}

function deleteLastAction() {

    if (!currentNum) {
        previousNum = '';
        displayPrevNum.textContent = '';
    }

    currentNum = '';
    displayCurrentNum.textContent = '';
    decimal = false;
}

function addDecimal() {
    if (decimal == true) return;

    currentNum += '.'
    displayCurrentNum.textContent = currentNum;
    decimal = true;
}

console.log(operate(1, opAdd, 2));
console.log(operate(5, opSubtract, 2));
console.log(operate(2, opMultiply, 10));
console.log(operate(10, opDivide, 2));
