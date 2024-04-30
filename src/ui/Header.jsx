import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { Overlay } from "./SinglePlayerDialog";

function Header() {
  const [showButtons, setShowButtons] = useState(false); // Initially show buttons on desktop

  const toggleButtons = () => {
    setShowButtons((showButtons) => !showButtons);
  };

  return (
    <header className="flex items-center justify-between max-w-2xl m-auto">
      <NavLink to="/">
        <img src="/assets/logo.svg" className="w-28" alt="logo" />
      </NavLink>

      <div className="hidden md:flex items-center w-[300px] gap-4">
        <Button role="start" type="primary">
          Restart
        </Button>
        <Button role="newGame">New Game</Button>
      </div>
      {/* Burger menu icon */}
      <div className="md:hidden">
        <button
          className="text-white bg-primary-400 px-3 py-1 rounded-lg font-semibold "
          onClick={toggleButtons}
        >
          Menu
        </button>
      </div>

      {showButtons && (
        <>
          <Overlay />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-64 bg-white shadow-lg rounded-xl z-50 p-4 space-y-3">
            <Button role="start" type="primary" onClick={toggleButtons}>
              Restart
            </Button>
            <Button role="newGame">New Game</Button>
            <Button onClick={toggleButtons} role="resumeGame">
              Resume Game
            </Button>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
