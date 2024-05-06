// Methods that iterate over an array
// Methods that DO NOT modify the original array (Inmutability)

// find()

const multipleOf5 = [0, 5, 10, 15, 20]
const fisrtNumberGreterOfTen = multipleOf5.find(number => number > 10)

console.log(fisrtNumberGreterOfTen); //15

// findIndex()

const randomNumber = [6, 45, 84, 3 , 12]
const indexNumber = randomNumber.findIndex(number => number > 50)

console.log(indexNumber); //2

// Practic Exercise 

const participants = [
    {id: 1, name: 'Yenifer', ticketNumber: 252 },
    {id: 2, name: 'Anthony', ticketNumber: 155 },
    {id: 3, name: 'Roxana', ticketNumber: 123 },
    {id: 4, name: 'Willie', ticketNumber: 8 },
    {id: 5, name: 'Erduin', ticketNumber: 65 }
]

function findByName (nombre) {
    const winner = participants.find(name => name.name === nombre)
    return winner || 'No winner found with that name'
}

function findByTicket (tike) {
    const winnerTicket = participants.find(ticket => ticket.ticketNumber === tike)
    return winnerTicket || 'No ticket found with that number'
}

console.log(findByName('Willie'));
console.log(findByTicket(155));

