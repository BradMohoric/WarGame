const suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King',];
//variable to establish numerical values to the cards with aces low
const values = {
    'Ace': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'Jack': 11,
    'Queen': 12,
    'King': 13

}

class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
        

    }

    
}



class Deck {
    constructor() {
        this.cards = [];

        for (let suit in suits) {
            for (let rank in ranks) {
                for (let value in values)
                this.cards.push(new Card(suits[suit], ranks[rank], values[value]));
                
            }
        }
    }

    shuffleDeck() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Player {
    constructor() {
        this.hand = [];
        this.score = 0;
    }
}

const newDeck = new Deck();
newDeck.shuffleDeck();

let playerOne = new Player();
let playerTwo = new Player();

function dealCards(newDeck) {
    let dividedDeck = Math.ceil(newDeck.cards.length / 2);
    playerOne.hand = newDeck.cards.slice(0, dividedDeck);
    playerTwo.hand = newDeck.cards.slice(dividedDeck, newDeck.cards.length); 
}

dealCards(newDeck);


console.log('Game Start');

for (let i = 0; i < 26; i++) {
    const playerOneCard = playerOne.hand.pop();
    const playerTwoCard = playerTwo.hand.pop();

    console.log(`Round ${(i + 1)}\n
    Player One: ${playerOneCard.rank} of ${playerOneCard.suit}\n
    Player Two: ${playerTwoCard.rank} of ${playerTwoCard.suit}\n
    `);

    if (playerOneCard.value > playerTwoCard.value) {
        playerOne.score++;
        console.log(`
        Player One wins round ${(i + 1)}\n
        Player One Score - ${playerOne.score}\n
        Player Two score - ${playerTwo.score}\n
        `);
    }
    else if (playerOneCard.value < playerTwoCard.value) {
        playerTwo.score++;
        console.log(`
        Player Two wins round ${(i + 1)}\n
        Player One score - ${playerOne.score}\n
        Player Two score - ${playerTwo.score}\n
        `);
    }
    else {
        console.log(`Round ${(i + 1)} ends in a tie\n
        Player One score - ${playerOne.score}\n
        Player Two score - ${playerTwo.score}\n
        `);
    }
}

console.log(`Game has concluded \n
Player One's Final score is ${playerOne.score} \n
Player Two's Final score is ${playerTwo.score} 
`);

if (playerOne.score > playerTwo.score) {
    console.log(`Player One emerges victorious`);
}
else if(playerOne.score < playerTwo.score) {
    console.log(`Player Two emerges victorious`);
}
else {
    console.log(`The game has ended in a tie`);
}