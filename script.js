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

    equals() {
        if (this.currentOperand === '' || this.previousOperand === '') return;

        this.calculate();
        this.currentOperand = this.result;
        this.previousOperand = '';
        this.operator = undefined;
    }

    calculate() {

        switch (this.operator) {
            case '÷':
                this.result = parseFloat(this.previousOperand) / parseFloat(this.currentOperand);
                break;
            case 'x':
                this.result = parseFloat(this.previousOperand) * parseFloat(this.currentOperand);
                break;
            case '+':
                this.result = parseFloat(this.previousOperand) + parseFloat(this.currentOperand);
                break;
            case '-':
                this.result = parseFloat(this.previousOperand) - parseFloat(this.currentOperand);
                break;
            default:
                return;
        }

        this.previousOperand = this.result;
        this.currentOperand = '';
    }

    chooseOperator(operator) {
        if (this.currentOperand === '' && this.previousOperand === '') return;

        if (this.currentOperand === '') {
            this.operator = operator;
            return;
        }

        if (this.currentOperand !== '' && this.previousOperand !== '') {
            this.calculate();
            this.operator = operator;
            return;
        }

        this.operator = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    appendNumber(number) {
        if (this.currentOperand.includes(".") && number === ".") return;

        this.currentOperand = `${this.currentOperand}${number.toString()}`;
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operator = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    updateDisplay() {
        this.previousOperandText.innerText = `${this.previousOperand} ${this.operator || ''}`;
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
        calculator.chooseOperator(operation.innerText);
        calculator.updateDisplay();
    })
})

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

equalsButton.addEventListener('click', () => {
    calculator.equals();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})