// Enlace implícito. Implicit binding

const house = {
    dogName: 'Sheldon',
    dogGreeting: function() {
        console.log(`Hi, my name is ${this.dogName}`);
    }
}

house.dogGreeting(); // Salida: Hi, my name is Sheldon

// Enlace explícito

function dogGreeting() {
    console.log(`Hi, my name is ${this.dogName}`);
}

const newHouse = {
    dogName: 'Scannor',
}

dogGreeting.call(newHouse); // Salida: Hi, my name is Scannor

function newDogGreeting(owner, address) {
    console.log(`Hi, my name is ${this.dogName} and my owner is ${owner} and I live in ${address}`);
}

const owner = 'Beder';
const address = 'Calle 123';

newDogGreeting.call(newHouse, owner, address);
// Salida: Hi, my name is Scannor and my owner is Beder and I live in Calle 123