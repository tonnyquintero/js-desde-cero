// slice() Metodo para segmentar. No modifica el array original

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2)); // Retorna del indice 2 en adelante
console.log(animals.slice(2, 4)); // ['camel', 'duck']
console.log(animals.slice(-2)); // Retorna los 2 ultimos
console.log(animals.slice(2, -1)); // ['camel', 'duck']