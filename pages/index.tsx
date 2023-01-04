import React, { useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card/Card";
import { CardProps } from "../helpers/deck";

import styles from "./styles.module.scss";

export interface Participant {
  points?: number;
  hand: (CardProps | undefined)[];
}
const PARTICIPANT = { points: 0, hand: [] };

export default function Home() {
  const [deck, setDeck] = useState<CardProps[]>([]);
  const [player, setPlayer] = useState<Participant>(PARTICIPANT);
  const [house, setHouse] = useState<Participant>(PARTICIPANT);

  return (
    <div className={styles.blackjack}>
      <div className={styles.board}>
        <div className={styles.player}>
          <span className={styles.playerName}>HOUSE</span>

          <div className={`${styles.playerHand} ${styles.houseHand}`}>
            {house.hand.map((card, idx) => (
              <div></div>
            ))}
          </div>
        </div>

        <Banner deck={deck} setGlobalDeck={setDeck} setPlayer={setPlayer} />

        <div className={styles.player}>
          <p className={styles.playerName}>
            PLEYER: <span className={styles.points}>{player.points}</span>{" "}
          </p>

          <div className={styles.playerHand}>
            {player.hand.map((card, idx) => (
              <Card card={card as CardProps} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
