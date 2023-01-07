import { BannerProps, SetParticipantsProps } from "../components/Banner";
import { Participant } from "../pages";
import { checkWinner } from "./checkWinner";
import { CardProps } from "./deck";

type HitParticipantProps = {
  deck: CardProps[];
} & BannerProps;

export function hitParticipant(props: HitParticipantProps) {
  const { participants, setParticipants, deck } = props;

  if (setParticipants.player) {
    setParticipants.player((current: Participant) => {
      let card = deck.pop();
      let caclPoints =
        current.points && card?.weight && current.points + card.weight;

      return {
        ...current,
        hand: [...current.hand, card],
        points: caclPoints,
      };
    });
  } else {
    let housePoints = participants.house.points || 0;

    while (housePoints < 21) {
      setParticipants.house?.((current: Participant) => {
        let card = deck.pop();
        let caclPoints =
          current.points && card?.weight && current.points + card.weight;

        return {
          ...current,
          hand: [...current.hand, card],
          points: caclPoints,
        };
      });
      housePoints += participants.house.points as number;
    }
  }
  checkWinner(participants);
}
