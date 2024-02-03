let inputNumber = parseInt(prompt("Put number"));
let powerOfTree = 3;
let able = false;
while (inputNumber > powerOfTree) {
    powerOfTree *= 3;
    if (powerOfTree === inputNumber) {
        able = true;
        break;
    }
}
alert(able ? 'It is possible to obtain this number by ringing the number 3 ' : 'It is NOT possible to obtain this number by ringing the number 3');