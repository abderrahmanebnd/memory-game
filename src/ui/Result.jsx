import { useSelector } from "react-redux";
import { formatTime } from "../utils/helpers";

function Result() {
  const { moves, time } = useSelector((store) => store.singlePlayer);
  const formattedTime = formatTime(time);
  return (
    <div>
      <div className="bg-neutral-200 py-3 px-5 flex justify-between items-center rounded-md mb-3">
        <span className="font-semibold text-neutral-500 text-sm">
          Time Elapsed
        </span>
        <time className="text-neutral-800 font-semibold text-xl">
          {formattedTime}
        </time>
      </div>
      <div className="bg-neutral-200 py-3 px-5 flex justify-between items-center rounded-md mb-7">
        <span className="font-semibold text-neutral-500 text-sm">
          Moves Taken
        </span>
        <time className="text-neutral-800 font-semibold text-xl">
          {moves} Moves
        </time>
      </div>
    </div>
  );
}

export default Result;
