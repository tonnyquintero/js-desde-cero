

for (let variable = 1; variable < 11; variable++) {
    console.log(variable);;
    
}

let list = ['eat', 'sleep', 'code', 'repeat']

for (let lista = 0; lista < list.length ; lista++) {
    console.log(list[lista]);
}

let alturaArbol = 5;

for (let i = 0; i < alturaArbol; i++) {
    // Imprimir espacios en blanco antes de cada fila para desplazarla hacia la derecha
    let espacio = "";
    for (let j = 0; j < alturaArbol - i - 1; j++) {
        espacio += " ";
    }
    
    // Imprimir asteriscos para formar la fila del árbol
    let fila = "";
    for (let k = 0; k < 2 * i + 1; k++) {
        fila += "*";
    }
    
    console.log(espacio + fila); // Imprimir la fila del árbol
}