let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let numbers = '0123456789'
let symbols = '@#$&<>,./|{])(*%!'
let length = 7

const randFunc = {
    lower: getRandomLowerCase,
    upper: getRandomUpperCase,
    numbers: getRandomNumbers,
    symbols: getRandomSymbols
}

const result = ""

function generate() {
    const lengthEl = length
    const hasLower = lowerCase
    const hasUpper = upperCase
    const hasNumber = numbers
    const hasSymbol = symbols

    result = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, lengthEl);
}
generate()

function generatePassword(lower, upper, number, symbol) {
    
}



function getRandomUpperCase() {
    return upperCase[Math.floor(Math.random() * upperCase.length)]
}

function getRandomLowerCase() {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)]
}

function getRandomSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function getRandomNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}
console.log(getRandomSymbols() + getRandomLowerCase());