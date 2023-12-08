

class Calculator {
    constructor(){
        this.currentValue = ''
        this.previousValue = ''
        this.operation = null
        
    }

    appendNumber(number) {
        if (number === '.' && this.currentValue.includes('.'))return
        this.currentValue = this.currentValue.toString()  + number.toString()

   

    }

    compute(screenOutput) {
        let computation;
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                console.log(computation)
                break;

            case '-':
                computation = prev - current;
                break
            
            case 'x':
                computation = prev * current;
                console.log(computation)
                break;
            
            case '÷':
                computation = prev / current;
                break;

            default:
                return
                
        } 
        this.currentValue = computation.toString()
        this.operation = null;
        this.previousValue = '';
    
        this.updateOutputDisplay(screenOutput)
        }

    chooseOperation(operation) {
         //returns if there is no current value
        if (this.currentValue === '') return;
        
        //Performs a computation if there is a previous value present, this signifies there is an operation queued up.
        if (this.previousValue !== '') {
            this.compute()
        }

        this.operation = operation; 
        this.previousValue = this.currentValue;
        this.currentValue = '';
    }
    
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]

        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
        
    }


        updateInputDisplay(screenInput) {
            if(screenInput) {
                const inputText = this.getDisplayNumber(this.previousValue) +
                ' ' + (this.operation || '') +
                ' ' + this.getDisplayNumber(this.currentValue);
                screenInput.innerText = inputText;

            
            }
            
        }

        updateOutputDisplay(screenOutput) {
            if (screenOutput) {
                screenOutput.innerText = this.getDisplayNumber(this.currentValue);
            }
        }

        clearDisplay(screenOutput, screenInput) {
            if (screenOutput !== '' && screenInput !== ''){
                screenOutput.innerText = ''
                screenInput.innerText = ''
                this.currentValue = ''
                this.previousValue = ''
                this.operation = null
               
            }
        }

        deleteInput() {
            if (this.currentValue !== '') {
                this.currentValue = this.currentValue.toString().slice(0, -1)
            }
            
        }
    
}

document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator()

    const screenInput = document.querySelector('.calculator__input_display')
    const screenOutput = document.querySelector('.calculator__output_display')

    const input = document.getElementById('inputs')
    const userInput = document.getElementById('userInput')
    const userInputTwo = document.getElementById('userInputTwo')
    const userInputThree = document.getElementById('userInputThree')


    console.log(input)
    console.log(userInput)
    console.log(userInputTwo)
    console.log(userInputThree)



    


    if(!screenInput || !screenOutput || !userInput || !userInputTwo) {
        console.log("Display elements not found")
        return
    }

    document.querySelectorAll('.number-button').forEach(button => {
        
        button.addEventListener('click', () => {


            calculator.appendNumber(button.innerText);
            calculator.updateInputDisplay(screenInput)


            

            userInput.innerText += button.innerText;
            userInputTwo.innerText += button.innerText;
            userInputThree.innerText += button.innerText;

        });




    });

    document.querySelectorAll('.operation-button').forEach(button => {
        button.addEventListener('click', () => {
            calculator.chooseOperation(button.innerText);
            calculator.updateInputDisplay(screenInput);


            userInput.innerText += button.innerText;
            userInputTwo.innerText += button.innerText;
            userInputThree.innerText += button.innerText;
            
        })
    })



        document.querySelector('.equals-button').addEventListener('click', () => {
            calculator.compute(screenOutput);
         
        })

        document.querySelector('.all-clear-button').addEventListener('click', () => {
            calculator.clearDisplay(screenInput, screenOutput);
            calculator.updateOutputDisplay(screenOutput)
            calculator.updateInputDisplay(screenInput)
            
           
         
        })

        document.querySelector('.delete-button').addEventListener('click', () => {
            calculator.deleteInput(screenInput)
            calculator.updateInputDisplay(screenInput)
        })

    })
  







 