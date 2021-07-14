import React from "react";
import styles from "./Avatar.module.scss";

interface UsersProps {
  player?: number | string;
  computer?: number | string;
}

export interface AvatarProps {
  user?: "player" | "computer";
  wallet?: UsersProps;
  name: string;
}

const ActiveUser = (props: AvatarProps) => {
  const { user, image, wallet, name } = props;

  return (
    <>
      {user === "player" ? (
        <>
          <img src={"./static/player.png"} alt="" />
          <div className={styles.info}>
            <span>${wallet?.player}</span>
            <span>{name}</span>
          </div>
        </>
      ) : (
        <>
          <img src={"./static/computer.png"} alt="" />
          <div className={styles.info}>
            <span>${wallet?.computer}</span>
            <span>COMPUTER</span>
          </div>
        </>
      )}
    </>
  );
};

export function Avatar(props: AvatarProps) {
  return (
    <div
      className={`${
        props.user === "computer" ? styles["avatar-computer"] : styles.avatar
      }`}>
      <ActiveUser {...props} />
    </div>
  );
}

export default Avatar;
