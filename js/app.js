const ALL_LANGUAGES = {
    en: 'English',
    ua: 'Ukrainian',
    ru: 'Russian',
    de: 'Deutsch'
}
const ALL_GENDERS = {
    m: 'Male',
    f: 'Female'
}
const ALL_CITIES = {
    0: 'No value Selected', // or ''
    1: 'Kyiv',
    2: 'Kharkiv',
    3: 'Odesa'
}
document.getElementById("saveButton").addEventListener("click", function () {
    let form = document.getElementById("registration_form");
    let tableHTML = "<table border='1'><tr><th>Поле</th><th>Значення</th></tr>";
    let languages = [];
    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].type !== "button" && form.elements[i].type !== "radio" && form.elements[i].type !== "checkbox") {
            let fieldName = form.elements[i].name;
            let fieldValue = form.elements[i].value;
            if (form.elements[i].tagName.toLowerCase() === "select") {
                tableHTML += "<tr><td>" + fieldName + "</td><td>" + ALL_CITIES[fieldValue] + "</td></tr>";
            } else {
                tableHTML += "<tr><td>" + fieldName + "</td><td>" + fieldValue + "</td></tr>";
            }
        } else if (form.elements[i].type === "radio" && form.elements[i].checked) {
            let fieldName = form.elements[i].name;
            let fieldValue = form.elements[i].value;
            tableHTML += "<tr><td>" + fieldName + "</td><td>" + ALL_GENDERS[fieldValue] + "</td></tr>";
        } else if (form.elements[i].type === "checkbox" && form.elements[i].checked) {
            languages.push(ALL_LANGUAGES[form.elements[i].value])
        }
    }
    tableHTML += "<tr><td> Languages </td><td>" + languages + "</td></tr>";
    tableHTML += "</table>";
    document.body.innerHTML = '';
    document.body.innerHTML = tableHTML;
})