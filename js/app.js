let numbers = '';
const maxIteration = 20;
for (let i = 10; i <= maxIteration; i++) {
    numbers += i;
    if (i !== maxIteration) {
        numbers += ', ';
    }
}
alert(numbers)
