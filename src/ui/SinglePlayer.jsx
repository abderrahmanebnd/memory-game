import { useSelector } from "react-redux";
import Counter from "./Counter";

function SinglePlayer() {
  const { moves } = useSelector((state) => state.singlePlayer);
  return (
    <footer
      className="flex
     justify-center gap-4"
    >
      <div className="flex justify-between items-center w-40 bg-neutral-200 rounded-xl p-3">
        <span className="text-sm font-semibold text-neutral-500">Time</span>
        <Counter />
      </div>
      <div className="flex justify-between items-center w-44 bg-neutral-200 rounded-xl p-3">
        <span className="text-sm font-semibold text-neutral-500">Moves</span>
        <span className="text-xl font-semibold text-neutral-800 ">{moves}</span>
      </div>
    </footer>
  );
}

export default SinglePlayer;
