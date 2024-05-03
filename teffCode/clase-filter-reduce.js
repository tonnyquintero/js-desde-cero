// Methods that iterate over an array
// Methods that Do NOT modify the original array (Inmutability)

// filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers);
console.log(evenNumbers);

// reduce() 

// Sumar elementos de un array
const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0 )

console.log(numbersReduce);
console.log(sum);

// Encontrar que tanto se repite una palabra de un array

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue] ++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(wordFrecuency);

// Exercise: PAssing grade average

const grades = [85, 92, 66, 32, 15, 56, 12, 3, 87, 99]

const passingGrades = grades.filter(grade => grade >= 70)

const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length

console.log('orginal grades: ', grades);
console.log('Passing Grades: ', passingGrades);
console.log('Average Pasing Grade: ', averagePassingGrade);

