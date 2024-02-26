function generateKey(symbols, characters) {
    let generatedKey = '';
    for (let i = 0; i < symbols; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        generatedKey += characters[randomIndex];
    }
    return generatedKey;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key);