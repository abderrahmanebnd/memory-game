import { useDispatch, useSelector } from "react-redux";
import SinglePlayer from "../ui/SinglePlayer";
import MultiPlayers from "../ui/MultiPlayers";
import Header from "../ui/Header";
import Items from "../ui/Items";
import { useEffect } from "react";
import { startGame } from "../features/game";

function Game() {
  const {
    theme,
    size,
    playersNumber: number,
  } = useSelector((store) => store.choices);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGame(theme, size));
  }, [dispatch, size, theme]);
  return (
    <main className="py-10 px-20  m-auto">
      <Header />
      <Items />
      {number === 1 ? <SinglePlayer /> : <MultiPlayers />}
    </main>
  );
}

export default Game;
