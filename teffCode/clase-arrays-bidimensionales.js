let array1d = [1, 2, 3] // Unidimensional
let array2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] // Bidimensional

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Para cambiar un elemento esta es la sintaxis primero el array de la
// Columna y luego el de la fila
matrix[1][2] = 10
console.log(matrix);

// De igual manera para obtener un valor especifico 
let value = matrix[0][1] 
console.log(value); // 2

// operations 
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);    
    }   
}

function findElement (matriz, element) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === element) {
                return true
            }
        }   
    }
    return false
}

console.log(findElement(matrix, 5));

// Copiar una matriz

const copy = [...matrix]
console.log(copy);