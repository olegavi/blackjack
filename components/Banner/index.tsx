import React, { useEffect } from "react";
import { CardProps, shuffledDeck } from "../../helpers/deck";
import { Participant } from "../../pages";

import styles from "./Banner.module.scss";

interface BannerProps {
  setGlobalDeck: React.Dispatch<CardProps[]>;
  deck: CardProps[];
  setPlayer: React.Dispatch<any>;
}

const Banner = (props: BannerProps) => {
  const { setGlobalDeck, deck, setPlayer } = props;

  useEffect(() => {
    setGlobalDeck(shuffledDeck());
  }, []);

  function newGame() {
    setGlobalDeck(shuffledDeck());
    dealHands();
  }

  function dealHands() {
    setPlayer((current: Participant) => {
      let cards = deck.splice(0, 2);
      const sumPoints = cards.reduce((accumulator, object) => {
        return accumulator + object.weight;
      }, 0);

      return { ...current, hand: cards, points: sumPoints };
    });
  }

  function hitMe() {
    setPlayer((current: Participant) => {
      let card = deck.pop();
      let caclPoints =
        current.points && card?.weight && current.points + card.weight;

      return {
        ...current,
        hand: [...current.hand, card],
        points: caclPoints,
      };
    });
  }

  return (
    <div className={styles.banner}>
      <div className={styles.buttons}>
        <div className={styles.cardBack}>Deck: {deck.length}</div>

        {deck.length < 52 ? (
          <button className={styles.button} onClick={newGame}>
            NEW GAME
          </button>
        ) : (
          <button className={styles.button} onClick={dealHands}>
            START
          </button>
        )}
        {deck.length < 52 && (
          <button className={styles.button} onClick={hitMe}>
            HIT ME
          </button>
        )}
      </div>
      <span className={styles.gameName}>Blackjack</span>
    </div>
  );
};

export default Banner;
