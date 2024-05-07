// Methods that DO NOT modify the original array (Inmutability)

const morseCode = ['....', '---']
const morseCode2 = ['.-.', '.--']
const morseCode3 = ['.-.-.-.-.']

// Forma 1
const morseCodeMessage = morseCode.concat(morseCode2)
// Forma 2
const morseCodeMessage2 = [].concat(morseCode, morseCode2, morseCode3)

console.log(morseCode);
console.log(morseCode2);
console.log(morseCodeMessage);
console.log(morseCodeMessage2);

// Combine with spread operator

function combinedMesage (param1, param2) {
    console.log([...param1, ...param2]);
}

combinedMesage(morseCode, morseCode2)

const numbers = [1, 2, 3, 4]
const string = 'String'

combinedMesage(numbers, string)

// join()

const morseMEssageString = morseCodeMessage.join('espacial') // ....espacial---espacial.-.espacial.--

console.log(morseCode);
console.log(morseCode2);
console.log(morseMEssageString);