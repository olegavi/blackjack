import { Participant } from "../pages";
import { CardProps } from "./deck";

interface DealCardProps {
  participantsState?: React.Dispatch<any>;
  name: string;
  deck: CardProps[];
}

export function dealCard(props: DealCardProps) {
  const { deck, participantsState, name } = props;

  let cards = deck.splice(0, 2);
  participantsState?.((current: Participant) => {
    const sumPoints = cards.reduce((accumulator, object) => {
      return accumulator + object.weight;
    }, 0);

    return { ...current, hand: cards, points: sumPoints, name: name };
  });
}
