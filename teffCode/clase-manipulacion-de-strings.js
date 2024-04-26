const stringPrimitivo='Soy un string primitivo'
console.log(typeof stringPrimitivo)
const stringPrimitivoTambien=String('Soy un string primitivo tambien')
console.log(typeof stringPrimitivoTambien)
const stringObjeto=new String('Soy un string objeto')
console.log(typeof stringObjeto)
const saludo='Hola. ¿Como estas?'
console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('Como'))
console.log(saludo.indexOf('como'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3,5))
console.log(saludo.length)
console.log(saludo.toLocaleUpperCase())
console.log(saludo.toLocaleLowerCase())
const saludoDividido=saludo.split(' ')
console.log(saludoDividido)
console.log(saludoDividido[1])
const saludoConEspacios=' Hola Mundo '
const saludoSinEspacios=saludoConEspacios.trim()
console.log(saludoSinEspacios)
const saludoOriginal='Hola Mundo'
const nuevoSaludo=saludoOriginal.replace('Mundo','usuario')
console.log(nuevoSaludo)

'midudev'[1] //i
'midudev'.includes('dev') //true
'midudev'.startsWith('midu') //true
'midudev'.endsWith('paint') //false
'midudev'.slice(4) // 'dev'
'midu'.repeat(3) // midumidumidu

function adivinarApellido (usuario) {
    const separacion = usuario.split(' ')
    console.log('Tu apellido es ' + separacion[1]); 
}

nombreYApellido = "Anthony Quintero"

adivinarApellido(nombreYApellido)