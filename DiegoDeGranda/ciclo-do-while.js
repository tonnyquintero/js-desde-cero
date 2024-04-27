let contador = 0;

do {
    console.log(contador);
    contador++
} while (contador < 10);

/* Ejercicio adivina el número aleatorio */

// Generamos un número aleatorio entre 1 y 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// Inicializamos el número de intentos y la variable para almacenar la respuesta del usuario
let intentos = 0;
let respuestaUsuario;

do {
  // Solicitamos al usuario que adivine el número
  respuestaUsuario = parseInt(prompt("Adivina el número (entre 1 y 10):"));

  // Incrementamos el número de intentos
  intentos++;

  // Verificamos si la respuesta es correcta o incorrecta
  if (respuestaUsuario === numeroAleatorio) {
    console.log(`¡Felicidades! Has adivinado el número en ${intentos} intentos.`);
  } else {
    console.log("Respuesta incorrecta. Inténtalo de nuevo.");
  }

// El bucle se repetirá mientras la respuesta del usuario no sea igual al número aleatorio
} while (respuestaUsuario !== numeroAleatorio);