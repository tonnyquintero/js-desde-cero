// Methods that iterate over an array

// Methods that DO NOT modify the original array (Inmutability)

// Map()

const numbers = [1, 2, 3, 4, 5]
// --------------------------------⬇️ va a ir iterando por cada elemento
const squaredNumbers = numbers.map(num => num * num)

console.log(numbers);
console.log(squaredNumbers);

// forEach ()

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors);
console.log(iteratedColors);

// Exercise: Fahrenheit to Celsius conversion

const temperaturenInFahrenheit = [32, 68, 95, 104, 212]

const temperaturenInCelsius = temperaturenInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log('Temperatures in Fahrenheit: ', temperaturenInFahrenheit);
console.log('Temperatures in Celsius: ', temperaturenInCelsius);

// Exercise: Sum of Elements in an Array

const newNumbers = [1, 2, 3, 4, 5]

let sum = 0

newNumbers.forEach(number => {
    sum += number
})

console.log('Sum of Array of numbers: ', sum);
