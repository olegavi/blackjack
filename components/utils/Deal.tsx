function Deal(deck: Array<any>) {
  let hand: Array<any> = [];

  while (hand.length < 1) {
    hand.push(deck.pop());
  }
  return hand;
}

export default Deal;
