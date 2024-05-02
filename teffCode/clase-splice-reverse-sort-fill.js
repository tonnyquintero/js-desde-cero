// Methods that modify the original array (Mutability)

// .splice (posicion en el array del elemento que se va a eliminar (a partir de donde o que posicion), cuantos elementos se van a eliminar a partir de ahí, elementos a agregar a partir de la posicion que se indicó)

const vegetables = ['carrot', 'brocoli', 'spinach', 'tomato']
const removedVegetables = vegetables.splice(2, 1, 'cucumber', 'onion')

console.log(vegetables);
console.log(removedVegetables);

// reverse(modifica el array y lo voltea de derecha a izquierda)

const numbers = [1, 2, 3, 4, 5]

console.log(numbers.reverse());

// sort with numbers 

const unsortedNumbers = [4, 18, 1, 62, 34]
console.log(unsortedNumbers.sort()); // De esta manera los devuelve pero ordenados en strings 1, 18(xq empieza con el uno), 34(xq empieza con el 3), 4, 62(xq empieza con el 6)

const unsortedNumbers2 = [56, 25, 5, 1, 78, 95, 62, 33, 14, 2]
console.log(unsortedNumbers2.sort((a, b) => a - b)); // Con esta pequeña formula dentro de la funcion se pueden ordenar en numeros de mayor a menor
console.log(unsortedNumbers2.sort((a, b) => a + b)); // lo ismo con el signo +

// sort with strings => En orden alfabetico

const cities = ['New York', 'Paris', 'Sidney', 'London', 'Anzoategui']
console.log(cities.sort());

// Sintaxis fill (Con que valor vamos a rellenar, desde que posicion, hasta que pocision)

const ages = [52, 25, 56, 15, 85, 4, 63]
console.log(ages.fill(0, 2, 5));
console.log(ages.fill(0, 2)); // Si lo dejamos con 2 parametros agarra desde ahí hasta que termine
console.log(ages.fill(0)); //  Si lo dejamos con un solo parametro deja todas las posiciones con ese valor





