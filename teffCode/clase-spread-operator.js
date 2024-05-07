// 1 Copy an Array

const originalArray = [{
    id: 4,
    name: 'Carlos',
    drive: true
},
{
    id: 5,
    name: 'Jhon',
    drive: false
},
{
    id: 7,
    name: 'Jose',
    drive: false
},
]
const copy = [...originalArray]

console.log(originalArray);
console.log(copy);

// 2 copy an Object

const originalObject = {
    id: 2,
    name: 'Laura',
    dance: true
}

const copyObject = {...originalObject}

console.log(originalObject);
console.log(copyObject);

// 3 combining arrays

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combiningArr1Arr2 = [...arr1, ...arr2]
console.log(combiningArr1Arr2);

// 4 Creating Arrays with additional elements 

const baseArray = ['apple', 'microsotf', 'netflix', 'meta']
const arrayWithaddingElements = [...baseArray, 'openAi', 'amazon']

console.log(baseArray);
console.log(arrayWithaddingElements);

// 5 Pass elements to functions

// funcion para sumar todos los numeros de un array
function suma(...args) {
    return args.reduce((total, current) => total + current, 0);
  }
  
  console.log(suma(1, 2, 3)); // Resultado: 6 (1 + 2 + 3 = 6)
  console.log(suma(10, 20, 30, 40)); // Resultado: 100 (10 + 20 + 30 + 40 = 100)
  console.log(suma(2, 4, 6, 8, 10)); // Resultado: 30 (2 + 4 + 6 + 8 + 10 = 30)
  console.log(suma()); // Resultado: 0 (sin argumentos, devuelve 0 por defecto)