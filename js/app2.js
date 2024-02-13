function doMath(x, znak, y) {
    if (znak === '+') {
        return x + y;
    } else if (znak === '-') {
        return x - y;
    } else if (znak === '*') {
        return x * y;
    } else if (znak === '/') {
        return x / y;
    } else if (znak === '%') {
        return x % y;
    } else if (znak === '^') {
        return x ** y;
    }
}

const x = parseInt(prompt('Enter a first value'));
const y = parseInt(prompt('Enter a second value'));
const operation = prompt('Enter math operation(+, -, *, /, %, ^ )')
alert('Result of your operation is: ' + doMath(x, operation, y));
