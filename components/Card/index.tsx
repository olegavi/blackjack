import React from "react";
import styles from "./Card.module.scss";
import { CardBack } from "../Icons/CardBack";

export interface CardProps {
  suit: string;
  value: number | string;
  side: "front" | "back";
}

const CardFront = (props: CardProps) => {
  const { suit, value } = props;
  return (
    <div className={styles.card}>
      <span className={styles.suit}>{suit}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export function Card(props: CardProps) {
  const { side, suit } = props;

  return side === "front" ? <CardFront {...props} /> : <CardBack />;
}

export default Card;
