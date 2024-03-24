document.querySelector('.save_btn').addEventListener('click', event => {
    const id = event.target.getAttribute('data-id');
    const user = collectData();
    const isValid = validateUser(user);

    if (!isValid) {
        alert(`
Please enter data in correct format:

- Login length: min 3 max 10
- Username: only alphabetic, length min 2 max 20
- Password: min 9 max 18
- Age: from 0 to 99
- Phone number: +xxxxxxxx
- Card number: 12 elements
`);
    } else {
        if (!id) {
            user.id = generateUserId();
            saveUser(user);

            const parent = document.querySelector('#grid');
            const userRow = createUserRow(user);
            parent.appendChild(userRow);
        } else {
            user.id = id;
            const userIndex = getUserIndexById(id);
            if (userIndex === -1) {
                return;
            }

            users[userIndex] = user;

            const userRow = document.querySelector(`.row[data-id="${id}"]`);
            userRow.innerHTML = '';
            createUserRowContent(userRow, user);
            saveUser(user, false);

        }

        clearFormData();
        document.querySelector('#form').classList.add('hidden');
    }
});

function clearFormData() {
    const formElements = document.forms[0].elements;
    for (let item of formElements) {
        if (item.type === 'button') {
            item.removeAttribute('data-id');
        } else {
            item.value = '';
        }
    }
}

function deleteUserData(user) {
    users.splice(getUserIndexById(user.id), 1);
    localStorage.setItem('users', JSON.stringify(users));
    const userRow = document.querySelector(`.row[data-id="${user.id}"]`);
    userRow.innerHTML = '';
}

function editUserData(user) {
    document.querySelector('#form').classList.remove('hidden');

    const formElements = document.forms[0].elements;
    formElements.save_btn.setAttribute('data-id', user.id);

    for (let key in user) {
        if (key === 'id') {
            continue;
        }
        formElements[key].value = user[key];
    }
}

function collectData() {
    const form = document.forms[0].elements;
    const name = form.name.value;
    const login = form.login.value;
    const password = form.password.value;
    const age = form.age.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const cardNumber = form.cardNumber.value;


    const user = {
        name,
        login,
        password,
        age,
        email,
        phoneNumber,
        cardNumber

    };

    return user;
}

function validateUser(user) {
    if (!isValidName(user.name)) {
        return false;
    }
    if (!isValidLogin(user.login)) {
        return false;
    }
    if (!isValidPassword(user.password)) {
        return false;
    }
    if (!isValidEmail(user.email)) {
        return false;
    }
    if (!isValidAge(user.age)) {
        return false;
    }
    if (!isValidPhoneNumber(user.phoneNumber)) {
        return false;
    }
    return isValidCardNumber(user.cardNumber);

}

function generateUserId() {
    return Date.now().toString();
}

function saveUser(user, isNew = true) {
    if (isNew) {
        users.push(user);
    }
    localStorage.setItem('users', JSON.stringify(users));
}