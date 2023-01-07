import React from "react";
import styles from "./WinnerPopup.module.scss";
const WinnerPopup = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.ribbon}>
        {" "}
        <strong className={styles.ribbonContent}>Winner is Player</strong>
      </div>
    </div>
  );
};

export default WinnerPopup;
