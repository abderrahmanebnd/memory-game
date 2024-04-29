import { useSelector } from "react-redux";

function Player({ player, index }) {
  //   const { players } = useSelector((store) => store.multiPlayers);
  return (
    <div
      className={` py-2 px-4 rounded-md w-1/4 flex justify-between items-center relative ${player.turn ? "bg-primary-400" : "bg-neutral-200"}`}
    >
      {player.turn && (
        <span
          className={`absolute w-0 h-0 border-solid border-[1rem] border-transparent  border-b-primary-400 -top-8 left-1/2 -translate-x-1/2 `}
        ></span>
      )}
      <span
        className={`${player.turn ? "text-white" : "text-neutral-500"} font-semibold text-sm`}
      >
        Player{index}
      </span>
      <span
        className={`${player.turn ? "text-white" : "text-neutral-800"} font-semibold text-2xl`}
      >
        {player.matchedPairs}
      </span>
      {player.turn && (
        <span className="uppercase absolute text-xs font-semibold text-neutral-600 whitespace-nowrap -bottom-7 left-1/2 -translate-x-1/2">
          current turn
        </span>
      )}
    </div>
  );
}

export default Player;
