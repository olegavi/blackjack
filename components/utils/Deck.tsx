const SUITS = ["♠", "♥", "♦", "♣"];
const VALUES = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function Deck() {
  const deck: Array<any> = [];

  for (let suit of SUITS) {
    for (let value of VALUES) {
      deck.push({ suit: suit, value: value });
    }
  }

  let counter = deck.length,
    temp,
    i;

  while (counter) {
    i = Math.floor(Math.random() * counter--);
    temp = deck[counter];
    deck[counter] = deck[i];
    deck[i] = temp;
  }

  return deck;
}
export default Deck;
