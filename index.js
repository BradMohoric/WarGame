//variables for suits and ranks of cards
const suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King',];
//variable to establish numerical values to the cards with aces low
const values = [1,2,3,4,5,6,7,8,9,10,11,12,13]

//card class with suit, rank, and value constructor
class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;


    }


}


//deck class referencing the card class
class Deck {
    constructor() {
        this.cards = [];
//loops for building the cards in the deck
                  for (let i = 0; i < suits.length; i++){
              for (let n = 0; n < values.length ; n++){
                this.cards.push(new Card(suits[i], ranks[n], values[n]));
            }
        }
    }

//function to shuffle the deck. shuffles a bit cleaner than some other methods I found
    shuffleDeck() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

//player class including a hand and score for each player
class Player {
    constructor() {
        this.hand = [];
        this.score = 0;
    }
}
//variable for a new deck inside the deck class
const newDeck = new Deck();
//calling the shuffle function to shuffle the new deck
newDeck.shuffleDeck();

//variables for player one and player two in the player class
let playerOne = new Player();
let playerTwo = new Player();

//function to deal the cards from the newly created and shuffled deck. splits it in half and gives half to each player
function dealCards(newDeck) {
    let dividedDeck = Math.ceil(newDeck.cards.length / 2);
    playerOne.hand = newDeck.cards.slice(0, dividedDeck);
    playerTwo.hand = newDeck.cards.slice(dividedDeck, newDeck.cards.length); 
}

//calls the function to deal the cards
dealCards(newDeck);

//first display in the console, "game start"
console.log('Game Start');

//start of the game logic, using the pop method to pick the first array element of each players hand array
for (let i = 0; i < 26; i++) {
    const playerOneCard = playerOne.hand.pop();
    const playerTwoCard = playerTwo.hand.pop();

    //displays the round number and what card each player draws
    console.log(`Round ${(i + 1)}\n
    Player One: ${playerOneCard.rank} of ${playerOneCard.suit}\n
    Player Two: ${playerTwoCard.rank} of ${playerTwoCard.suit}\n
    `);

    //if, if else, else loop to compare the two cards. displays the winner and each players score. updates each turn. Determines if a p1 win, p2 win, or tie
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
//game conclusion output to the console. displays the final score of both players
console.log(`Game has concluded \n
Player One's Final score is ${playerOne.score} \n
Player Two's Final score is ${playerTwo.score} 
`);
//final loop to determine the winner of the game. outputs to the console depending on the result
if (playerOne.score > playerTwo.score) {
    console.log(`Player One emerges victorious`);
}
else if(playerOne.score < playerTwo.score) {
    console.log(`Player Two emerges victorious`);
}
else {
    console.log(`The game has ended in a tie`);
}