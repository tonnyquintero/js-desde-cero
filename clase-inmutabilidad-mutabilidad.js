let numero = 23;
numero = numero + 10;
console.log(numero);

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero);

// Complex data type. 

let usuario = { nombre: "Anthony", edad: 33 }
usuario.edad = 35;
console.log(usuario);

let frutas = ["manzana", "pera"]
frutas[0] = "sandia";
console.log(frutas);

function cambiarNombre (objeto) {
    objeto.nombre = "nuevo nombre"
}
let persona = { nombre: "Antonio" }

cambiarNombre(persona)

console.log(persona);