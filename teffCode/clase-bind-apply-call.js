// funcion.apply(thisArg, [argsArray])

// funcion: La función a la que se llamará.
// thisArg: El valor que será utilizado como this dentro de la función.
// argsArray: Un array o un objeto similar a un array que contiene los argumentos que se pasarán a la función.

function saludar(pronombre, saludo) {
    console.log(`${saludo}, ${pronombre}, ${this.nombre}!`);
  }
  
  const persona1 = {
    nombre: 'Ana'
  };

  const necesaryValues = ['Señorita', 'Hola']
  
  // Usando apply para llamar a la función con un array de argumentos
  saludar.apply(persona1, necesaryValues);

  /*------------------------------------------------------*/

 // funcion.call(thisArg, arg1, arg2);

  // funcion: La función que se va a llamar.
  // thisArg: El valor que se asignará como this cuando la función sea llamada.
  // arg1, arg2, ...: Argumentos individuales que se pasarán a la función.

  const persona = {
    nombre: 'Juan',
    saludar: function(saludo) {
      console.log(`${saludo}, soy ${this.nombre}.`);
    }
  };
  
  const otraPersona = {
    nombre: 'Maria'
  };
  
  // Llamando a la función saludar de persona con el contexto de otraPersona
  persona.saludar.call(otraPersona, 'Hola'); 
  // Imprime: Hola, soy Maria.

  /*---------------------MÉTODO BIND----------------------------------------*/

 // funcionOriginal.bind(thisArg[, arg1[, arg2[, ...]]]);

  // funcionOriginal: La función original que se va a llamar.
  // thisArg: El valor que se asignará como this cuando la nueva función sea llamada.
  // arg1, arg2, ...: Argumentos opcionales que se predefinirán para la nueva función.

  const persona2 = {
    nombre: 'Juan',
    saludar: function() {
      console.log(`Hola, soy ${this.nombre}.`);
    }
  };
  
  const saludarJuan = persona2.saludar.bind(persona2);
  saludarJuan(); // Imprime: Hola, soy Juan.

// ------------------------------------------------------

const caricatura = { nombre: 'vaca y pollito' }

function recuerdo(personaje) {
    console.log(`${this.nombre} era mi caricatura favorita,
    Me encantaba ver las aventuras de ${personaje}`)
}

recuerdo.call(caricatura, 'Pollito')