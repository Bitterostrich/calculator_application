
function numberConverter(numbers) {
    const formattedNumbers = numbers.map(number => {
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
                
            }else {
                return integerDisplay
            }
    })

    return formattedNumbers

}

const numbers = [66665, 459985, 758437, 8338, 340006, 9.8762, 95453];
const formattedResults = numberConverter(numbers)

console.log(formattedResults)
