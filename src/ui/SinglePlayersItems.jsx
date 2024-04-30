import { useDispatch, useSelector } from "react-redux";
import { checkMatch, endGame, flipCard } from "../features/game";
import { increaseMoves } from "../features/singlePlayer";
import { useEffect } from "react";

function SinglePlayersItems() {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.game);
  const { theme, size } = useSelector((store) => store.choices);
  const { openedItems, matchedPairs } = useSelector((store) => store.game);

  const handleClick = (index) => {
    if (items[index].opened || items[index].matched) {
      return;
    }

    dispatch(flipCard(index));
    dispatch(increaseMoves());
    // If there are exactly 2 opened cards, check for a match
    if (openedItems.length === 1) {
      setTimeout(() => {
        dispatch(checkMatch());
      }, 500);
    }
  };

  useEffect(() => {
    if (matchedPairs.length === size) {
      dispatch(endGame());
    }
  }, [matchedPairs, dispatch, size]);
  return (
    <section
      className={`my-10 md:my-14 grid ${size === 16 ? "grid-cols-4" : "grid-cols-6"} gap-y-2 gap-x-4 place-items-center justify-center max-w-lg m-auto`}
    >
      {items.map((item, index) => (
        <div key={index} onClick={() => handleClick(index)}>
          {item.opened || item.matched ? (
            <div
              className={`text-5xl ${item.matched ? "bg-neutral-300" : "bg-primary-300"} text-white w-12 h-12 sm:h-20 sm:w-20 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300`}
            >
              {theme === "Icons" ? (
                <img
                  src={`/assets/${item.value}.svg`}
                  alt="icon"
                  className="w-9 sm:w-12"
                />
              ) : (
                item.value
              )}
            </div>
          ) : (
            <div className="text-5xl bg-neutral-700 text-neutral-300 w-12 h-12 sm:h-20 sm:w-20  rounded-full flex justify-center items-center  hover:bg-neutral-400 cursor-pointer transition-all duration-300"></div>
          )}
        </div>
      ))}
    </section>
  );
}

export default SinglePlayersItems;
