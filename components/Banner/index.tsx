import React, { useEffect, useState } from "react";
import { checkWinner } from "../../helpers/checkWinner";
import { dealCard } from "../../helpers/dealCard";
import { CardProps, shuffledDeck } from "../../helpers/deck";
import { PARTICIPANT, Participant } from "../../pages";
import Card from "../../components/Card";

import styles from "./Banner.module.scss";
import { hitParticipant } from "../../helpers/hitParticipant";

export interface ParticipantsProps {
  player: Participant;
  house: Participant;
}

export interface SetParticipantsProps {
  player?: React.Dispatch<any>;
  house?: React.Dispatch<any>;
}

export interface BannerProps {
  participants: ParticipantsProps;
  setParticipants: SetParticipantsProps;
}

const Banner = (props: BannerProps) => {
  const { setParticipants, participants } = props;
  const [deck, setDeck] = useState<CardProps[]>(shuffledDeck());

  function newGame() {
    setParticipants.player?.(PARTICIPANT);
    setParticipants.house?.(PARTICIPANT);
    setDeck(shuffledDeck());
  }

  const dealHands = () => {
    dealCard({
      participantsState: setParticipants.house,
      name: "House",
      deck: deck,
    });
    dealCard({
      participantsState: setParticipants.player,
      name: "Player",
      deck: deck,
    });
  };

  useEffect(() => {
    checkWinner(participants);
  }, [participants]);

  return (
    <div className={styles.banner}>
      <div className={styles.buttons}>
        <Card
          isFaceDown
          children={<div className={styles.cardBack}>Deck: {deck.length}</div>}
          style={{ animation: "none", position: "relative" }}
        />

        {deck.length === 52 ? (
          <button className={styles.button} onClick={dealHands}>
            START
          </button>
        ) : (
          <>
            <button className={styles.button} onClick={newGame}>
              NEW GAME
            </button>
            <button
              className={styles.button}
              onClick={() =>
                hitParticipant({
                  setParticipants: { player: setParticipants.player },
                  participants: participants,
                  deck,
                })
              }
            >
              HIT ME
            </button>
            <button
              className={styles.button}
              onClick={() =>
                hitParticipant({
                  setParticipants: { house: setParticipants.house },
                  participants: participants,
                  deck,
                })
              }
            >
              STAY
            </button>
          </>
        )}
      </div>
      <span className={styles.gameName}>Blackjack</span>
    </div>
  );
};

export default Banner;
