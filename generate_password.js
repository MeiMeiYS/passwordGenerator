//start generating password
function sample(collection) {
    let randomIndex = Math.floor(Math.random() * collection.length)
    return collection[randomIndex]
}

function generatePassword(options) {

    //define password element
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = lowerCaseLetters.toUpperCase();
    const numbers = '1234567890';
    const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

    //create a collection to store needed element
    let collection = [];
    if (options.lowercase === 'on') {
        collection = collection.concat(lowerCaseLetters.split(''))
    }
    if (options.uppercase === 'on') {
        collection = collection.concat(upperCaseLetters.split(''))
    }
    if (options.numbers === 'on') {
        collection = collection.concat(numbers.split(''))
    }
    if (options.symbols === 'on') {
        collection = collection.concat(symbols.split(''))
    }
    //return error
    if (collection.length === 0){
        return 'There is no Valid character in your selection.'
    }

    //remove selected element (filter, includes)
    if (options.excludeCharacters) {
        collection = collection.filter((unwated) => {
            if (options.excludeCharacters.includes(unwated)) {
                return false
            } else return true
        })
    }

    let password = ''
    for (i = 1; i <= options.length; i++) {
        password += sample(collection)
    }

    //return password
    return password

}

module.exports = generatePassword