let number = parseInt(prompt("Put number"));
let divs = '';
for (let i = number; i > 0; i--) {
    if (i === 1) {
        divs += i;
    } else if (number % i === 0) {
        divs += i + ", ";
    }
}
alert(divs)