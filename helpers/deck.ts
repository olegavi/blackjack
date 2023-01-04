export interface CardProps {
  value: string;
  suit: string;
  weight: number;
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
  let deck: CardProps[] = new Array();

  for (let i = 0; i < VALUES.length; i++) {
    for (let x = 0; x < SUITS.length; x++) {
      let weight = parseInt(VALUES[i]);
      if (VALUES[i] == "J" || VALUES[i] == "Q" || VALUES[i] == "K") weight = 10;
      if (VALUES[i] == "A") weight = 11;
      let card = { value: VALUES[i], suit: SUITS[x], weight: weight };

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
