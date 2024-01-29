let numb = parseInt(prompt('Write down a three-digit number'))
let firstDigitOfNumb = Math.floor(numb / 100)
let secondDigitOfNumb = Math.floor((numb % 100) / 10)
let thirdDigitOfNumb = numb % 10
let sumOfDigits = firstDigitOfNumb + secondDigitOfNumb + thirdDigitOfNumb

if (sumOfDigits % 2 === 0) {
    alert('The sum of digits is even')
} else {
    alert('The sum of digits is odd')
}
if (sumOfDigits % 5 === 0) {
    alert('The sum of digits is multiple of 5')
} else {
    alert('The sum of digits is not multiple of 5')
}
if (sumOfDigits > 100) {
    alert('The sum of digits is greater than 100')
} else {
    alert('The sum of digits is not greater than 100')
}