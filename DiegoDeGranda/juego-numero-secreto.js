//ADIVINA EL NUMERO SECRETO

const secretNumber = Math.floor(Math.random() * 10 + 1)

const numberPlayer = parseInt(prompt('Adivina el número secreto entre el 1 al 10'));

if (numberPlayer === secretNumber) {
    console.log('Felicidades, adivinaste el número!!')
} else if (numberPlayer < secretNumber) {
    console.log('El numero secreto es mayor, intenta de nuevo')
} else {
    console.log('El numero secreto es menor, intenta de nuevo')
};