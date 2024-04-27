// lo utilizamos para no objetos, no para listas ni strings

const listaDeCompras = {
    manzana: 5,
    naranja: 12,
    uva: 30,
    apio: 4
}

for (fruta in listaDeCompras) {
    console.log(fruta);
}

for (fruta in listaDeCompras) {
    console.log(`${fruta}: ${listaDeCompras[fruta]}`);
}

console.log(listaDeCompras.manzana); // 5