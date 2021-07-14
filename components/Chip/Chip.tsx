import React from "react";
import { GreenChip } from "../Icons/GreenChip";
import { BlueChip } from "../Icons/BlueChip";
import { BlackChip } from "../Icons/BlackChip";
import { RedChip } from "../Icons/RedChip";
import styles from "./Chip.module.scss";

export interface ChipProps {
  chipValue: 10 | 20 | 50 | 100;
}

const ChipBasedOnValue = (props: ChipProps) => {
  const { chipValue = 10 } = props;

  function selectChip() {
    switch (chipValue) {
      case 10:
        return <RedChip />;
      case 20:
        return <GreenChip />;

      case 50:
        return <BlueChip />;

      case 100:
        return <BlackChip />;

      default:
        return <RedChip />;
    }
  }

  return selectChip();
};

export function Chip(props: ChipProps) {
  const { chipValue = 10 } = props;
  return (
    <div className={styles.chip}>
      <div className={styles.valueHolder}>
        <span className={styles.chipValue}>${chipValue}</span>
      </div>

      <ChipBasedOnValue {...props} />
    </div>
  );
}

export default Chip;
