class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.displayValue = '';
    }

    clearDisplay() {
        this.displayValue = '';
        this.updateDisplay();
    }

    deleteLast() {
        this.displayValue = this.displayValue.slice(0, -1);
        this.updateDisplay();
    }

    appendCharacter(char) {
        this.displayValue += char;
        this.updateDisplay();
    }

    calculateResult() {
        try {
            this.displayValue = eval(this.displayValue);
        } catch {
            this.displayValue = 'Error';
        }
        this.updateDisplay();
    }

    updateDisplay() {
        this.displayElement.innerText = this.displayValue;
    }
}

const displayElement = document.getElementById('display');
const calculator = new Calculator(displayElement);
