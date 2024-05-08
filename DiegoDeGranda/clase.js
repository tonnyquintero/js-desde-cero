class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre,
        this.edad = edad
    }
    saludar () {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona('antonio', 40)

persona1.saludar()