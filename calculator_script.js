class Calculator {
    constructor(){
        this.currentValue = ''
        this.previousValue = ''
        this.operation = null
    }

    appendNumber(number) {
        this.currentValue += number

    }

    chooseOperation(operation) {
        if (this.currentValue === '') return;
        if (this.previousValue !== '') {
            this.compute()
        }

        this.operation = operation;
        this.previousValue = this.currentValue;
        this.currentValue = '';

    }

    compute(screenOutput) {
        let computation;
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;

            default:
                return
        } 
        this.currentValue = computation.toString()
        this.operation = null;
        this.previousValue = '';
    
        this.updateOutputDisplay(screenOutput)
        
        }




        updateInputDisplay(screenInput) {
            if(screenInput) {
                screenInput.innerText = this.previousValue + ' ' + (this.operation || '') + ' ' + this.currentValue; 
            }
        }

        updateOutputDisplay(screenOutput) {
            if (screenOutput) {
                screenOutput.innerText = this.currentValue;
            }
        }
    
}

document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator()

    const screenInput = document.querySelector('.calculator__input_display')
    const screenOutput = document.querySelector('.calculator__output_display')

    if(!screenInput || !screenOutput) {
        console.error("Display elements not found")
        return
    }

    document.querySelectorAll('.number-button').forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText);
            calculator.updateInputDisplay(screenInput)
        });
    });

        document.querySelector('.addition-button').addEventListener('click', () => {
            calculator.chooseOperation('+')
            calculator.updateInputDisplay(screenInput);
        })


        document.querySelector('.equals-button').addEventListener('click', () => {
            calculator.compute(screenOutput);
         
        })

    })
  







 