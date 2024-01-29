let firstNumb = parseInt(prompt('Write down a first number'))
let secondNumb = parseInt(prompt('Write down a second number'))
if (firstNumb % secondNumb === 0) {
    alert('First number is a divider for second number')
} else {
    alert('First number is not a divider for second number')
}
if (secondNumb % firstNumb === 0) {
    alert('Second number is a divider for first number')
} else {
    alert('Second number is not a divider for first number')
}
