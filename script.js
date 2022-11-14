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
        this.clear()
    }

    appendNumber(number) {
        if (this.currentOperand.includes(".") && number === ".") return;

        this.currentOperand = `${this.currentOperand}${number.toString()}`;
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    updateDisplay() {
        this.previousOperandText.innerText = this.previousOperand;
        this.currentOperandText.innerText = this.currentOperand;
    }
}

const calculator = new Calculator(previousOperandText, currentOperandText);

numberButtons.forEach((number) => {
    number.addEventListener('click', () => {
        calculator.appendNumber(number.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach((operation) => {
    operation.addEventListener('click', () => {
        console.log(operation);
    })
})

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

equalsButton.addEventListener('click', () => {
    console.log(equalsButton);
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})