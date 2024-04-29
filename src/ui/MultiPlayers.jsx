import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Player from "./Player";
import { setPlayers } from "../features/multiPlayers";
function MultiPlayers() {
  const dispatch = useDispatch();

  const { playersNumber, players } = useSelector((store) => store.multiPlayers);
  const { playersNumber: number } = useSelector((store) => store.choices);

  useEffect(() => {
    dispatch(setPlayers(number));
  }, [dispatch, number]);

  return (
    <footer className="flex justify-center gap-4 max-w-2xl m-auto mb-5">
      {players.map((player, index) => (
        <Player player={player} index={index + 1} key={index} />
      ))}
    </footer>
  );
}

export default MultiPlayers;
