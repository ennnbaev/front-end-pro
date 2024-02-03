let resultOfExchange = '';
const dollarExchangeRate = 27;
for (let i = 10; i <= 100; i += 10) {
    resultOfExchange += i + " dollars = " + i * dollarExchangeRate + " hrn \n";
}
alert(resultOfExchange);