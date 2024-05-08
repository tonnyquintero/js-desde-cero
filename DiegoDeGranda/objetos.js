const persona = {
    nombre: 'Jhon',
    edad: 30,
    direccion: {
        calle: 5,
        casa: 300
    },
    saludar() {
        console.log(`Hola mmi nombre es ${this.nombre}`);
    }
}

persona.saludar()
console.log(`Y vivo en la calle numero: ${persona.direccion.calle}`);

persona.telefono = 32329584958

persona.despedir = () => {
    console.log(`Adios ${persona.nombre}`);
}

persona.despedir()

console.log(persona);

// Comando para borrar una propiedad o metodo dentro de un objeto
delete persona.saludar

console.log(persona);