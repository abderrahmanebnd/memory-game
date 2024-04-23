import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";

function StartSection() {
  const dispatch = useDispatch();
  const [activeSelections, setActiveSelections] = useState({
    theme: "",
    number: "",
    size: "",
  });

  const handleSetActive = (role, value) => {
    setActiveSelections({
      ...activeSelections,
      [role]: value,
    });
  };

  return (
    <section className="bg-white w-96 p-7 rounded-2xl">
      <div>
        <h3 className="font-semibold text-neutral-400 mb-2 text-md">
          Select Theme
        </h3>
        <div className="grid grid-cols-2 gap-5 mb-5">
          <Button
            dispatch={dispatch}
            role={"theme"}
            isActive={activeSelections.theme === "Numbers"}
            setActive={handleSetActive}
          >
            Numbers
          </Button>
          <Button
            dispatch={dispatch}
            role={"theme"}
            isActive={activeSelections.theme === "Icons"}
            setActive={handleSetActive}
          >
            Icons
          </Button>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-neutral-400 mb-2 text-md">
          Number of Players
        </h3>
        <div className="grid grid-cols-4 gap-5 mb-5">
          <Button
            dispatch={dispatch}
            role={"number"}
            isActive={activeSelections.number === "1"}
            setActive={handleSetActive}
          >
            1
          </Button>
          <Button
            dispatch={dispatch}
            role={"number"}
            isActive={activeSelections.number === "2"}
            setActive={handleSetActive}
          >
            2
          </Button>
          <Button
            dispatch={dispatch}
            role={"number"}
            isActive={activeSelections.number === "3"}
            setActive={handleSetActive}
          >
            3
          </Button>
          <Button
            dispatch={dispatch}
            role={"number"}
            isActive={activeSelections.number === "4"}
            setActive={handleSetActive}
          >
            4
          </Button>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-neutral-400 mb-2 text-md">
          Grid Size
        </h3>
        <div className="grid grid-cols-2 gap-5 mb-5">
          <Button
            dispatch={dispatch}
            role={"size"}
            isActive={activeSelections.size === "4x4"}
            setActive={handleSetActive}
          >
            4x4
          </Button>
          <Button
            dispatch={dispatch}
            role={"size"}
            isActive={activeSelections.size === "6x6"}
            setActive={handleSetActive}
          >
            6x6
          </Button>
        </div>
      </div>
      <Button dispatch={dispatch} type={"primary"}>
        Start Game
      </Button>
    </section>
  );
}

export default StartSection;
