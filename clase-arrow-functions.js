// función tradicional

const greeting = function (name) {
    return `Hi, ${name}`;
}

// arrow function explicit return

const greeting2 = (name) => {
    return `Hi, ${name}`
}

// arrow function implicit return

// con un sólo parametro se pueden quitar los parentesis, con dos o mas se deben aplicar
const greeting3 = name => `Hi, ${name}`


console.log(greeting('Anny'));
console.log(greeting2('Andy'));
console.log(greeting3('Woody'));

// Lexical Binding

const ficctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`);
    },
    messageWithArrowFunction: message => console.log(`${this.name} says: ${message}`)
}

ficctionalCharacter.messageWithTraditionalFunction('Goku beats you')
ficctionalCharacter.messageWithArrowFunction('Beware of vegueta')

/// OJOOOOO EL ARROW FUNCTION NO APLICA PARA EL THIS
