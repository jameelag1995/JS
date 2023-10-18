/* -------------------------------------------------------------------------- */
/*                           Making a Deck of Cards                           */
/* -------------------------------------------------------------------------- */
const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ["hearts", "diamonds", "spades", "clubs"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    initializeDeck() {
        const { deck, suits, values } = this;
        for (let value of values.split(",")) {
            for (let suit of suits) {
                deck.push({
                    value,
                    suit,
                });
            }
        }
    },
    drawCard(deck) {
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(numOfCards) {
        const cards = [];
        for (let i = 0; i < numOfCards; i++) {
            cards.push(this.drawCard());
        }
        return cards;
    },
    shuffle() {
        const { deck } = this;
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    },
};

myDeck.initializeDeck();
myDeck.shuffle();
console.log(myDeck.deck);

/* -------------------------------------------------------------------------- */
/*                           Creating a Deck Factory                          */
/* -------------------------------------------------------------------------- */
const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suits: ["hearts", "diamonds", "spades", "clubs"],
        values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
        initializeDeck() {
            const { deck, suits, values } = this;
            for (let value of values.split(",")) {
                for (let suit of suits) {
                    deck.push({
                        value,
                        suit,
                    });
                }
            }
        },
        drawCard(deck) {
            const card = this.deck.pop();
            this.drawnCards.push(card);
            return card;
        },
        drawMultiple(numOfCards) {
            const cards = [];
            for (let i = 0; i < numOfCards; i++) {
                cards.push(this.drawCard());
            }
            return cards;
        },
        shuffle() {
            const { deck } = this;
            for (let i = deck.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
        },
    };
};
