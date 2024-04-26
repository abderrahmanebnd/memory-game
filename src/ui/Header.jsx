import { NavLink } from "react-router-dom";
import Button from "./Button";

function Header() {
  return (
    <header className="flex items-center justify-between max-w-2xl m-auto">
      <NavLink to="/">
        <img src="/assets/logo.svg" className="w-28" alt="logo" />
      </NavLink>
      <div className="flex items-center w-[300px] gap-4 ">
        <Button role="start" type="primary">
          Restart
        </Button>
        <Button role="newGame">New Game</Button>
      </div>
    </header>
  );
}

export default Header;
