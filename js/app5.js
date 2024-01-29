let numb = parseInt(prompt('Write down a two-digit number'))
let firstDigit = Math.floor(numb / 10)
let secondDigit = numb % 10
alert(firstDigit)
if (firstDigit > secondDigit) {
    alert('The first digit is greater than the second')
} else if (firstDigit < secondDigit) {
    alert('The second digit is greater than the first')
} else {
    alert('Numbers are equal')
}