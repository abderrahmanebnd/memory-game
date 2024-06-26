import { NavLink } from "react-router-dom";
import {
  selectGridSize,
  selectNumberofPlayers,
  selectTheme,
} from "../features/choices";

import { useDispatch, useSelector } from "react-redux";
import { newGame, startGame } from "../features/game";
import { resetPlayer } from "../features/singlePlayer";

function Button({ children, type = "", role = "", isActive, onClick }) {
  let primaryStyle = "";
  if (type === "primary") {
    primaryStyle =
      "bg-primary-400 hover:bg-primary-300 focus:bg-primary-300 focus:ring-primary-400 ";
  }

  const buttonStyle = `w-full rounded-full py-[5px] px-4 capitalize font-semibold text-xs sm:text-lg
  text-center  text-gray-300 transition-all duration-300 ${isActive ? "bg-neutral-800" : "bg-neutral-300"} hover:bg-neutral-400 focus:bg-neutral-800 focus:outline-none focus:ring-neutral-500 focus:ring-4 focus:ring-offset-2  block ${primaryStyle}`;

  const { theme, size } = useSelector((store) => store.choices);
  const dispatch = useDispatch();

  function handleClick() {
    if (role === "resumeGame") {
      onClick();
    } else if (role === "newGame") {
      dispatch(newGame());
    } else if (role === "start") {
      onClick?.();
      dispatch(startGame(theme, size));
      dispatch(resetPlayer());
    } else {
      onClick(role, children);
      if (role === "theme") {
        dispatch(selectTheme(children));
      }
      if (role === "number") {
        dispatch(selectNumberofPlayers(+children));
      }
      if (role === "size") {
        dispatch(selectGridSize(children[0] ** 2));
      }
    }
  }

  if (role === "start") {
    return (
      <NavLink to="/game" onClick={() => handleClick()} className={buttonStyle}>
        {children}
      </NavLink>
    );
  }
  if (role === "newGame") {
    return (
      <NavLink to="/" onClick={() => handleClick()} className={buttonStyle}>
        {children}
      </NavLink>
    );
  }
  return (
    <button onClick={() => handleClick()} className={buttonStyle}>
      {children}
    </button>
  );
}

export default Button;
