// Herencia es como una interacción entre 2 clases o funciones constructoras

class Animal {
    constructor (nombre, tipo) {
        this.nombre = nombre,
        this.tipo = tipo
    }
    emitirSonido () {
        console.log('El animal emite un sonido');
    }
}

// para invocar las propiedades de la clase madre utilizamos la palabra extends
// seguido del nombre de la clase. Para heredar las propiedades en el constructor
// Utilizamos la palabra super y entre parentesis los parametros que queremos
// utlizar de la clase madre
class Perro extends Animal {
    constructor (nombre, tipo, raza) {
        super (nombre, tipo);
        this.raza = raza
    }
    emitirSonidoPerro() {
        console.log('El animal ladra');
    }
    correr () {
        console.log(`${this.nombre} corre alegremente`);
    }
}
// Ya con los moldes listos podemos crear instancias

const perro1 = new Perro('bobby', 'perro', 'pug')
console.log(perro1);
perro1.correr()
// Este metodo lo heredó de la clase madre
perro1.emitirSonido()

// Con la palabra prototype podemos agregar metodos a la funcion constructora o clase
Perro.prototype.segundoMetodo = function () {
    console.log('Este es otro metodo');
}

perro1.segundoMetodo()


// Dato: Object es el objeto global. Ese está por encima de todos