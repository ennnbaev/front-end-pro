function isValidName(name) {
    const namePattern = new RegExp(/^[a-zA-Z\s\-]{2,20}$/);
    return namePattern.test(name);
}
function isValidLogin(login) {
    const namePattern = new RegExp(/^[a-zA-Z0-9]{3,10}$/);
    return namePattern.test(login);
}
function isValidPassword(password) {
    const namePattern = new RegExp(/^[a-zA-Z0-9$%&@!]{8,18}$/);
    return namePattern.test(password);
}
function isValidAge(age) {
    const namePattern = new RegExp(/^[0-9]{1,2}$/);
    return namePattern.test(age);
}
function isValidEmail(email) {
    const namePattern = new RegExp(/^[a-zA-Z0–9]+@[a-zA-Z0–9]+\.[a-zA-Z]{2,4}$/);
    return namePattern.test(email);
}
function isValidPhoneNumber(number) {
    const namePattern = new RegExp(/^\+\d{12}$/);
    return namePattern.test(number);
}
function isValidCardNumber(number){
    const namePattern = new RegExp(/^[0-9]{12}$/);
    return namePattern.test(number);
}