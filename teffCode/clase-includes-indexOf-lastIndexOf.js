// includes() with numbers

const numbers = [1, 2, 3, 4, 5]

const result1 = numbers.includes(3) // True
const result2 = numbers.includes(8) // False

// indexOf() Retorna el indice donde está el elemento, si no está se retorna -1

const fruits = ['apple', 'banana', 'cherry', 'grape', 'mango']

const index1 = fruits.indexOf('grape') // 3
const index2 = fruits.indexOf('blueberry') // -1

// Last IndexOf()

const newNumbers = [2, 4, 6, 8, 10, 23, 7, 6]

const lastIndex1 = newNumbers.lastIndexOf(6) // 7 xq es la última posición de índice
console.log(lastIndex1);

const lastIndex2 = newNumbers.lastIndexOf(3) // -1 xq no aparece

