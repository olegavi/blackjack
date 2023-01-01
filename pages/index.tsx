import { useEffect, useState } from "react";
import { Card, shuffledDeck } from "../helpers/deck";

import styles from "./styles.module.scss";

interface Player {
  name?: string;
  points?: number;
  hand: Card[];
}

export default function Home() {
  const [deck, setDeck] = useState<Card[]>([]);
  // const [dealer, setDealer] = useState<Player>({
  //   name: "",
  //   points: 0,
  //   hand: [],
  // });
  const [player, setPlayer] = useState<Player>({
    name: "",
    points: 0,
    hand: [],
  });

  const [showWelcome, setShowWelcome] = useState<boolean>(true);

  useEffect(() => {
    setDeck(shuffledDeck());
  }, []);

  function dealCard(deck: Card[], isStartOfGame?: boolean) {
    if (isStartOfGame) {
      for (let x = 0; x < 2; x++) {
        let card = deck.pop();
        return card;
      }
    } else {
      return deck.pop();
    }
  }

  const suitsType = (card: Card) => {
    let icon = "";

    if (card.suit == "hearts") icon = "♥";
    else if (card.suit == "spades") icon = "♣";
    else if (card.suit == "diamonds") icon = "♦";
    else icon = "♠";

    return icon;
  };

  const handleClick = (isStartOfGame?: boolean) => {
    let delthCard = dealCard(deck, isStartOfGame);

    if (player.name !== "") {
      setPlayer((prev: Player) => ({
        ...prev,
        hand: [...prev.hand, delthCard] as Card[],
      }));

      setShowWelcome(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayer((prevState: Player) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  };

  return (
    <div className={styles.blackjack}>
      {showWelcome && (
        <div className={styles.welcome}>
          <form className={styles.form}>
            <label>
              Enter your name:
              <input
                type="text"
                id="username"
                onChange={handleChange}
                required
              />
            </label>
            <button
              className={styles.closeWelcome}
              onClick={() => handleClick(true)}
              type="submit"
            >
              Deal
            </button>
          </form>
        </div>
      )}

      <div className={styles.board}>
        <button
          className={styles.closeWelcome}
          onClick={() => handleClick(false)}
        >
          Deal
        </button>
        <div className={styles.player}>
          <span className={styles.playerName}>{player.name}</span>
          <div className={styles.playerHand}>
            {player.hand.map((card, key) => (
              <div className={styles.card} key={key}>
                <span>{suitsType(card)}</span>
                <span>{card.value}</span>
              </div>
            ))}
          </div>
        </div>
        {/* <div className={styles.dealer}>
          {dealerHand.map((card, key) => (
            <div className={styles.card} key={key}>
              <span>{suitsType(card)}</span>
              <span>{card.value}</span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
