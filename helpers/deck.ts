export interface Card {
  value: string;
  suit: string;
}

const SUITS = ["spades", "diamonds", "clubs", "hearts"];
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

export function shuffledDeck() {
  let deck: Card[] = new Array();

  for (let i = 0; i < SUITS.length; i++) {
    for (let x = 0; x < VALUES.length; x++) {
      let card = { value: VALUES[x], suit: SUITS[i] };
      deck.push(card);
    }
  }

  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);
    let tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }

  return deck;
}
