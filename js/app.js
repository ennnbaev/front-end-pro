//Task 1 Hello User

let name = prompt('What is your name?')
alert(`Hello, ${name}! How are you?`)

//Task 2 Lines and five-digit number

let firstLine = prompt('Hello, please write down first line')
let secondLine = prompt('Please write down second line')
let thirdLine = prompt('Please write down third line')
alert('Result of concat: ' + firstLine + secondLine + thirdLine)

let number = prompt('Hello, please write down a five-digit number')
alert(number.charAt(0) + ' ' + number.charAt(1) + ' ' + number.charAt(2) + ' ' + number.charAt(3) + ' ' + number.charAt(4)) //or we can use dividing 10 and operator %

//Task 3 Calculator

let operation = prompt('Hello, I am a super fast Calculator! Please chose operation  (add, sub, mult, div)')
let firstNumb = prompt('Great! Write down a first number')
let secondNumb = prompt('Cool! Write down a second number')
if (operation === 'add') {
    alert('Sum is: ' + (parseInt(firstNumb) + parseInt(secondNumb)))
} else if (operation === 'sub') {
    alert('Sub is: ' + (parseInt(firstNumb) - parseInt(secondNumb)))

} else if (operation === 'mult') {
    alert('Mult is: ' + (parseInt(firstNumb) * parseInt(secondNumb)))
} else if (operation === 'div') {
    alert('Div is: ' + (parseInt(firstNumb) / parseInt(secondNumb)))
} else {
    alert('Unsupported operation, please reload page and chose a correct operation (add, sub, mult, div)')
}

//Task 4 Hours in seconds

let hours = prompt('Hey, it calculator from hours to second! Put humber of hours')
const seconds = hours * 60 * 60
alert(hours + ` hours equal - ${seconds} sec`)

