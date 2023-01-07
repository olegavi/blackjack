import React, { CSSProperties, memo, ReactNode } from "react";
import { CardProps } from "../../helpers/deck";
import cx from "classnames";
import styles from "./Card.module.scss";

interface MyCardProps {
  card?: CardProps;
  index?: number;
  isFaceDown?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
}
export const Card = (props: MyCardProps) => {
  const { card, index = 0, isFaceDown, children, style } = props;
  const suitsType = (card: CardProps) => {
    let icon = "";

    if (card.suit == "hearts") icon = "♥";
    else if (card.suit == "spades") icon = "♣";
    else if (card.suit == "diamonds") icon = "♦";
    else icon = "♠";

    return icon;
  };
  return (
    <>
      {isFaceDown ? (
        <div
          className={cx(styles.card, styles.cardBack)}
          style={{
            left: `${index !== 0 && index * 20}px`,
            ...style,
          }}
        >
          {children}
        </div>
      ) : (
        <div
          className={styles.card}
          style={{
            left: `${index !== 0 && index * 20}px`,
          }}
        >
          <div className={styles.cardHead}>
            <span>{suitsType(card as CardProps)}</span>
            <span>{card?.value}</span>
          </div>
          <div className={styles.cardBody}>{suitsType(card as CardProps)}</div>
          <div className={styles.cardFooter}>
            <span>{suitsType(card as CardProps)}</span>
            <span>{card?.value}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Card);
