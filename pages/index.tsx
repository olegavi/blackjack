import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { CardProps } from "../helpers/deck";

import styles from "./styles.module.scss";

export interface Participant {
  name?: string;
  points?: number;
  hand: (CardProps | undefined)[];
}
export const PARTICIPANT = { points: 0, hand: [] };

export const Home = () => {
  const [player, setPlayer] = useState<Participant>(PARTICIPANT);
  const [house, setHouse] = useState<Participant>(PARTICIPANT);
  const [houseHiddenCard, setHouseHiddenCard] = useState<boolean>(true);

  useEffect(() => {
    console.log(house.hand.length);

    if (house.hand.length > 2) setHouseHiddenCard(false);
  }, [house.hand.length]);

  return (
    <div className={styles.blackjack}>
      <div className={styles.board}>
        <div className={styles.participant}>
          <span className={styles.participantName}>
            HOUSE:
            <span className={styles.points}>
              {houseHiddenCard ? "?" : house.points}
            </span>
          </span>

          <div className={`${styles.participantHand} ${styles.houseHand}`}>
            {house.hand.map((card, idx) => {
              return (
                <Card
                  key={idx}
                  card={card as CardProps}
                  index={idx}
                  isFaceDown={idx === 0 && houseHiddenCard}
                />
              );
            })}
          </div>
        </div>

        <Banner
          setParticipants={{ player: setPlayer, house: setHouse }}
          participants={{ player: player, house: house }}
        />

        <div className={styles.participant}>
          <p className={styles.participantName}>
            PLEYER: <span className={styles.points}>{player.points}</span>
          </p>

          <div className={styles.participantHand}>
            {player.hand.map((card, idx) => (
              <Card key={idx} card={card as CardProps} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
