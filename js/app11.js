let number = parseInt(prompt("Put number"));
let sumOfEvenDivs = 0;
for (let i = number; i > 0; i--) {
    if (number % i === 0 && i % 2 === 0) {
        sumOfEvenDivs += i;
    }
}
alert(`The sum of even divs for number - ${number} is - ${sumOfEvenDivs}`)