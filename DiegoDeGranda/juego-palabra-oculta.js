// Ejecutar en el live server

let palabraOculta = 'javascript'
let intentos = 3

function verificarSuposicion(suposicion, palabraOculta) {
    if (suposicion.toLowerCase() === palabraOculta) {
        return true
    }
    return false
}

function jugarAdivinaLaPalabra () {
    alert('Bienvenido a jugar adivina la palabra oculta')
    alert('Tienes 3 intentos para adivinar la palabra')
    alert('-Pista- la palabra oculta es un lenguaje de programacion')
}

while (intentos > 0) {
    let suposicion = prompt('Adivina la Palabra: ')

    if (verificarSuposicion(suposicion, palabraOculta)) {
        alert('Correcto, has adivinado la palabra oculta')
        break
    } else {
        intentos--
        if (intentos > 0) {
            alert(`Incorrecto, aún te quedan ${intentos} intentos`)
        } else {
            alert(`Agotaste tus intentos, la palabra oculta era ${palabraOculta}`)
        }
    }
}

jugarAdivinaLaPalabra()