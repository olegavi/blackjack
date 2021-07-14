import React, { useState } from "react";
import Deck from "../components/utils/Deck";
import Deal from "../components/utils/Deal";
import Card from "../components/Card";

const deck = Deck();
let playerHand = [] as any[];

function RenderCards() {
  const [cards, setCards] = useState([] as any[]);
  let card = Deal(deck);

  const addItems = () => {
    if (
      card[0].value === "J" ||
      card[0].value === "Q" ||
      card[0].value === "K"
    ) {
      playerHand.push(10);
    } else if (card[0].value === "A") {
      if (sum <= 10) {
        playerHand.push(11);
      } else {
        playerHand.push(1);
      }
    } else {
      playerHand.push(card[0].value);
    }

    setCards([
      ...cards,
      {
        id: cards.length,
        suit: card[0].suit,
        value: card[0].value,
      },
    ]);

    var sum = playerHand.reduce(function (a, b) {
      return a + b;
    }, 0);
  };

  return (
    <>
      <button onClick={addItems}>Deal</button>

      {cards.map((item) => (
        <Card
          key={item.id}
          side={"front"}
          suit={item.suit}
          value={item.value}
        />
      ))}
    </>
  );
}

export default function index() {
  return <RenderCards />;
}
