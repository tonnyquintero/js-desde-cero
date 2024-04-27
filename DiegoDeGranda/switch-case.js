let expresion = 'manzanas'

switch (expresion) {
    case 'naranjas':
        console.log('Las naranjas cuestan 20 pesos el kilo');
        break;
    case 'manzanas' :
    case 'mandarina' :
        console.log('Las manzanas y las mandarinas cuestan 50 pesos el kilo');
        break;
    case 'platanos' :
        console.log('Los platanos cuestan 30 pesos el kilo');
        break
    default:
        console.log(`Lo siento, no contamos con ${expresion}`);
        break;
}