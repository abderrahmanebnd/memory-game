import { useDispatch, useSelector } from "react-redux";
import { checkMatch, flipCard } from "../features/game";
import { increaseMoves } from "../features/singlePlayer";

function Items() {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.game);
  const { theme, size } = useSelector((store) => store.choices);
  const { openedItems } = useSelector((store) => store.game);

  // Calculate grid size based on size
  const gridSize = size === 16 ? "4" : "6";

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

  return (
    <section
      className={`my-14 grid grid-cols-${gridSize}  gap-6 container m-auto `}
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

export default Items;
