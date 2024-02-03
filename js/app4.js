let inputNumber = parseInt(prompt("Put number"));
let isPrimeNumber = inputNumber > 1;
for (let i = inputNumber - 1; i > 1; i--) {
    if (inputNumber % i === 0) {
        isPrimeNumber = false;
        break;
    }
}
alert(`Number ${inputNumber} is ` + (isPrimeNumber ? 'prime' : 'not-prime'));
