import { useSelector } from "react-redux";
import {
  selectGridSize,
  selectNumberofPlayers,
  selectTheme,
} from "../features/choices";

function Button({
  children,
  type = "",
  role = "",
  dispatch,
  isActive,
  setActive,
}) {
  let primaryStyle = "";

  if (type === "primary") {
    primaryStyle =
      "bg-primary-400 hover:bg-primary-300 focus:bg-primary-300 focus:ring-primary-400";
  }

  const buttonStyle = `w-full rounded-full py-[2px] px-4 capitalize font-semibold text-lg tracking-wide text-gray-300 transition-all duration-300 ${isActive ? "bg-neutral-800" : "bg-neutral-300"} hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-neutral-500 focus:ring-4 focus:ring-offset-2 ${primaryStyle}`;

  function handleClick() {
    if (type !== "primary") {
      setActive(role, children);
    }
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

  return (
    <button onClick={() => handleClick()} className={buttonStyle}>
      {children}
    </button>
  );
}

export default Button;
