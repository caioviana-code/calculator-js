const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-clear]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandText = document.querySelector('[data-previous]');
const currentOperandText = document.querySelector('[data-current]');

class Calculator {
 
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
    }

    updateDisplay() {
        this.previousOperandText.innerText = this.previousOperand;
        this.currentOperandText.innerText = this.currentOperand;
    }
}

const calculator = new Calculator(previousOperandText, currentOperandText);

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})