const display = document.querySelector('#display-box');
const displayPrevNum = document.querySelector('#prev-number');
const displayCurrentNum = document.querySelector('#current-number');

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

let currentNum = '';
let previousNum = '';
let currentOperator = '';

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
    item.addEventListener('click', (e) => {
        // currentFirstNum = display.textContent;
        // currentOperator = e.currentTarget.value;
        // currentNum = undefined;
        // display.textContent = '';
        handleOp(e.target.textContent);
    });
});
numberButtons.forEach((item) => {
    item.addEventListener('click', (e) => {
        // currentNum = e.currentTarget.value;
        // display.textContent += currentNum;
        handleNumber(e.target.textContent);
    });
});

equalsButton.addEventListener('click', (e) => {
    // currentNum = currentSecondNum;
    // display.textContent = operate(Number(currentFirstNum), currentOperator, Number(currentSecondNum));
    handleEquals();
});
clearButton.addEventListener('click', (e) => {

});
deleteButton.addEventListener('click', (e) => {

});
decimalButton.addEventListener('click', (e) => {

});

function handleNumber(num) {
    if (currentNum.length <= 10) {
        currentNum += num;
        displayCurrentNum.textContent = currentNum;
    }
}

console.log(operate(1, opAdd, 2));
console.log(operate(5, opSubtract, 2));
console.log(operate(2, opMultiply, 10));
console.log(operate(10, opDivide, 2));
