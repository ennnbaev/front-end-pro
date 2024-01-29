let numb = parseInt(prompt('Write down a number'))
let lastDigitOfNumb = numb % 10
if (lastDigitOfNumb % 2 === 0) {
    alert(`Last digit is ${lastDigitOfNumb} and is even digit`)
} else {
    alert(`Last digit is ${lastDigitOfNumb} and is odd digit`)

}