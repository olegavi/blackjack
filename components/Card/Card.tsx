import React from "react";
import { CardProps } from "../../helpers/deck";

import styles from "./Card.module.scss";

interface MyCardProps {
  card: CardProps;
  index: number;
}
const Card = (props: MyCardProps) => {
  const { card, index } = props;
  const suitsType = (card: CardProps) => {
    let icon = "";

    if (card.suit == "hearts") icon = "♥";
    else if (card.suit == "spades") icon = "♣";
    else if (card.suit == "diamonds") icon = "♦";
    else icon = "♠";

    return icon;
  };
  return (
    <div
      className={styles.card}
      key={index}
      style={{
        left: `${index !== 0 && index * 20}px`,
        top: "initial",
      }}
    >
      <span>{suitsType(card as CardProps)}</span>
      <span>{card.value}</span>
    </div>
  );
};

export default Card;
