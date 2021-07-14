import React from "react";
import Avatar, { AvatarProps } from "../Avatar/Avatar";
import styles from "./EnterName.module.scss";

export interface EnterNameProps {
  user: AvatarProps;
}

export function EnterName(props: EnterNameProps) {
  const { user } = props;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Avatar user={"player"} name={user.name} />
      </div>
    </div>
  );
}

export default EnterName;
