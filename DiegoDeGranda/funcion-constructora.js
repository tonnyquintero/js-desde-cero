function Persona(nombre, apellido,edad) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
}

// Así se construye
const persona1 = new Persona('Tony', 'Quintero', 33)

// Así se crea una nueva propiedad solo para esa persona
persona1.nacionalidad = 'Venezolana'

console.log(persona1);

// Así se crea una nueva propiedad o método a la funcion constructora (con la palabra prototype)
Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

persona1.saludar()
