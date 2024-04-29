// 1. new Array or array

const frutas = Array('apple', 'banana', 'orange', 'strawberry')
console.log(frutas);

const numbers = Array(1, 2, 3, 4, 5)
console.log(numbers);

// Array literal syntax
const oneNumber = [4]

const vacio = []
console.log(vacio);

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports);

const recipeIngredients = [
    'flour',
    true,
    2,
    {
        ingredients: 'Milk', quiantity: '1 cup'
    },
    false
]
console.log(recipeIngredients);

// accesing array elements

const firstFruits = frutas[1]
console.log(firstFruits);

// length property

const numberOfFruits = frutas.length
console.log(numberOfFruits);

// Mutability

frutas.push('watermelon')
console.log(frutas);

// inmutability

const newFruits = frutas.concat('grape', 'kiwi')
console.log(frutas);
console.log(newFruits);

// cheking arrays with Array.isArray()

const isArray = Array.isArray(frutas)
console.log(isArray);

// practical exercise: sum all elements of an array

const numberArray = [1, 5, 6, 7, 2, 6]
let sum = 0

for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i]
}

console.log(sum);