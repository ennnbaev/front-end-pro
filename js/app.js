let userBornYears = prompt('Hello! What year were you born?');
const currentYear = 2024;
let userAges;
if (userBornYears === null) {
    alert('It is a pity that you did not want to enter your year of birth');
    userAges = '';
} else {
    userAges = currentYear - parseInt(userBornYears);
}
let userCity = prompt('What city do you live?');
if (userCity === null) {
    alert('It is a pity that you did not want to enter your city');
}
let userFavSport = prompt('What is your favourite sport?');
if (userFavSport === null) {
    alert('It is a pity that you did not want to enter your favourite sport');
}
const popularCapitals = ['Kyiv', 'Washington', 'London'];
let isCapital = true;
let userCountry;
if (userCity === popularCapitals[0]) {
    userCountry = 'Ukraine';
} else if (userCity === popularCapitals[1]) {
    userCountry = 'USA';
} else if (userCity === popularCapitals[2]) {
    userCountry = 'UK';
} else {
    isCapital = false;
}
const popularSports = ['Football', 'Tennis', 'Run'];
let bestSportsmen;
let isPopularUserSport = true;
if (userFavSport === popularSports[0]) {
    bestSportsmen = 'Cristiano Ronaldo';
} else if (userFavSport === popularSports[1]) {
    bestSportsmen = 'Novak Jokovich';
} else if (userFavSport === popularSports[2]) {
    bestSportsmen = 'Usain Bolt';
} else {
    isPopularUserSport = false;
}
alert((`User age is ${userAges} `)
    + (isCapital ? ` You live in the capital of ${userCountry}` : `You live in the city ${userCity}`)
    + (isPopularUserSport ? ` Great! Do you want to become like ${bestSportsmen}` : ''));