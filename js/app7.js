let numb = parseInt(prompt('Write down a three-digit number'))
let firstDigitOfNumb = Math.floor(numb / 100)
let secondDigitOfNumb = Math.floor((numb % 100) / 10)
let thirdDigitOfNumb = numb % 10
if (firstDigitOfNumb === secondDigitOfNumb && firstDigitOfNumb === thirdDigitOfNumb) {
    alert('All digits are equal')
} else {
    alert('All digits are not equal')
}
if (firstDigitOfNumb === secondDigitOfNumb || firstDigitOfNumb === thirdDigitOfNumb || secondDigitOfNumb === thirdDigitOfNumb) {
    alert('Number contains an equal digits')
}
else {
    alert('Number does not contain an equal digits')
}