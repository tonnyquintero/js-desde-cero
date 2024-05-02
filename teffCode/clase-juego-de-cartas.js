// Exercise Card Game Implementation

const deck = [5, 6, 7, 35, 65, 45, 82, 3, 96, 18, 41, 11, 23]

// Necesitamos barajarlas con el algoritmo de Fisher-Yates 

function shuffleDeck () {
    for (let i = deck.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]
        
    }
}

function dealCards (numCard) {
    const dealCards = deck.splice(0, numCard)
    return dealCards
}

shuffleDeck()

const player1Hand = dealCards(3)
const player2Hand = dealCards(3)
const player3Hand = dealCards(3)

console.log('Player 1 hand: ', player1Hand);
console.log('Player 2 hand: ', player2Hand);
console.log('Player 3 hand: ', player3Hand);
