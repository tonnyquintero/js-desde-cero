function Rocket (name, owner) {
    this.name = name
    this.owner = owner
    this.launchMessage = function () {
        console.log('Succesfull Launching')
    }
}

const falcon9Rocket = new Rocket('falcon 9', 'Elon Musk')
const falconHeavyRocket = new Rocket('falcon Heavy')

console.log(falcon9Rocket.name);
console.log(falcon9Rocket.owner);
console.log(falcon9Rocket.launchMessage());