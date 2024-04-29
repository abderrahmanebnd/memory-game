import { useDispatch, useSelector } from "react-redux";
import { checkMatch, endGame, flipCard } from "../features/game";
import { useEffect } from "react";
import { changePlayers, incrementMatchedPairs } from "../features/multiPlayers";

function MultiPlayersItems() {
  const dispatch = useDispatch();
  const { currentTurn } = useSelector((store) => store.multiPlayers);
  const { theme, size } = useSelector((store) => store.choices);
  const { items, openedItems, matchedPairs, areMatchedPairs } = useSelector(
    (store) => store.game
  );

  const handleClick = (index) => {
    if (items[index].opened || items[index].matched) {
      return;
    }

    dispatch(flipCard(index));
    // If there are exactly 2 opened cards, check for a match
    if (openedItems.length === 1) {
      // Dispatch checkMatch synchronously

      // Wait for a short time before checking if pairs are matched
      setTimeout(() => {
        dispatch(checkMatch());
        if (areMatchedPairs) {
          dispatch(incrementMatchedPairs());
        } else {
          dispatch(changePlayers()); // Change players if pairs are not matched
        }
      }, 300);
    }
  };

  useEffect(() => {
    if (matchedPairs.length === size) {
      dispatch(endGame());
    }
  }, [matchedPairs, dispatch, size]);
  return (
    <section
      className={`my-14 grid ${size === 16 ? "grid-cols-4" : "grid-cols-6"}  gap-6 place-items-center justify-center max-w-2xl m-auto`}
    >
      {items.map((item, index) => (
        <div key={index} onClick={() => handleClick(index)}>
          {item.opened || item.matched ? (
            <div
              className={`text-5xl ${item.matched ? "bg-neutral-300" : "bg-primary-300"} text-white h-20 w-20 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300`}
            >
              {theme === "Icons" ? (
                <img
                  src={`/assets/${item.value}.svg`}
                  alt="icon"
                  className="w-12"
                />
              ) : (
                item.value
              )}
            </div>
          ) : (
            <div className="text-5xl bg-neutral-700 text-neutral-300 h-20 w-20 rounded-full flex justify-center items-center  hover:bg-primary-300 cursor-pointer transition-all duration-300"></div>
          )}
        </div>
      ))}
    </section>
  );
}

export default MultiPlayersItems;
