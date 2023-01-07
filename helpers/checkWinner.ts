import { ParticipantsProps } from "../components/Banner";

export function checkWinner(currentPlayer: ParticipantsProps) {
  const { player, house } = currentPlayer;

  if (player.points && player.points > 21) {
    alert("House Wins!");
  }
  if (house.points && house.points > 21) {
    alert("Player Wins!");
  }
}
