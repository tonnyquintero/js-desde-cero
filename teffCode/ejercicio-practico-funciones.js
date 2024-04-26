// Create Powerpuff objects

function PowerpuffGirl (name, color, superpower) {
    this.name = name
    this.color = color
    this.superpower = superpower
    this.isLeader = false

    this.displayInfo = function() {
        console.log(`Powerpuff Girl Information:
        Name: ${this.name}
        Color: ${this.color}
        SuperPower: ${this.superpower}
        ${this.isLeader ? 'Leader: yes' : 'Leader: no'}
        `);
    }
    this.becomeALeader = function () {
        this.isLeader = true
        console.log(`${this.name} has become the leader of the girls!`);
    }
}

const blossom = new PowerpuffGirl('blossom', 'pink', 'ice breath')
const buttercup = new PowerpuffGirl('buttercup', 'green', 'super strength')
const bubbles = new PowerpuffGirl('bubbles', 'blue', 'flight')

blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()

blossom.becomeALeader()

blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()