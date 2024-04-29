import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { startGame } from "../features/game";

import SinglePlayer from "../ui/SinglePlayer";
import MultiPlayers from "../ui/MultiPlayers";
import Header from "../ui/Header";
import SinglePlayersItems from "../ui/SinglePlayersItems";
import MultiPlayersItems from "../ui/MultiPlayersItems";

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
    <main className="py-10 px-20  m-auto relative">
      <Header />
      {/* this condition will always give the singlePlayersItems because the multiplayers causes problems until we fix it */}
      {number === 1 ? (
        <>
          <SinglePlayersItems />
          <SinglePlayer />
        </>
      ) : (
        <>
          <MultiPlayersItems />
          <MultiPlayers />
        </>
      )}
    </main>
  );
}

export default Game;
